const dev = {
    COOKIE_DOMAIN: 'tasks.com'
}

const prod = {
    COOKIE_DOMAIN: 'herokuapp.com'
}

const config = process.env.NODE_ENV === 'prod'
    ? prod
    : dev;


export default {
    ...config
};