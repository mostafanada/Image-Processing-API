"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var filecheck = function (filename, folder) {
    try {
        var pathimage = path_1.default.resolve("images/".concat(folder, "/").concat(filename));
        var fileExists = (0, fs_1.existsSync)(pathimage);
        if (fileExists)
            return true;
        else
            return false;
    }
    catch (err) {
        console.log(err);
    }
    return false;
};
exports.default = filecheck;
