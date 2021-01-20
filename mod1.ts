import { exists } from "./deps.ts";
import paramerterHandlers from "./fileSystem/paramerterHandlers.ts";
import parHadlers from "./fileSystem/paramerterHandlers.ts";

const { args } = Deno;
const folder = args[0];
const _arg2 = args[1];
const _arg3 = args[2];

console.log('------------------------------------------');
console.log('---Developer:http://github.com/manojap----');
console.log('------------------------------------------');

try {  
  if (!folder) {
    console.log('FolderName Required');
    paramerterHandlers.Projects()
    paramerterHandlers.Options()
  }
  else if (folder == '--help' || folder == '-help' || folder == 'help' || folder.length==0 ){
    paramerterHandlers.Projects()
    paramerterHandlers.Options()
  }
  else 
    exists(`./${folder}`).then((fldr) => {
      if (fldr == true && _arg3!='--owdir') {
        console.log(`Project folder  ${folder} exist, try another name`);
        return;
      } else {
        // console.log(`_arg3=${_arg3}`);
        if (_arg3 || _arg3 == undefined) {
          paramerterHandlers.paramFilter(_arg3, folder).then((f: any) => {
            if (f != false) {
              // console.log(`_arg2=${_arg2}`);
              if (_arg2 || _arg2 == undefined) {
                paramerterHandlers.paramCmd(_arg2, folder).then(() => {
                  console.log('....\n');
                })
              }
            }
          })
        }

      }
    })
  
} catch (error) {
  console.log('Error:' + error);
}



