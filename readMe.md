# About

This is a CLI Tool for primarily developed for Deno projects and it is made in Deno. The tool will generate components structure and Project structure for fast coding.

![Create App CLI Tool](deno-cli.png)

### Modules used
* cliffy
* fs
## How to Install the app
You can name what ever the app name using -n option , make sure the `deno` is installed on your system.
```
 deno install --allow-net --allow-read --unstable -n create-deno  https://raw.githubusercontent.com/manojap/Deno-CLI-create-app-master/1.0/mod.ts
```
More documentaion can be under the `Doc` please go through documentaion before make next step.

## How to use
On the command prompt you can use it as follows
```
create-deno --sample -d myproject // this will create a project in your current folder

create-deno -h // will get you a list cof options with sample usage

* the name (create-app) depends on what name you are choosing while installation
```

## Run the project
After the creation of project you can `cd` into the directory and run the project as (if you are a beginner it will be helpfull)
```
deno run --allow-read --allow-net --unstable --allow-write  main.ts
```
## Open source
Everybody welcome to join , clone the repo and have a look. 
 
## Escape
More project support will added soon. Suggetions and comments are welcome.
[blog](http://developerm.dev)