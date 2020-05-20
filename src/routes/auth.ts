import { Router } from 'express';
import { getToken, getConnectionUrl, verifyToken } from '../auth/googleOAuth2'

const authRouter = Router();

authRouter.get('/token', async (req, res) => {
    const result = await getToken(String(req.query.code))
    res.status(201)
        .cookie('auth_token', result, {
            httpOnly: true,
            domain: 'tasks.com'
        })
    res.send();
});

authRouter.get('/login', (req, res) => {
    const connectionUrl = getConnectionUrl()
    res.redirect(connectionUrl);
});

authRouter.get('/verify', async (req, res) => {
    const result = await verifyToken(String(req.query.code))
    res.send(String(result));
});

export default authRouter;
