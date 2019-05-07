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
const DBHelper_1 = require("../DBHelper");
const { CollectHelper } = DBHelper_1.default;
class CollectController {
    static addCollect(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield CollectHelper.addCollect(ctx.request.body);
            ctx.body = response;
        });
    }
    static deleteCollect(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield CollectHelper.deleteCollect(ctx.request.body);
            ctx.body = response;
        });
    }
    static findCollect(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield CollectHelper.findCollect(ctx.query);
            if (response) {
                ctx.body = response;
            }
        });
    }
}
exports.default = CollectController;
//# sourceMappingURL=CollectController.js.map