const dev = {
    COOKIE_DOMAIN: 'tasks.com'
}

const prod = {
    COOKIE_DOMAIN: 'herokuapp.com'
}

const config = process.env.NODE_ENV === 'production'
    ? prod
    : dev;


export default {
    ...config
};