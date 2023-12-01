import { CreateArchitecturesService } from "./architectures/frontend/services/createArchitecture";


require('yargs')
    .scriptName("jsc")
    .usage('$0 <cmd> [args]')
    .command('front [tech]', 'welcome ter yargs!', (yargs: { positional: (arg0: string, arg1: { type: string; default: string; describe: string }) => void }) => {
        yargs.positional('tech', {
            type: 'string',
            default: 'angular',
            describe: 'frontend tech to use'
        })
    }, function (argv: { tech: any; }) {
        switch (argv.tech) {
            case "angular":
                console.log("angular");
                CreateArchitecturesService.createAngClArch();
                break;
            case "react":
                console.log("react");
                break;
            case "vue":
                console.log("vue");
                break;
            default:
                console.log("angular");
        }

    })
    .command('back [tech]', 'welcome ter yargs!', (yargs: { positional: (arg0: string, arg1: { type: string; default: string; describe: string }) => void }) => {
        yargs.positional('tech', {
            type: 'string',
            default: 'nestjs',
            describe: 'backend tech to use'
        })
    }
        , function (argv: { tech: any; }) {
            switch (argv.tech) {
                case "nestjs":
                    console.log("nestjs");
                    break;
                case "express":
                    console.log("express");
                    break;
                case "koa":
                    console.log("koa");
                    break;
                default:
                    console.log("nestjs");
            }
        })
    .help()
    .argv