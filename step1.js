"use strict";

const fsP = require('fs/promises');

const argv = process.argv;

/** Read file for inputted file path str and log contents of file
 * Print error if given path of non-existant file */

async function cat(filePath) {

  try {
    const contents = await fsP.readFile(filePath, 'utf8');
    console.log(contents);
  } catch (err) {
    console.error(err.toString());
    process.exit(1);
  }
}

cat(argv[2]);