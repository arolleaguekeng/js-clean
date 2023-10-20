#!/bin/bash
echo
echo "================================================================"
echo "************ Shell Angular Clean Architecture ******************"
echo
echo "-------------- Copyright Arolle Aguekeng -----------------------"
echo "================================================================"
echo

createAngularProject(){
    read -p "Enter Your Project Name: " projectName
    echo $projectName
    read -p "Allow Routing ? (Y/n): " allowRouting
    if [ $allowRouting="y" ]
    then
        $allowRouting = "--routing"
    else
        $allowRouting = ""
    fi
    ng new $projectName $allowRouting --style=scss --skip-tests=true --skip-install=true
    cd $projectName/src/app
}



createArchitectureFolders() {
    mkdir core
    mkdir domain
    mkdir data
    mkdir presentation
}

configureDomain(){
    # Manage Domain Configuration
    mkdir domain/base
    touch domain/base/readme.md
    touch domain/base/user-case.ts

    mkdir domain/models
    touch domain/readme.md
    touch domain/models/readme.md
    touch domain/models/user.model.ts

    mkdir domain/repositories
    touch domain/repositories/readme.md
    touch domain/repositories/user.repository.ts

    mkdir domain/usecases
    touch domain/readme.md
    touch domain/usecases/readme.md
    touch domain/usecases/user.usecase.ts
    touch domain/usecases/user-register.usecase.ts
    # End Of domain configuration
}

configureCore(){
    # Manage Core Configuration
    touch core/mapper.ts
    touch core/readme.md
}

configurePresentation(){
    # Manage Presentation Configuration
    mkdir presentation/components
    touch presentation/readme.md
    touch presentation/components/readme.md
}

configureData(){
    # Manage Data Configuration
    mkdir -p data/repositories/user/entities
    touch data/repositories/user/entities/user.entity.ts
    touch readme.md
    mkdir -p data/repositories/user/mappers
    touch data/repositories/user/mappers/user.mapper.ts
}

createAngularProject
createArchitectureFolders
configureDomain
configureCore
configurePresentation
configureData



echo "================================================================"
echo "-------------- Copyright Arolle Aguekeng -----------------------"
echo "================================================================"


