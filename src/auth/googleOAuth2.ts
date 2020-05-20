import { google } from 'googleapis';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } from '../config/secrets'

const oauth2 = google.oauth2('v2');
const Oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
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
        .then((tokens) => {
            return tokens.id_token;
        })
        .catch((err) => {
            return 'The API returned an error: ' + err
        })
}

export const verifyToken = async (idToken: string) => {
    return Oauth2Client.verifyIdToken({
        idToken,
        audience: GOOGLE_CLIENT_ID ,
    })
        .then((ticket) => {
            const payload = ticket.getPayload();
            const userid = payload.sub;
            return userid;
        })
        .catch((err) => {
            return "error " + err
        })
}
