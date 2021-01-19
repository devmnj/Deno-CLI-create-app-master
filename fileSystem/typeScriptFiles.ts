import TSContent from '../templateGenerator/typeScript.ts';
import fileIO from '../utils/fileUtils.ts'
import { ensureDir } from "../deps.ts";

export default {
    async routesProject(dir: string) {
        try {
            //Directory structure
            if (!dir) {
                console.log("Project Name required!")
                return;
            }
            console.log("Project Type: Basic Routes and Controllers" );
            console.log("Platform    : Deno");

            ensureDir(dir).then(() => {
                console.log("-> Project Folder");
                fileIO.CreateFIle(dir, "main.ts", TSContent.getMianContentTs())
                fileIO.CreateFIle(dir, 'deps.ts', TSContent.getDepsContentTs())
                fileIO.CreateFIle(dir, '.env', TSContent.getEnvContentTs())
                fileIO.CreateFIle(dir, 'scripts.config.ts', TSContent.getDenonContentTs())
                fileIO.CreateFIle(dir, '404.ts', TSContent.get404ContentTs())
                fileIO.CreateFIle(dir, 'readMe.md', TSContent.getReadMeContentTs())
                ensureDir(`${dir}/routes`).then(() => {
                    fileIO.CreateFIle(`${dir}/routes`, "routes.ts", TSContent.getRouteContentTs())
                })
                ensureDir(`${dir}/controllers`).then(() => {

                    fileIO.CreateFIle(`${dir}/controllers`, "controller.ts", TSContent.getCotrlrContentTs())
                })               
            })
        } catch (error) {
            console.log("Project Name Required");
        }
    },
    async cliTool(dir: string) {
        console.log("Project Type: CLI Tools");
        console.log("Platform    : Deno");
        console.log('\ncoming Soon');
    },
    async prosSqlAPI(dir: string) {
        console.log("Project Type: ProsgresSQL API ");
        console.log("Platform    : Deno");
        console.log('\ncoming Soon');
    },
    async mongoAPI(dir: string){
        console.log("Project Type:Mongo API");
        console.log("Platform    : Deno");
        console.log('\ncoming Soon');        
    },
    async mySQLAPI(dir: string) {
        console.log("Project Type: MySQL API");
        console.log("Platform    : Deno");
        console.log('\ncoming Soon');
    },
    async mariaDBAPI(dir: string) {
        console.log("Project Type: MariaDB API");
        console.log("Platform    : Deno");
        console.log('\ncoming Soon');
    },
    async sqLiteAPI(dir: string) {
        console.log("Project Type: SQLite API");
        console.log("Platform    : Deno");
        console.log('\ncoming Soon');
    }

}