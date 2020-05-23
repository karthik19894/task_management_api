import dotenv from "dotenv";

dotenv.config();

const dev = {
    GOOGLE_REDIRECT_URI: 'http://tasks.com:3000/login/callback'
}

const prod = {
    GOOGLE_REDIRECT_URI: 'https://tasks-manager-web-app.herokuapp.com/login/callback'
}

const config = process.env.NODE_ENV === 'prod'
    ? prod
    : dev;

export default {
    ...config,
    GOOGLE_CLIENT_ID: '843494376459-d94jausfvjda97gd8k02it53r5ek0qo2.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    COOKIE_SECRET: process.env.COOKIE_SECRET
};