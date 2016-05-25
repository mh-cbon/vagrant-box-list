
var path    = require('path');
var fs      = require('fs')
var async   = require('async')
var glob    = require("glob")

function vagrantBoxList (done) {
  var home = require('homedir')();
  var vagrantPath = path.join(home, '.vagrant.d', 'boxes')

  var items = [];

  async.series([
    function (next) {
      fs.readdir(vagrantPath, function (err, files) {
        if (!err) files.forEach(function(file) {
          items.push({
            path: path.join(vagrantPath, file),
            versions: {},
            name: file.replace(/-VAGRANTSLASH-/g, '\/')
          })
        })
        next()
      })
    },
   function (next) {
     var todos = [];
     items.forEach(function (item) {
       todos.push(function (nnext) {
        glob("**/**", {cwd: item.path, mark: true}, function (er, files) {
          if (files.indexOf('metadataurl')>-1) {
            item.url = fs.readFileSync(path.join(item.path, 'metadataurl'))
            item.url = item.url.toString().replace(/^\s+/, '').replace(/\s+$/, '')
            files.slice(files.indexOf('metadataurl'), 1)
          }
          files.forEach(function (f) {
            if(f.match(/^([^\/]+)\/[^\/]+\/.+/) && f.match(/\//g).length>1) {
              var ver = f.match(/^([^\/]+)\/[^\/]+\//)[1];
              var prov = f.match(/^[^\/]+\/([^\/]+)\//)[1];
              if (!item.versions[ver]) item.versions[ver] = {}
              if (!item.versions[ver][prov]) item.versions[ver][prov] = []
              item.versions[ver][prov].push(
                path.join(item.path, f)
              )
            }
          })
          nnext();
        })
       });
     });
     async.series(todos, next);
   },
   function (next) {
     var todos = []
     items.forEach(function (item) {
       todos.push(function (nnext) {
         var metadatafile = path.join(item.path, 'metadata_url');
         fs.stat(metadatafile, function (err, stats) {
           if (!err && stats.isFile()) {
             var url = fs.readFileSync(metadatafile).toString()
             url = url.replace(/^\s+/, '').replace(/\s+$/, '');
             item.url = url;
           }
           nnext();
         })
       })
     });
     async.series(todos, next);
   },
   function (next) {
     items.forEach(function (item) {
       if(!item.url) {
         if (item.name.match(/^http/)) {
           item.url = item.name;
           item.name = path.basename(item.url, path.extname(item.url));
         }
       }
     });
     next()
   }
 ], function (err) {
   return done(err, items);
 });

}


module.exports = vagrantBoxList;
