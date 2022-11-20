const { createProxyMiddleware } = require('http-proxy-middleware');

const BASE_URL = '3.34.134.109'
// const LOCAL_URL = 'localhost';

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: `http://${BASE_URL}:8080`,
            changeOrigin: true
        })
    );
    app.use(
        createProxyMiddleware('/login', {
            target: `http://${BASE_URL}:8080`,
            changeOrigin: true
        })
    );
};