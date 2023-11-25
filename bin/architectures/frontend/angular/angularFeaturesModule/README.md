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
│   │   │   └── (Services, intercepteurs, modèles communs)
│   │   │
│   │   ├── shared/
│   │   │   └── (Composants, services, et modules partagés globalement)
│   │   │
│   │   ├── feature1/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── feature1.module.ts
│   │   │   └── feature1-routing.module.ts
│   │   │
│   │   ├── feature2/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── feature2.module.ts
│   │   │   └── feature2-routing.module.ts
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
