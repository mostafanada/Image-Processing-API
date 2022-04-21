"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var showimage_1 = __importDefault(require("./showimage/showimage"));
var routes = express_1.default.Router();
routes.get('/server', function (req, res) {
    res.send("sh3'al ya ryes");
});
routes.use('/image', showimage_1.default);
exports.default = routes;
