const readline = require('readline');
const fs = require('fs');
export class AngularCleanArchitecture {
    projectName: string;
    constructor(projectName: string) {
        this.projectName = projectName;
    }
    getProjectPath() {
        return this.projectName + '/src/app';
    }
    createArchitectureFolders() {
        fs.mkdirSync(`${this.getProjectPath()}/core`);
        fs.mkdirSync(`${this.getProjectPath()}/domain`);
        fs.mkdirSync(`${this.getProjectPath()}/data`);
        fs.mkdirSync(`${this.getProjectPath()}/presentation`);
    }

    configureDomain() {
        // Manage Domain Configuration
        fs.mkdirSync(`${this.getProjectPath()}/domain/base`);
        fs.writeFileSync(`${this.getProjectPath()}/domain/base/readme.md`, '');

        fs.writeFileSync(`${this.getProjectPath()}/domain/base/user-case.ts`, '');

        fs.mkdirSync(`${this.getProjectPath()}/domain/models`);
        fs.writeFileSync(`${this.getProjectPath()}/domain/models/readme.md`, '');

        fs.writeFileSync(`${this.getProjectPath()}/domain/models/user.model.ts`, '');

        fs.mkdirSync(`${this.getProjectPath()}/domain/repositories`);
        fs.writeFileSync(`${this.getProjectPath()}/domain/repositories/readme.md`, '');

        fs.writeFileSync(`${this.getProjectPath()}/domain/repositories/user.repository.ts`, '');

        fs.mkdirSync(`${this.getProjectPath()}/domain/usecases`);
        fs.writeFileSync(`${this.getProjectPath()}/domain/usecases/readme.md`, '');

        fs.writeFileSync(`${this.getProjectPath()}/domain/usecases/user.usecase.ts`, '');
        fs.writeFileSync(`${this.getProjectPath()}/domain/usecases/user-register.usecase.ts`, '');
    }

    configureCore() {
        fs.writeFileSync(`${this.getProjectPath()}/core/mapper.ts`, '');
        fs.writeFileSync(`${this.getProjectPath()}/core/readme.md`, '');
    }
    configurePresentation() {
        // Manage Presentation Configuration
        fs.mkdirSync(`${this.getProjectPath()}/presentation/components`);
        fs.writeFileSync(`${this.getProjectPath()}/presentation/readme.md`, '');
        fs.writeFileSync(`${this.getProjectPath()}/presentation/components/readme.md`, '');
        console.log('================================================================');
        console.log('-------------- Copyright Arolle Aguekeng -----------------------');
        console.log('================================================================');
    }

    createArchitecture() {
        this.createArchitectureFolders();
        this.configureDomain();
        this.configureCore();
        this.configurePresentation();
    }
}

