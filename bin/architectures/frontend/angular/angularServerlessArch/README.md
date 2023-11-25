project-name/
│
├── src/
│   │
│   ├── app/
│   │   ├── core/
│   │   │   └── (Services, intercepteurs, modèles communs)
│   │   │
│   │   ├── shared/
│   │   │   └── (Composants, services, et modules partagés globalement)
│   │   │
│   │   ├── feature-modules/
│   │   │   ├── feature1/
│   │   │   │   ├── components/
│   │   │   │   ├── services/
│   │   │   │   ├── feature1.module.ts
│   │   │   │   └── feature1-routing.module.ts
│   │   │   │
│   │   │   ├── feature2/
│   │   │   │   ├── components/
│   │   │   │   ├── services/
│   │   │   │   ├── feature2.module.ts
│   │   │   │   └── feature2-routing.module.ts
│   │   │   │
│   │   │   └── ...
│   │   │
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   │
│   ├── assets/
│   │   └── (Fichiers statiques : images, polices, etc.)
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   │   └── ...
│   │
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── ...
│
├── serverless-functions/
│   ├── function1/
│   │   └── (Fonction serverless 1, par exemple, AWS Lambda)
│   │
│   ├── function2/
│   │   └── (Fonction serverless 2)
│   │
│   └── ...
│
├── .editorconfig
├── angular.json
├── package.json
├── tsconfig.json
├── tslint.json
└── ...
