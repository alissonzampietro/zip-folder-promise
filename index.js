const fs = require('fs');
const archiver = require('archiver');

function zipFolderPromise(dirname, outputFile, format = 'zip', subDirectory = '') {
  return new Promise((resolve, reject) => {
    try {
      let archiveOpts;
      switch (format) {
        case 'zip':
          archiveOpts = {
            zlib: { level: 9 },
          };
          break;

        case 'tar':
          archiveOpts = {
            gzip: true,
            gzipOptions: { level: 9 },
          };
          break;

        default:
          throw new Error("Error: Only 'zip' and 'tar' formats are supported.");
      }

      const output = fs.createWriteStream(outputFile);
      const archive = archiver(format, archiveOpts);

      output.on('close', () => {
        resolve(`${archive.pointer()} bytes written`);
      });

      archive.on('error', (err) => {
        throw err;
      });

      archive.pipe(output);
      archive.directory(dirname, subDirectory || false);
      archive.finalize();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = zipFolderPromise;
