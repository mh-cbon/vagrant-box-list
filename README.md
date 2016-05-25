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
});

```
