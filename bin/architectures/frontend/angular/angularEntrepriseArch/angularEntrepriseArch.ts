const readline = require('readline');
const { execSync } = require('child_process');
const { NumberPrompt } = require('enquirer');
const fs = require('fs');
export class AngularEntrepriseArchitecture {
    projectName: string;
    constructor(projectName: string) {
        this.projectName = projectName;
    }
    createArchitectureFolders() {
        fs.mkdirSync(this.projectName + '/' + 'src/app/modules');

        var modules = ['core', "shared",]
        for (var module of modules) {
            const command = `ng generate module ${module}`;
            const options = { cwd: `${this.projectName}`, stdio: 'inherit' };
            execSync(command, options);
        }
        //this.configureEnvironments();

    }

    configureShared() {
        fs.mkdirSync(this.projectName + '/' + 'src/app/shared/components');
        fs.writeFileSync(this.projectName + '/' + 'src/app/shared/components/readme.md', '');
        
        
        fs.mkdirSync(this.projectName + '/' + 'src/app/shared/services');
        fs.writeFileSync(this.projectName + '/' + 'src/app/shared/services/readme.md', '');

        fs.writeFileSync(this.projectName + '/' + 'src/app/shared/readme.md', '');
    }
    configureEnvironments() {
        fs.mkdirSync(this.projectName + '/' + 'src/environments');
        fs.writeFileSync(this.projectName + '/' + 'src/environments/readme.md');
        fs.writeFileSync(this.projectName + '/' + 'src/environments/environment.prod.ts');
        fs.writeFileSync(this.projectName + '/' + 'src/environments/environment.ts');
    }

    configureCore() {
        fs.mkdirSync(this.projectName + '/' + 'src/app/core/services');
        fs.writeFileSync(this.projectName + '/' + 'src/app/core/services/readme.md');

        fs.mkdirSync(this.projectName + '/' + 'src/app/core/models');
        fs.writeFileSync(this.projectName + '/' + 'src/app/core/models/readme.md');

        fs.mkdirSync(this.projectName + '/' + 'src/app/core/interceptors');
        fs.writeFileSync(this.projectName + '/' + 'src/app/core/interceptors/readme.md');

        fs.writeFileSync(this.projectName + '/' + 'src/app/core/readme.md', '');
    }
    configureModules() {
        fs.writeFileSync(this.projectName + '/' + 'src/app/modules/readme.md', '');
    }

    createArchitecture() {
        this.createArchitectureFolders();
        this.configureShared();
        this.configureCore();
        this.configureModules();
        console.log('Successfully created Angular Entreprise Architecture')
    }
}

