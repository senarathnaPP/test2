import Router from '@koa/router';

import {get, save, getAll, update, deletePost} from '../api/posts.api.js';

const postsRouter = new Router({
    prefix: '/posts'
});

postsRouter.get( '/' ,(ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
    
});

postsRouter.post( '/' ,(ctx) => {
    const data = ctx.request.body;
    ctx.body = save(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
    
});

postsRouter.get( '/:id' ,(ctx) => {
    const id = ctx.params.id;
    ctx.body = get(id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
    
});

postsRouter.put( '/:id' ,(ctx) => {
    const id = ctx.params.id;
    ctx.body = update(id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
    
});

postsRouter.del( '/:id' ,(ctx) => {
    const id = ctx.params.id;
    deletePost(id);
    ctx.status = 204;
    
});




export default postsRouter;