const fs = require('fs');
const archiver = require('archiver');

function zipFolderPromise(dirname, outputFile) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputFile);
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    output.on('close', () => {
      resolve(`${archive.pointer()} bytes written`);
    });

    archive.on('error', err => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(dirname, false);
    archive.finalize();
  });
}

module.exports = zipFolderPromise;
