const readline = require('readline');
const fs = require('fs');
const { execSync } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('================================================================');
console.log('************ TypeScript Angular Clean Architecture ******************');
console.log('');
console.log('-------------- Copyright Arolle Aguekeng -----------------------');
console.log('================================================================');
let projectName = 'my-project';
let routingFlag = "--routing";

function createAngularProject() {
    rl.question('Enter Your Project Name: ', (name) => {
        console.log(name);
        projectName = name;

        rl.question('Allow Routing ? (Y/n): ', (routing) => {
             routingFlag = routing.toLowerCase() === 'y' ? '--routing' : '';
            
            createArchitectureFolders();
        });

        const command = `ng new ${projectName} ${routingFlag} --style=scss --skip-tests=true --skip-install=true`;
        execSync(command, { stdio: 'inherit' });
    });
}

function createArchitectureFolders() {
    fs.mkdirSync(projectName+'/'+'src/app/core');
    fs.mkdirSync(projectName+'/'+'src/app/domain');
    fs.mkdirSync(projectName+'/'+'src/app/data');
    fs.mkdirSync(projectName+'/'+'src/app/presentation');

    configureDomain();
}

function configureDomain() {
    // Manage Domain Configuration
    fs.mkdirSync(projectName + '/' + 'src/app/domain/base');
    fs.writeFileSync(projectName + '/' + 'src/app/domain/base/readme.md', '');

    fs.writeFileSync(projectName + '/' + 'src/app/domain/base/user-case.ts', '');

    fs.mkdirSync(projectName + '/' + 'src/app/domain/models');
    fs.writeFileSync(projectName + '/' + 'src/app/domain/models/readme.md', '');

    fs.writeFileSync(projectName + '/' + 'src/app/domain/models/user.model.ts', '');

    fs.mkdirSync(projectName + '/' + 'src/app/domain/repositories');
    fs.writeFileSync(projectName + '/' + 'src/app/domain/repositories/readme.md', '');

    fs.writeFileSync(projectName + '/' + 'src/app/domain/repositories/user.repository.ts', '');

    fs.mkdirSync(projectName + '/' + 'src/app/domain/usecases');
    fs.writeFileSync(projectName + '/' + 'src/app/domain/usecases/readme.md', '');

    fs.writeFileSync(projectName + '/' + 'src/app/domain/usecases/user.usecase.ts', '');
    fs.writeFileSync(projectName + '/' + 'src/app/domain/usecases/user-register.usecase.ts', '');

    // End Of domain configuration

    configureCore();
}

function configureCore() {
    // Manage Core Configuration
    fs.writeFileSync(projectName + '/' + 'src/app/core/mapper.ts', '');
    fs.writeFileSync(projectName + '/' + 'src/app/core/readme.md', '');

    configurePresentation();
}

function configurePresentation() {
    // Manage Presentation Configuration
    fs.mkdirSync(projectName + '/' + 'src/app/presentation/components');
    fs.writeFileSync(projectName + '/' + 'src/app/presentation/readme.md', '');
    fs.writeFileSync(projectName + '/' + 'src/app/presentation/components/readme.md', '');

    console.log('================================================================');
    console.log('-------------- Copyright Arolle Aguekeng -----------------------');
    console.log('================================================================');

    rl.close();
}

createAngularProject();
