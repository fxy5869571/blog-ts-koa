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
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
const models_1 = require("../models/");
class InfoHelper {
}
InfoHelper.updateUser = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield models_1.User.create({
        password: 'guest',
        userName: 'guest',
    });
});
InfoHelper.findUser = (user) => __awaiter(this, void 0, void 0, function* () {
    const response = yield models_1.User.findOne({ userName: user.userName });
    if (!response) {
        return { message: '用户名错误', type: 'error' };
    }
    else if (user.password !== response.password) {
        return { message: '密码错误', type: 'error' };
    }
    else if (response.userName === 'admin') {
        const { userName, _id } = response;
        const token = jwt.sign({ _id }, config_1.admin);
        return {
            message: '欢迎回来，亲爱的超级管理员',
            user: { userName, _id, token },
        };
    }
    else {
        const { userName, _id } = response;
        const token = jwt.sign({ _id }, config_1.guest);
        return {
            message: '登陆成功,您现在是游客',
            user: { userName, _id, token },
        };
    }
});
exports.default = InfoHelper;
//# sourceMappingURL=UserHelper.js.map