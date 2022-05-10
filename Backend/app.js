const Koa = require("koa");
const BodyParser = require("koa-router");
const cors = require("koa-cors");
const Logger = require("koa-logger")

const HttpStatus = require("http-status");
const app = new Koa();

app.use(BodyParser());

app.use(postsRouter.routes())
    .use(postsRouter.allowedMethods());


app.use(ctx => {

    ctx.set('Content-Type', 'text/html');
    ctx.body = '<h3>Not Found</h3>';
    ctx.status = 404;
    
});


app.use(BodyParser);
app.use(Logger());
app.use(cors());

app.listen(3000,() => {
    console.log('Application running on port 3000');
});