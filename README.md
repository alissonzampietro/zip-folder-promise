<h1 align="center">Welcome to zip-folder-promise 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/zip-folder-promise" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/zip-folder-promise.svg">
  </a>
  <a href="https://github.com/tribal2/zip-folder-promise#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/tribal2/zip-folder-promise/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/tribal2/zip-folder-promise/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/tribal2/zip-folder-promise" />
  </a>
</p>

> Use [Archiver](https://github.com/archiverjs/node-archiver) to zip a folder using promises instead of callbacks.

## Install

```sh
$ npm install --save zip-folder-promise
```

## Usage
```typescript
zipFolder(
  inputDir: string,
  outputFileName: string,
  format?: 'tar' | 'zip',
  subDirectory?: string
): Promise<string>
```

### Example:
```javascript
const zipFolderPromise = require('zip-folder-promise');

async function yourAsyncFn() {
  try {
    // ..
    // Using default ZIP format
    const zipFolderMsg = await zipFolder('dirName', 'zipName');
    console.log(zipFolderMsg);

    // Using a subDirectory to wrap your files
    const zipFolderMsgSubdirectory = await zipFolder('dirName', 'zipName', 'zip', 'subdirectoryFolder');
    console.log(zipFolderMsgSubdirectory);

    // Using alternate TAR format
    const tarFolderMsg = await zipFolder('dirName', 'tarName', 'tar');
    console.log(tarFolderMsg);
    // ..
  }

  catch(err) {
    // Handler error
  }
}
```


## Author

👤 **Ricardo Tribaldos (https://barustudio.com)**

* Github: [@tribal2](https://github.com/tribal2)
* Twitter: [@r_tribaldos](https://twitter.com/r_tribaldos) 
  <a href="https://twitter.com/r\_tribaldos" target="_blank">
    <img alt="Twitter: r\_tribaldos" src="https://img.shields.io/twitter/follow/r_tribaldos.svg?style=social" />
  </a>
* LinkedIn: [@rtribaldos](https://linkedin.com/in/rtribaldos)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Ricardo Tribaldos (https://barustudio.com)](https://github.com/tribal2).<br />
This project is [MIT](https://github.com/tribal2/zip-folder-promise/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_