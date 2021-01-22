import { Command } from "./deps.ts";
import { exists, ensureDir } from "./deps.ts";
import cmd from "./fileSystem/typeScriptFiles.ts";
//Create Options and command configurations

new Command()
    .name('create-app')
    .version('0.0.1')
    .description('Deno Project builder')
    .example('Deno route and controller project',"create-app --s -d routed-site")
    .option("-s --dir <dir:string>", "Project Directory", {
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
