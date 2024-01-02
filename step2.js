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
    console.error('Error:', err.message);
    process.exit(1);
  }
}

/** Use input url and read content of url. Print content to console
 * Print error if url fetch does not yield valid result. */

async function webCat(url) {

  try {
    const response = await fetch(url);
    const contents = response.text();
    console.log(contents);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}