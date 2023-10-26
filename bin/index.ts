import { BackendCleanArchitectureCli } from "./architectures/backend/index.backend";
import { FrontendCleanArchitectureCli } from "./architectures/frontend/index.frontend";

const { Select } = require('enquirer');



let backOrFront = [
    "frontend",
    "backend"
];

let tech = 'angular';
async function app() {
    console.log('================================================================');
    console.log('*************************  JS - PLANNER ***********************');
    console.log('================================================================');

    const backOrFrontPrompt = await new Select({
        message: 'Your Project Is backend or Frontend ?',
        choices: backOrFront,
    });

    switch (await backOrFrontPrompt.run()) {
        case 'frontend':
            createFrontend();
            break;
        case 'backend':
            createBackend();
            break;
        default:
            createFrontend();
            break;
    }
}

function createFrontend() {
    console.clear();
    let frontend = new FrontendCleanArchitectureCli();
    frontend.CreateFrontend();
}

function createBackend() {
    console.clear();
    let backend = new BackendCleanArchitectureCli();
    backend.createBackend();
}


app();
