import { emptyDir } from "../deps.ts";
import TS from "../fileSystem/typeScriptFiles.ts"

const projects = ['--apiMongo', '--apimySql', '--apiProsgres', '--apiProsgres', '--app']
const option = ['--owdir Overwrite Directory', '--help Help ']
export default {
    Projects() { console.log(`Project Types: \n${projects}`) },
    Options() {
        console.log(`Options : \n\n${option}`);
    },
    async paramFilter(options: string, dir: string) {
        try {
            if (!dir) {
                console.log('A Project name required');
                return;
            }
            switch (options) {
                case "--owdir":
                   await emptyDir(dir).then((t) => {
                        console.log('folder cleaned')
                    });
                    return true;
                    break;
                case '--help':
                    console.log('available options are :\n' + option);
                    return false;
                    break;
                case undefined:
                    return undefined;
                default:
                    console.log(`Invalid  option "${options}"`);
                    console.log(`Available options are \n"${option}"`);
                    return false;
            }
            return true

        } catch (error) {
            return false;
        }
    },
    async paramCmd(parm: string, dir: string) {
        try {
            if (!dir) {
                console.log('A Project name required');
                return;
            }
            switch (parm) {
                case "--apiMongo":
                    TS.mongoAPI(dir)
                    break;
                case "--apimySql":
                    TS.mySQLAPI(dir)
                    break;
                case "--apiProsgres":
                    TS.prosSqlAPI(dir)
                    break;
                case "--app":
                    TS.routesProject(dir)
                    break;
                case "--help":
                    console.log('Projects:\n' + projects);
                    console.log('Options:\n' + projects);
                    break;
                default:
                    console.log('Available options are:\n' + projects);

                    return false;
            }

        } catch (error) {

        }
    }

}