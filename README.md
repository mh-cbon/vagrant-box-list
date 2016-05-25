# vagrant-box-list

List your local vagrant boxes.

# Install

```sh
npm i @mh-cbon/vagrant-box-list --save
```

# Usage

```js
require('@mh-cbon/vagrant-box-list')(function (err, items) {
  console.log(JSON.stringify(items,null,2));
  /*
  [
    {
      "path": "/home/mh-cbon/.vagrant.d/boxes/AndrewDryga-VAGRANTSLASH-vagrant-box-osx",
      "versions": {
        "0.2.1": {
          "virtualbox": [
            "/home/mh-cbon/.vagrant.d/boxes/AndrewDryga-VAGRANTSLASH-vagrant-box-osx/0.2.1/virtualbox/box-disk1.vmdk",
            "/home/mh-cbon/.vagrant.d/boxes/AndrewDryga-VAGRANTSLASH-vagrant-box-osx/0.2.1/virtualbox/box.ovf",
            "/home/mh-cbon/.vagrant.d/boxes/AndrewDryga-VAGRANTSLASH-vagrant-box-osx/0.2.1/virtualbox/include/",
            "/home/mh-cbon/.vagrant.d/boxes/AndrewDryga-VAGRANTSLASH-vagrant-box-osx/0.2.1/virtualbox/include/_Vagrantfile",
            "/home/mh-cbon/.vagrant.d/boxes/AndrewDryga-VAGRANTSLASH-vagrant-box-osx/0.2.1/virtualbox/metadata.json",
            "/home/mh-cbon/.vagrant.d/boxes/AndrewDryga-VAGRANTSLASH-vagrant-box-osx/0.2.1/virtualbox/Vagrantfile"
          ]
        }
      },
      "name": "AndrewDryga/vagrant-box-osx",
      "url": "https://atlas.hashicorp.com/AndrewDryga/vagrant-box-osx"
    },
    {
      "path": "/home/mh-cbon/.vagrant.d/boxes/Unode-VAGRANTSLASH-gentoo-x86",
      "versions": {
        "0.0.1": {
          "virtualbox": [
            "/home/mh-cbon/.vagrant.d/boxes/Unode-VAGRANTSLASH-gentoo-x86/0.0.1/virtualbox/box-disk1.vmdk",
            "/home/mh-cbon/.vagrant.d/boxes/Unode-VAGRANTSLASH-gentoo-x86/0.0.1/virtualbox/box.ovf",
            "/home/mh-cbon/.vagrant.d/boxes/Unode-VAGRANTSLASH-gentoo-x86/0.0.1/virtualbox/metadata.json",
            "/home/mh-cbon/.vagrant.d/boxes/Unode-VAGRANTSLASH-gentoo-x86/0.0.1/virtualbox/Vagrantfile"
          ]
        }
      },
      "name": "Unode/gentoo-x86",
      "url": "https://atlas.hashicorp.com/Unode/gentoo-x86"
    },
  ]

  */
});
```
