const { execSync } = require('child_process');
const fs = require('fs');
const Enquirer = require('enquirer');
const enquirer = new Enquirer();

export class AngularMicroFrontArchitecture {
    projectName: string;
    modules: string[] = [];
    constructor(projectName: string) {
        this.projectName = projectName;
    }

    getProjectPath() {
        return this.projectName + '/src/app';
    }

    async createArchitectureFolders() {
        fs.mkdirSync(this.projectName + '/src/app/microfrontends');
        fs.mkdirSync(this.projectName + '/src/app/shell-application');
        let projectNamePrompt = await enquirer.prompt({
            type: 'input',
            name: 'numberOfModules',
            message: 'Enter number of modules: '
        });
        const numberOfModules = projectNamePrompt['numberOfModules'];

        for (var i = 0; i < parseInt(numberOfModules); i++) {
            const prompt = await enquirer.prompt({
                type: 'input',
                name: 'module',
                message: `Enter module ${i + 1} name: `
            });

            this.modules.push(prompt['module']);
        }
        for (const module of this.modules) {
            const command = `ng generate module ${module}`;
            const options = { cwd: `${this.getProjectPath()}/modules`, stdio: 'inherit' };
            execSync(command, options);
        }
    }

    configureModuleFolders() {
        console.log('================================================================');
        const projectPath = this.getProjectPath();

        for (const module of this.modules) {
            fs.mkdirSync(`${projectPath}/modules/${module}/components`);
            fs.writeFileSync(`${projectPath}/modules/${module}/components/readme.md`, '');

            fs.mkdirSync(`${projectPath}/modules/${module}/services`);
            fs.writeFileSync(`${projectPath}/modules/${module}/services/readme.md`, '');

            fs.writeFileSync(`${projectPath}/modules/${module}/readme.md`, '');
        }
    }

    async createArchitecture() {
        await this.createArchitectureFolders();
        this.configureModuleFolders();
        console.log('Successfully created Angular Feature Module Architecture');


        // close the application
        process.exit(0);
    }
}