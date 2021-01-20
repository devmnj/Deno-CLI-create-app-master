import { Command } from "./deps.ts";
import { exists, ensureDir } from "./deps.ts";
import cmd from "./fileSystem/typeScriptFiles.ts";
//Create Options and command configurations

new Command()
    .name('create-app')
    .version('0.0.1')
    .description('Deno Project builder')
    .example('Deno route and controller project',"create-app --app -d routed-site")
    .option("-d --dir <dir:string>", "Project Directory", {
        required: true,
        action: async ({xdir, dir }) => {
      
            await exists(`./${dir}`).then((t) => {
                if (t == true) { xdir = true }
            })
        }
    }
    ).option("-x --xdir <xdir:boolean>", "Test", {
        default: false,
    })
 
    .option("-a --about", "About the program", {
        standalone: true,
        action: () => {
            console.log('\nThis is a opensource tool for developing deno apps\n');
            console.log('\nDeveloped by Manoj, http://github.com/manojap \n');
            Deno.exit(0);
        },
    })
    .option("-mq --apimql", "API Project Using MySQL", {
        depends: ["dir"],
        action: async ({ dir }) => {
            dir = `./${dir}`
            await exists(dir).then((t) => {
                if (t == false) { cmd.mySQLAPI(dir) } else {
                    console.log("Folder already exist!!, can't create");
                    Deno.exit(0)
                }
            })
        }
    })
    .option("-p --apipost", "API Project Using PostgreSQL", {
        depends: ["dir"],
        action: async ({ dir }) => {
            dir = `./${dir}`
            await exists(dir).then((t) => {
                if (t == false) { cmd.posSqlAPI(dir) } else {
                      console.log("Folder already exist!!, can't create");
                      Deno.exit(0)
                 }
            })
        }
    })
    .option("-r --routapp", "Routed app", {
        depends: ["dir"],
        action: async ({ dir}) => {
            dir = `./${dir}`                      
                await exists(dir).then((t) => {
                    if (t == false) { cmd.routesProject(dir) } else {
                        console.log("\nFolder already exist!!, can't create,try another name\n");                        
                        Deno.exit(0)
                    }
                })
            }            
        })
    .option("-m --monapi", "Mongo API Project", {
        depends: ["dir"],
        action: async ({ dir }) => {
            dir = `./${dir}`
            await exists(dir).then((t) => {
                if (t == false) { cmd.mongoAPI(dir) } else {
                    console.log("\nFolder already exist!!, can't create,try another name\n");
                    Deno.exit(0)
                }
            })
        }
    })
    .option("-l --sqlapi", "SQLite API Project", {
        depends: ["dir"],
        action: async ({ dir }) => {
            dir = `./${dir}`
            await exists(dir).then((t) => {
                if (t == false) { cmd.sqLiteAPI(dir) } else {
                    console.log("\nFolder already exist!!, can't create,try another name\n");
                    Deno.exit(0)
                }
            })
        }
    })
    .option("-mdb --marpi", "MariaDB API Project", {
        depends: ["dir"],
        action: async ({ dir }) => {
            dir = `./${dir}`
            await exists(dir).then((t) => {
                if (t == false) { cmd.mariaDBAPI(dir) } else {
                    console.log("\nFolder already exist!!, can't create,try another name\n");
                    Deno.exit(0)
                }
            })
        }
    })
    .option("-s --sample", "Sample app", {
        depends: ["dir"],
        action: async ({ dir }) => {
            dir = `./${dir}`
            await exists(dir).then((t) => {
                if (t == false) { cmd.sampleApp(dir) } else {
                    console.log("\nFolder already exist!!, can't create,try another name\n");
                    Deno.exit(0)
                }
            })
        }
    })
    .parse(Deno.args)
