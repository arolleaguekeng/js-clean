const { Select, Input, Prompt, Confirm } = require('enquirer');
const Enquirer = require('enquirer');
const enquirer = new Enquirer();


export class BackendCleanArchitectureCli {
    jsTechlistBack = [
        "node",
        "express",
        "nestjs",
        "deno"
    ];

    tech = 'angular';
    async createBackend() {
        console.log('================================================================');
        console.log('********************* JS - PLANNER BACKEND ********************');
        console.log('================================================================');

        const prompt = await new Select({
            message: 'Select Backend Technology:',
            choices: this.jsTechlistBack,
        });

        this.tech = await prompt.run();
        switch (this.tech) {
            case 'node':
                console.log('node');
                break;
            case 'express':
                console.log('express');
                break;
            case 'nestjs':
                console.log('nestjs');
                break;
            case 'deno':
                console.log('deno');
                break;
            default:
                console.log('node');
                break;
        }

    }


    createNodeClArch() {
        // TODO Create Node Clean Architecture
    }

    createNestClArch() {
        // TODO Create Nest Clean Architecture
    }

    createExpressClArch() {
        // TODO Create Express Clean Architecture
    }

    createDenoClArch() {
        // TODO Create Deno Clean Architecture
    }
}

