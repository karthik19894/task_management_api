import { google } from 'googleapis';
import secrets from '../config/secrets'

const oauth2 = google.oauth2('v2');
const Oauth2Client = new google.auth.OAuth2(
    secrets.GOOGLE_CLIENT_ID,
    secrets.GOOGLE_CLIENT_SECRET,
    secrets.GOOGLE_REDIRECT_URI,
);
const defaultScope = ['https://www.googleapis.com/auth/userinfo.profile']

export const getConnectionUrl = () => {
    return Oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

export const getToken = async (code: string) => {
    return Oauth2Client.getToken(code)
        .then(({ tokens }) => {
            Oauth2Client.setCredentials(tokens);
            return tokens
        })
        .then(async (tokens) => {
            const { id_token } = tokens;
            const { userId, name, exp } = await verifyAndGetPayload(id_token);
            return { id_token: tokens.id_token, userId, name, exp };
        })
        .catch((err) => {
            throw err;
        })
}

const verifyAndGetPayload = async (idToken: string) => {
    return Oauth2Client.verifyIdToken({
        idToken,
        audience: secrets.GOOGLE_CLIENT_ID,
    })
        .then((ticket) => {
            const payload = ticket.getPayload();
            const userId = payload.sub;
            const name = payload.name;
            const exp = payload.exp;
            return { userId, name, exp };
        })
        .catch((err) => {
            throw new Error("Invalid token")
        })
}

export const verifyToken = async (idToken: string) => {
    return Oauth2Client.verifyIdToken({
        idToken,
        audience: secrets.GOOGLE_CLIENT_ID,
    })
        .then((ticket) => {
            const payload = ticket.getPayload();
            const userid = payload.sub;
            return userid;
        })
        .catch((err) => {
            throw new Error("Invalid token")
        })
}
