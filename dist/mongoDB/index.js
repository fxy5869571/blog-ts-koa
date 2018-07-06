"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../config");
mongoose.Promise = global.Promise;
exports.DB = mongoose;
exports.Schema = exports.DB.Schema;
// 数据库
exports.connect = () => {
    // 连接数据库
    exports.DB.connect(config_1.DBpath);
    // 连接错误
    exports.DB.connection.on('error', error => {
        // tslint:disable-next-line
        console.error('数据库连接失败!', error);
    });
    // 连接成功
    exports.DB.connection.once('open', () => {
        // tslint:disable-next-line
        console.log('数据库连接成功!');
    });
    return exports.DB;
};
//# sourceMappingURL=index.js.map