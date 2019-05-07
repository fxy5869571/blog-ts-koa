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
const models_1 = require("../models/");
class CollectHelper {
}
CollectHelper.findCollect = (payload) => __awaiter(this, void 0, void 0, function* () {
    const { pageIndex, pageSize } = payload;
    const Skip = Number.parseInt(pageIndex) * Number.parseInt(pageSize) -
        Number.parseInt(pageSize);
    const collect = yield models_1.Collect.find({})
        .sort({ create_at: -1 })
        .limit(Number.parseInt(pageSize))
        .skip(Skip);
    const total = yield models_1.Collect.count({});
    return { collect, total };
});
CollectHelper.deleteCollect = (payload) => __awaiter(this, void 0, void 0, function* () {
    const response = yield models_1.Collect.remove(payload);
    if (response.ok === 1) {
        return { message: '删除成功' };
    }
    else {
        return { message: '删除失败', type: 'error' };
    }
});
CollectHelper.addCollect = (say) => __awaiter(this, void 0, void 0, function* () {
    const response = yield models_1.Collect.create(Object.assign({}, say, { create_at: Date.now() }));
    const info = yield models_1.Info.find({});
    if (Array.isArray(info[0].data)) {
        info[0].data.forEach((item) => {
            if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                item.collect += 1;
            }
        });
        yield models_1.Info.update({ _id: info[0]._id }, { data: info[0].data });
    }
    if (response) {
        return { message: '添加收藏成功' };
    }
});
exports.default = CollectHelper;
//# sourceMappingURL=CollectHelper.js.map