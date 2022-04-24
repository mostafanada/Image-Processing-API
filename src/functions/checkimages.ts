// import express from 'express';
import path from 'path';
import { existsSync } from 'fs';

const filecheck = (filename: string, folder: string): boolean => {
  try {
    const pathimage = path.resolve(`images/${folder}/${filename}`);
    let fileExists = existsSync(pathimage);
    if (fileExists) return true;
    else return false;
  } catch (err) {
    console.log(err);
  }
  return false;
};
export default filecheck;
