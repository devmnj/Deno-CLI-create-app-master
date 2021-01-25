const main_app =
	"import { oak } from './deps.ts';\n" +
	"import { dotenv } from './deps.ts';\n" +
	"import router from './routes/routes.ts'\n" +
	"\n\n" +

	"const env = dotenv.config()\n" +
	"const app = new oak.Application();\n" +
	"const PORT = +env.PORT || 3000 //+convert it number \n" +
	"const HOST = env.APP_HOST  \n" +

	"app.use(router.routes())\n" +
	"app.use( ()=>{});\n" +
	"app.listen({ port:PORT });\n" +
	"console.log(`Server running ${HOST} on port ${PORT}`);\n";

const dep =
	"export * as dotenv from 'https://deno.land/x/dotenv/mod.ts';\n" +
	"export * as oak from 'https://deno.land/x/oak@v6.0.1/mod.ts'; \n" +
	"export  *  from 'https://deno.land/x/denon@2.4.6/mod.ts';"

const env = "PORT=5000\n" + "APP_HOST=http:\\localhost\n";

const fnf =
	"export default {fnf( ctx: any){\n" +
	"ctx.response.body = {\n" +
	"error: 'Not Found'\n" +
	"}}}";

const readMe = "# About";

const controller = "export default {" +
	"async index(ctx: any) {\n"+
"try {\n" +
	"ctx.response.body = 'Home Page';\n"+
"ctx.response.status = 201;\n"+
"} catch (error) {\n"+
"  ctx.response.body = 'Some Error occurs'\n"+
"  ctx.response.status = 401;\n"+
"}\n" +
	"},\n"+
"async about(ctx: any) {\n" +
	"    try {\n" +
	"      ctx.response.status = 201;\n" +
	"ctx.response.body = 'About Page'\n;" +
	"} catch (error) {\n" +
	"  ctx.response.body = 'Some Error occurs';" +
	" ctx.response.status = 401;\n" +
	"\n" +
	"}\n" +
	"}\n" +
	"}\n" ;

const routes =
	"import Controller from '../controllers/Controller.ts';\n" +
	"import { oak } from '../deps.ts';\n" +
	"const router = new oak.Router();\n" +
	"router.get('/about', Controller.index)\n" +
	"router.get('/', Controller.index)\n export default router;";



export default {
	getMianContentTs() { return main_app },
	getDepsContentTs() { return dep },
	getEnvContentTs() { return env },
	get404ContentTs() { return fnf },
	getRouteContentTs() { return routes },
	getCotrlrContentTs() { return controller },
	getReadMeContentTs() { return readMe }

};
