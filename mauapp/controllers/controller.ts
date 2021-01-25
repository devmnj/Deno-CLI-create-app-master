export default {async index(ctx: any) {
try {
ctx.response.body = 'Home Page';
ctx.response.status = 201;
} catch (error) {
  ctx.response.body = 'Some Error occurs'
  ctx.response.status = 401;
}
},
async about(ctx: any) {
    try {
      ctx.response.status = 201;
ctx.response.body = 'About Page'
;} catch (error) {
  ctx.response.body = 'Some Error occurs'; ctx.response.status = 401;

}
}
}
