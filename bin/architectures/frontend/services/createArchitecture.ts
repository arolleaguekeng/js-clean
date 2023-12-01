import { AngularCleanArchitectureCli } from "js-clean/bin/architectures/frontend/angular";

 export class CreateArchitecturesService{
    static createAngClArch() {
        console.clear();
        let angularCleanArchitectureCli = new AngularCleanArchitectureCli();
        angularCleanArchitectureCli.createArchitecture();
    }
}