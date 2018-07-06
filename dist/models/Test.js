"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const testSchema = new mongoDB_1.Schema({
    // 联系我
    title: Number,
});
const test = mongoDB_1.DB.model('test', testSchema);
exports.default = test;
//# sourceMappingURL=Test.js.map