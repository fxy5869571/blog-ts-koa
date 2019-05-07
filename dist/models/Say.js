"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const saySchema = new mongoDB_1.Schema({
    // 发表时间
    create_at: { type: Date, default: Date.now() },
    // 说说
    say: String,
});
const say = mongoDB_1.DB.model('say', saySchema);
exports.default = say;
//# sourceMappingURL=Say.js.map