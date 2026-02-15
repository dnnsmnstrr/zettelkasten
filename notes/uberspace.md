# [Uberspace](https://uberspace.de/en/)

- https://mnstrr.uber.space

### [Web Backends](https://manual.uberspace.de/web-backends/)

Default: `uberspace web backend set / --apache`

Port: `uberspace web backend set / --http --port 1024`

Path: `uberspace web backend set /api --http --port 1024`

### [supervisord](https://manual.uberspace.de/daemons-supervisord/)

.ini file at `~/etc/services.d`

```
[program:node]
directory=/home/mnstrr/node
command=node index.js
autostart=true
autorestart=true
environment=NODE_ENV=production
startsecs=15
```

After changes: `supervisorctl reread`

`supervisorctl restart node`

Get logs: `supervisorctl tail node stderr`

### Resources
- https://lab.uberspace.de/
- https://tty4.dev/development/uberspace-nodejs-backend/