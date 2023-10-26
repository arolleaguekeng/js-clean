import { AngularCleanArchitectureCli } from "./angular";


const { Select} = require('enquirer');
const Enquirer = require('enquirer');
export class FrontendCleanArchitectureCli {
    jsTechlistFront = [
        "angular",
        "react",
        "vue",
        "svelte",
        "vanilla"
    ];

    tech = 'angular';
    async CreateFrontend() {
        console.log('================================================================');
        console.log('********************* JS - PLANNER FRONTEND ********************');
        console.log('================================================================');

        const prompt = await new Select({
            message: 'Select Frontend Technology:',
            choices: this.jsTechlistFront,
        });

        this.tech = await prompt.run();
        switch (this.tech) {
            case 'angular':
                this.createAngClArch()
                break;
            case 'react':
                this.CreateReactClArch();
                break;
            case 'vue':
                this.CreateVueClArch();
                break;
            case 'svelte':
                this.CreateSvelteClArch();
                break;
            case 'vanilla':
                this.CreateVanillaClArch();
                break;
            default:
                this.createAngClArch()
                break;
        }

    }
    createAngClArch() {
        console.clear();
        let angularCleanArchitectureCli = new AngularCleanArchitectureCli();
        angularCleanArchitectureCli.createArchitecture();
    }

    CreateVueClArch() {
        // TODO Create Vue Clean Architecture
    }

    CreateReactClArch() {
        // TODO Create React Clean Architecture
    }

    CreateSvelteClArch() {
        // TODO Create Svelte Clean Architecture
    }

    CreateVanillaClArch() {
        // TODO Create Vanilla Clean Architecture
    }
}


