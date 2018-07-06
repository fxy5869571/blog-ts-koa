"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB_1 = require("../mongoDB");
const ResumeSchema = new mongoDB_1.Schema({
    // 联系我
    contact: mongoDB_1.Schema.Types.Mixed,
    // 描述
    default: mongoDB_1.Schema.Types.Mixed,
    // 工作经历
    experience: mongoDB_1.Schema.Types.Mixed,
    // 个人信息
    info: mongoDB_1.Schema.Types.Mixed,
    // 技能栈
    skill: mongoDB_1.Schema.Types.Mixed,
    // 标题
    titleList: mongoDB_1.Schema.Types.Mixed,
    // 作品集
    works: mongoDB_1.Schema.Types.Mixed,
});
const Resume = mongoDB_1.DB.model('Resume', ResumeSchema);
exports.default = Resume;
//# sourceMappingURL=Resume.js.map