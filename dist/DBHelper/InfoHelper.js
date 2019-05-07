"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const models_1 = require("../models/");
class InfoHelper {
}
// 博客首页数据，有点乱(⊙o⊙)…，调用一次接口网站访问人数+1
InfoHelper.findInfo = () => __awaiter(this, void 0, void 0, function* () {
    const articles = yield models_1.Article.find({}, { _id: 1, tag: 1, title: 1 });
    const tag = _.uniqBy(articles.map(item => item.tag), 'title');
    const info = yield models_1.Info.find({});
    const ArticleNum = yield models_1.Article.count({});
    if (Array.isArray(info[0].accessData)) {
        info[0].accessData.forEach((item) => {
            if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                item.value += 1;
            }
        });
    }
    yield models_1.Info.update({ _id: info[0]._id }, { access: ++info[0].access, accessData: info[0].accessData });
    const lastArticle = articles
        .filter((item, index) => index < 10)
        .map(item => ({ _id: item._id, title: item.title }));
    return Object.assign({}, info[0]._doc, { tag, lastArticle, ArticleNum });
});
// 博客后端管理首页数据，有点乱(⊙o⊙)…
InfoHelper.findAdminInfo = () => __awaiter(this, void 0, void 0, function* () {
    const articleNumber = yield models_1.Article.count({});
    const articles = yield models_1.Article.find({}).sort({ create_at: -1 });
    const lastArticle = articles[0];
    const sayNumber = yield models_1.Say.count({});
    const says = yield models_1.Say.find({})
        .sort({ create_at: -1 })
        .limit(1);
    const lastSay = says[0];
    const collectNumber = yield models_1.Collect.count({});
    const collects = yield models_1.Collect.find({})
        .sort({ create_at: -1 })
        .limit(1);
    const lastCollect = collects[0];
    const info = yield models_1.Info.find({})
        .sort({})
        .limit(1);
    return {
        access: info[0].access,
        accessData: info[0].accessData,
        articleNumber,
        collectNumber,
        data: info[0].data,
        lastArticle,
        lastCollect,
        lastSay,
        sayNumber,
    };
});
exports.default = InfoHelper;
//# sourceMappingURL=InfoHelper.js.map