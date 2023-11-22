const { execSync } = require('child_process');
const fs = require('fs');
const Enquirer = require('enquirer');
const enquirer = new Enquirer();


export class AngularMicroFrontArchitecture {
    projectName: string;
    microFrontends: string[] = [];
    constructor(projectName: string) {
        this.projectName = projectName;
    }

    getProjectPath() {
        return this.projectName + './';
    }

    async createArchitectureFolders() {
        fs.mkdirSync(this.projectName + 'microfrontends');
        fs.mkdirSync(this.projectName + 'shell-application');
        let projectNamePrompt = await enquirer.prompt({
            type: 'input',
            name: 'numberOfMicroFrontends',
            message: 'Enter number of micro Frontend: '
        });
        const numberOfModules = projectNamePrompt['numberOfMicroFrontends'];

        for (var i = 0; i < parseInt(numberOfModules); i++) {
            const prompt = await enquirer.prompt({
                type: 'input',
                name: 'microFrontend',
                message: `Enter micro-frontend ${i + 1} name: `
            });

            this.microFrontends.push(prompt['microFrontend']);
        }
        console.table(this.microFrontends);
        for (const microFrontend of this.microFrontends) {
            const command = `ng new  ${microFrontend} --skip-tests=true --skip-install=true`;
            const options = { cwd: `microfrontends`, stdio: 'inherit' };
            execSync(command, options);
        }
    }



    async createArchitecture() {
        await this.createArchitectureFolders();
        console.log('Successfully created Angular Feature Module Architecture');


        // close the application
        process.exit(0);
    }
}