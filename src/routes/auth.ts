import { Router } from 'express';
import { getToken, getConnectionUrl, verifyToken } from '../auth/googleOAuth2'
import config from '../config'

const authRouter = Router();

authRouter.get('/token', async (req, res) => {
    try {
        const result = await getToken(String(req.query.code))
        const { id_token, userId, name, exp } = result;
        const cookieConfig = { domain: config.COOKIE_DOMAIN, expires: new Date(exp * 1000) }
        res.status(201)
            .cookie('auth_token', id_token, {
                httpOnly: true,
                ...cookieConfig

            })
            .cookie('user_id', userId, cookieConfig)
            .cookie('user_name', name, cookieConfig)
            .send("Login succeeded")
    } catch (err) {
        res.status(401).send("Login failed");
    }
});

authRouter.get('/login', (req, res) => {
    const connectionUrl = getConnectionUrl()
    res.redirect(connectionUrl);
});

export default authRouter;
