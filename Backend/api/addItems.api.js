//Backend api
import {randomBytes} from 'crypto';

const posts = new Map();

export const save = ({text}) => {
    const post = {id: randomBytes(16).toString('hex'), text , postedDate: new Date()};
    posts.set(post.id, post);
    return post;
};

export const get = (id) => {
    const post = posts.get(id);
    if(!post){
        throw new Error(`ID not found ${id}`);
    }
    return post;
};

export const getAll = () => {
    return [...posts.values()];
};

export const update = (id, {text}) => {
    if(!posts.has(id)) {
        throw new Error(`ID not found ${id}`);
    }
    const post = {id, text , postedDate: new Date()}; 
    posts.set(post.id, post);
    return post;

};

export const deletePost = (id) => {
    if(!posts.has(id)) {
        throw new Error(`ID not found ${id}`);
    }
    posts.delete(id);

};