project-name/
│
├── e2e/
│   └── (Tests end-to-end)
│
├── node_modules/
│   └── (Dépendances Node.js)
│
├── src/
│   │
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   └── (Services communs)
│   │   │   │
│   │   │   ├── models/
│   │   │   │   └── (Modèles de données communs)
│   │   │   │
│   │   │   ├── interceptors/
│   │   │   │   └── (Intercepteurs HTTP)
│   │   │   │
│   │   │   └── core.module.ts
│   │   │
│   │   ├── feature-modules/
│   │   │   ├── module-a/
│   │   │   │   └── (Module A spécifique)
│   │   │   │
│   │   │   ├── module-b/
│   │   │   │   └── (Module B spécifique)
│   │   │   │
│   │   │   └── shared/
│   │   │       └── (Composants, services, et modules partagés)
│   │   │
│   │   ├── shared/
│   │   │   └── (Composants, services, et modules partagés globalement)
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
├── .editorconfig
├── angular.json
├── package.json
├── tsconfig.json
├── tslint.json
└── ...
