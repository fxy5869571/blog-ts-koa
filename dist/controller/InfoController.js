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
const { findInfo, findResume } = DBHelper_1.default.InfoHelper;
class InfoController {
    static findInfo(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const Info = yield findInfo();
            ctx.body = Info[0];
        });
    }
    static findResume(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const Resume = yield findResume();
            ctx.body = Resume[0];
        });
    }
}
exports.default = InfoController;
//# sourceMappingURL=InfoController.js.map