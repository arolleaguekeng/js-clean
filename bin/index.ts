import { AngularCleanArchitectureCli } from "./architectures/frontend/angular";
import { AngularCleanArchitecture } from "./architectures/frontend/angular/angCleanArchtitecture";

const { Select, Input, Prompt, Confirm } = require('enquirer');
const Enquirer = require('enquirer');
const enquirer = new Enquirer();
let jsTechlist = [
    "angular",
    "react",
    "vue",
    "svelte",
    "vanilla"
];

let tech = 'angular';
async function app() {
    console.log('================================================================');
    console.log('*************************  JS - PLANNER ***********************');
    console.log('================================================================');

    const prompt = await new Select({
        message: 'Select Technology:',
        choices: jsTechlist,
    });

    tech = await prompt.run();
    switch (tech) {
        case 'angular':
            createAngClArch()
            break;
        case 'react':
            console.log('react');
            break;
        case 'vue':
            console.log('vue');
            break;
        case 'svelte':
            console.log('svelte');
            break;
        case 'vanilla':
            console.log('vanilla');
            break;
        default:
            console.log('angular');
            break;
    }

}
function createAngClArch() {
    let angularCleanArchitectureCli = new AngularCleanArchitectureCli();
    angularCleanArchitectureCli.createArchitecture();
}

app();
