"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const CollectSchema = new mongoDB_1.Schema({
    // 收藏内容
    content: String,
    // 创建时间
    create_at: Date,
    // 收藏标签
    tag: Object,
    // 收藏标题
    title: String,
});
const Collect = mongoDB_1.DB.model('collect', CollectSchema);
exports.default = Collect;
//# sourceMappingURL=Collect.js.map