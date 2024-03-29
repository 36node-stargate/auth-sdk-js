# @36node-stargate/auth-sdk

[![version][0]][1] [![downloads][2]][3]

## Install

```bash
yarn add @36node-stargate/auth-sdk
```

## Usage

### SDK

```js
const SDK = require("@36node-stargate/auth-sdk");

const sdk = new SDK();
sdk.namespace.listNamespaces();
```

### Mock

```js
const mock = require("@36node-stargate/auth-sdk/mock");

const db = mock.createDB();

mock.bindRouter({
  router,
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**module** © [36node](https://github.com/36node), Released under the [MIT](./LICENSE) License.

Authored and maintained by 36node with help from contributors ([list](https://github.com/36node/module/contributors)).

> GitHub [@36node](https://github.com/36node)

[0]: https://img.shields.io/npm/v/@36node/template-sdk.svg?style=flat
[1]: https://npmjs.com/package/@36node/template-sdk
[2]: https://img.shields.io/npm/dm/@36node/template-sdk.svg?style=flat
[3]: https://npmjs.com/package/@36node/template-sdk
