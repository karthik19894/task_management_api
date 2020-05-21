"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const googleOAuth2_1 = require("../auth/googleOAuth2");
const authRouter = express_1.Router();
authRouter.get('/token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield googleOAuth2_1.getToken(String(req.query.code));
    res.status(201)
        .cookie('auth_token', result, {
        httpOnly: true,
        domain: 'tasks.com'
    });
    res.send();
}));
authRouter.get('/login', (req, res) => {
    const connectionUrl = googleOAuth2_1.getConnectionUrl();
    res.redirect(connectionUrl);
});
authRouter.get('/verify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield googleOAuth2_1.verifyToken(String(req.query.code));
    res.send(String(result));
}));
exports.default = authRouter;
//# sourceMappingURL=auth.js.map