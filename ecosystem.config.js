module.exports = {
  // Application configuration section
  // http://pm2.keymetrics.io/docs/usage/application-declaration/
  apps: [
    {
      name: 'LAZYLOG_SERVER',
      script: 'src/server.js',
      watch: false,
      env: {
        PORT: 4001
      }
    },
    {
      name: 'LAZYLOG_CLIENT',
      script: 'node_modules/.bin/neutrino',
      args: 'start',
      watch: false,
      env: {
        PORT: 9001
      }
    }
  ]
};
