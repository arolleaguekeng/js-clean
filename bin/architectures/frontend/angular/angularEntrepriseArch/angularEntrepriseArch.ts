const readline = require('readline');
const { execSync } = require('child_process');
const { NumberPrompt } = require('enquirer');
const fs = require('fs');
export class AngularEntrepriseArchitecture {
    projectName: string;
    constructor(projectName: string) {
        this.projectName = projectName;
    }
    getProjectPath() {
        return this.projectName + '/' + 'src/app';
    }
    createArchitectureFolders() {
        fs.mkdirSync(this.projectName + '/' + 'src/app/modules');

        var modules = ['core', "shared",]
        for (var module of modules) {
            const command = `ng generate module ${module}`;
            const options = { cwd: `${this.projectName}`, stdio: 'inherit' };
            execSync(command, options);
        }

    }

    configureShared() {
        const projectPath = this.getProjectPath();
        fs.mkdirSync(`${projectPath}/shared/components`);
        fs.writeFileSync(`${projectPath}/shared/components/readme.md`, '');

        fs.mkdirSync(`${projectPath}/shared/services`);
        fs.writeFileSync(`${projectPath}/shared/services/readme.md`, '');

        fs.writeFileSync(`${projectPath}/shared/readme.md`, '');
    }

    configureEnvironments() {
        const projectPath = this.getProjectPath();
        fs.mkdirSync(`${projectPath}/environments`);
        fs.writeFileSync(`${projectPath}/environments/readme.md`, '');
        fs.writeFileSync(`${projectPath}/environments/environment.prod.ts`, '');
        fs.writeFileSync(`${projectPath}/environments/environment.ts`, '');
    }

    configureCore() {
        const projectPath = this.getProjectPath();
        fs.mkdirSync(`${projectPath}/core/services`);
        fs.writeFileSync(`${projectPath}/core/services/readme.md`, '');

        fs.mkdirSync(`${projectPath}/core/models`);
        fs.writeFileSync(`${projectPath}/core/models/readme.md`, '');

        fs.mkdirSync(`${projectPath}/core/interceptors`);
        fs.writeFileSync(`${projectPath}/core/interceptors/readme.md`, '');

        fs.writeFileSync(`${projectPath}/core/readme.md`, '');
    }

    configureModules() {
        const projectPath = this.getProjectPath();
        fs.writeFileSync(`${projectPath}/modules/readme.md`, '');
    }

    createArchitecture() {
        this.createArchitectureFolders();
        this.configureShared();
        this.configureCore();
        this.configureModules();
        console.log('Successfully created Angular Entreprise Architecture')

        // close the application
        process.exit(0);
    }
}