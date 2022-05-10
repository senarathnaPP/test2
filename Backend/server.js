const koa = require("koa");
const BodyParser = require("koa-router");
const cors = require("koa-cors");
const Logger = require("koa-logger")


const HttpStatus = require("http-status");

const app = new koa();

const PORT = process.env.PORT || 5000;



// app.use(postsRouter.routes())
//     .use(postsRouter.allowedMethods());

app.use(ctx => {

    ctx.set('Content-Type', 'text/html');
    ctx.body = '<h3>Not </h3>';
    ctx.status = 404;
    
});




app.use(BodyParser);
app.use(Logger());
app.use(cors());

app.listen(PORT, function () {
    console.log("server running", PORT);
})