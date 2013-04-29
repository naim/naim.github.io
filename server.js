var connect = require('connect');

var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static(__dirname))
    .use(connect.directory(__dirname));

connect.createServer(app).listen(8080);
