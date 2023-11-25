
import { AngularCleanArchitecture } from "./angularCleanArch/angularCleanArch";
import { AngularEntrepriseArchitecture } from "./angularEntrepriseArch/angularEntrepriseArch";
import { AngularFeatureModuleArchitecture } from "./angularFeaturesModule/angularFeatureModule";
import { AngularMicroFrontArchitecture } from "./angularMicroFrontArch/angularMicroFrontArch";


const { execSync } = require('child_process');
const { Select } = require('enquirer');

const Enquirer = require('enquirer');
const enquirer = new Enquirer();

export class AngularCleanArchitectureCli {
    executeCommand() {
        const command = `ng new ${this.projectName}   --skip-tests=true --skip-install=true`;
        execSync(command, { stdio: 'inherit' });
        console.clear();
    }
    projectName: string = 'my-project';
    createArchitecture() {
        console.log('================================================================');
        console.log('********************  Angular Clean Architecture ***************');
        console.log('================================================================');
        this.askParrametters();
    }
    async askParrametters() {
        console.log('================================================================');
        let projectNamePrompt = await enquirer.prompt({
            type: 'input',
            name: 'projectName',
            message: 'Enter project name: '
        });
        this.projectName = projectNamePrompt['projectName'];
        this.chooseArchitectureTemplate();
    }
    async chooseArchitectureTemplate() {

        const prompt = await new Select({
            message: 'Select Architecture:',
            choices: [
                "Angular Clean Architecture (Angular CA)",
                "Angular Enterprise Architecture",
                "Angular Feature Modules",
                "Angular Monorepo Architecture",
                "Angular Service-Oriented Architecture (SOA)",
                "Angular Micro Frontends",
                "Angular Serverless Architecture"
            ],
        });

        const style = await prompt.run();

        console.log(`Vous avez choisi le style: ${style}`);
        let styleString = style.toString();
        console.log(styleString);
        switch (styleString) {
            case "Angular Clean Architecture (Angular CA)":
                this.createAngClArch();
            case "Angular Enterprise Architecture":
                this.createAngEntArch();
            case "Angular Feature Modules":
                this.createAngularFeatureModuleArch();
            case "Angular Monorepo Architecture":
                this.createAngMonArch();
            case "Angular Service-Oriented Architecture (SOA)":
                this.createAngSOAArch();
            case "Angular Micro Frontends":
                this.createMicroFrontArchitecture();
            case "Angular Serverless Architecture":
                this.createAngServArch();
        }

    }

    async createAngClArch() {
        console.log("******************** Ang Clean Arch************************");
        this.executeCommand();
        new AngularCleanArchitecture(this.projectName).createArchitecture();
    }

    async createAngEntArch() {
        console.log("*****************Ang Entreprise Arch***************************");
        this.executeCommand();
        new AngularEntrepriseArchitecture(this.projectName).createArchitecture();
    }

    async createAngularFeatureModuleArch() {
        console.log("**************Ang feature module****************");
        this.executeCommand();
        new AngularFeatureModuleArchitecture(this.projectName).createArchitecture();
    }



    async createMicroFrontArchitecture() {
        console.log("*******************ang micros arch *************************");
        new AngularMicroFrontArchitecture(this.projectName).createArchitecture();
        // TODO: Create Angular Micro Frontends
    }
    async createAngMonArch() {
        console.log("********************sdfsdfsdfsdfsdf************************");

        // TODO: Create Angular Monorepo Architecture
    }
    createAngSOAArch() {

        // TODO: Create Angular Service-Oriented Architecture (SOA)
    }

    createAngServArch() {

        // TODO: Create Angular Serverless Architecture
    }
}
