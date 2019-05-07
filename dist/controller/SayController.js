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
const { SayHelper } = DBHelper_1.default;
class UserController {
    static addSay(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield SayHelper.addSay(ctx.request.body);
            ctx.body = response;
        });
    }
    static deleteSay(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield SayHelper.deleteSay(ctx.request.body);
            ctx.body = response;
        });
    }
    static findSay(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield SayHelper.findSay(ctx.query);
            if (response) {
                ctx.body = response;
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=SayController.js.map