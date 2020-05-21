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
exports.verifyToken = exports.getToken = exports.getConnectionUrl = void 0;
const googleapis_1 = require("googleapis");
const secrets_1 = require("../config/secrets");
const oauth2 = googleapis_1.google.oauth2('v2');
const Oauth2Client = new googleapis_1.google.auth.OAuth2(secrets_1.GOOGLE_CLIENT_ID, secrets_1.GOOGLE_CLIENT_SECRET, secrets_1.GOOGLE_REDIRECT_URI);
const defaultScope = ['https://www.googleapis.com/auth/userinfo.profile'];
exports.getConnectionUrl = () => {
    return Oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
};
exports.getToken = (code) => __awaiter(void 0, void 0, void 0, function* () {
    return Oauth2Client.getToken(code)
        .then(({ tokens }) => {
        Oauth2Client.setCredentials(tokens);
        return tokens;
    })
        .then((tokens) => {
        return tokens.id_token;
    })
        .catch((err) => {
        return 'The API returned an error: ' + err;
    });
});
exports.verifyToken = (idToken) => __awaiter(void 0, void 0, void 0, function* () {
    return Oauth2Client.verifyIdToken({
        idToken,
        audience: secrets_1.GOOGLE_CLIENT_ID,
    })
        .then((ticket) => {
        const payload = ticket.getPayload();
        const userid = payload.sub;
        return userid;
    })
        .catch((err) => {
        return "error " + err;
    });
});
//# sourceMappingURL=googleOAuth2.js.map