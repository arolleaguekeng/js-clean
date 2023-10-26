const readline = require('readline');
const fs = require('fs');
export class AngularCleanArchitecture {
    projectName: string;
    constructor(projectName: string) {
        this.projectName = projectName;
    }
    createArchitectureFolders() {
        fs.mkdirSync(this.projectName + '/' + 'src/app/core');
        fs.mkdirSync(this.projectName + '/' + 'src/app/domain');
        fs.mkdirSync(this.projectName + '/' + 'src/app/data');
        fs.mkdirSync(this.projectName + '/' + 'src/app/presentation');
    }

    configureDomain() {
        // Manage Domain Configuration
        fs.mkdirSync(this.projectName + '/' + 'src/app/domain/base');
        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/base/readme.md', '');

        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/base/user-case.ts', '');

        fs.mkdirSync(this.projectName + '/' + 'src/app/domain/models');
        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/models/readme.md', '');

        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/models/user.model.ts', '');

        fs.mkdirSync(this.projectName + '/' + 'src/app/domain/repositories');
        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/repositories/readme.md', '');

        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/repositories/user.repository.ts', '');

        fs.mkdirSync(this.projectName + '/' + 'src/app/domain/usecases');
        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/usecases/readme.md', '');

        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/usecases/user.usecase.ts', '');
        fs.writeFileSync(this.projectName + '/' + 'src/app/domain/usecases/user-register.usecase.ts', '');
    }

    configureCore() {
        fs.writeFileSync(this.projectName + '/' + 'src/app/core/mapper.ts', '');
        fs.writeFileSync(this.projectName + '/' + 'src/app/core/readme.md', '');
    }
    configurePresentation() {
        // Manage Presentation Configuration
        fs.mkdirSync(this.projectName + '/' + 'src/app/presentation/components');
        fs.writeFileSync(this.projectName + '/' + 'src/app/presentation/readme.md', '');
        fs.writeFileSync(this.projectName + '/' + 'src/app/presentation/components/readme.md', '');
        console.log('================================================================');
        console.log('-------------- Copyright Arolle Aguekeng -----------------------');
        console.log('================================================================');
    }

    createAngularCleanArchitecture() {
        this.createArchitectureFolders();
        this.configureDomain();
        this.configureCore();
        this.configurePresentation();
    }
}

