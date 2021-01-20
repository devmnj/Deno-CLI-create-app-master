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
            console.log("\nProject Type: Basic Routes and Controllers" );
            console.log("Platform    : Deno\n");

            ensureDir(dir).then(() => {
                console.log("-> Project Folder");
                fileIO.CreateFIle(dir, "main.ts", TSContent.getMianContentTs())
                fileIO.CreateFIle(dir, 'deps.ts', TSContent.getDepsContentTs())
                fileIO.CreateFIle(dir, '.env', TSContent.getEnvContentTs())
                fileIO.CreateFIle(dir, 'scripts.config.ts', TSContent.getDenonContentTs())
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
        console.log("\nProject Type: CLI Tools");
        console.log("Platform    : Deno\n");
        console.log('coming Soon\n');
    },
    async posSqlAPI(dir: string) {
        console.log("\nProject Type: ProsgresSQL API ");
        console.log("Platform    : Deno\n");
        console.log('coming Soon\n');
    },
    async mongoAPI(dir: string){
        console.log("\nProject Type:Mongo API");
        console.log("Platform    : Deno\n");
        console.log('coming Soon\n');        
    },
    async mySQLAPI(dir: string) {
        console.log("\nProject Type: MySQL API");
        console.log("Platform    : Deno\n");
        console.log('coming Soon\n');
    },
    async mariaDBAPI(dir: string) {
        console.log("\nProject Type: MariaDB API");
        console.log("Platform    : Deno\n");
        console.log('coming Soon\n');
    },
    async sqLiteAPI(dir: string) {
        console.log("\nProject Type: SQLite API");
        console.log("Platform    : Deno\n");
        console.log('coming Soon\n');
    },
    async sampleApp(dir:string){
        try {
            //Directory structure
            console.log("\nProject Type: Basic Routes and Controllers");
            console.log("Platform    : Deno\n");
            dir=dir.trim()
            ensureDir(dir.trim()).then(() => {
                console.log("-> Project Folder");
                fileIO.CreateFIle(dir, "main.ts", TSContent.getMianContentTs())
                fileIO.CreateFIle(dir, 'deps.ts', TSContent.getDepsContentTs())
                fileIO.CreateFIle(dir, '.env', TSContent.getEnvContentTs())
                fileIO.CreateFIle(dir, 'scripts.config.ts', TSContent.getDenonContentTs())
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
    }

}