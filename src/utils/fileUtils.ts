export default {
    async CreateFIle(path: string,fn:string,cont:string) {
        try {
            let write
            write = Deno.writeTextFile(`${path}/${fn}`, cont,)
            write.then(() => {
                console.log(`-> ${fn}`);                
                return true;
            }).catch((e) => {
                console.log(e);
                return false;
            })
        }
        catch (error) {
            console.log(error);
            return false;
        }
        finally{
            return false;
        }
    }
}