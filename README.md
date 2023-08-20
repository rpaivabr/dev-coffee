# GDG Americana: Aula Angular (19/08)

## Instalação Programas

- Download: [NodeJS](https://nodejs.org/en/download)
- Download: [VsCode](https://code.visualstudio.com/download)
- Download: [Git](https://git-scm.com/downloads)

&nbsp;

## Instalar Angular CLI (precisa Node e NPM)

```
npm i -g @angular/cli
```

&nbsp;

## Configuração Inicial

### Opção 1 - Criar novo projeto do início

1.  Criar e instalar dependências:

```
ng new dev-coffee
```

2.  Acessar a pasta e rodar projeto localmente (http://localhost:4200):

```
cd dev-coffee
ng serve
```

### Opção 2 - Clonar este repositório

```
git clone https://github.com/rpaivabr/dev-coffee.git
cd dev-coffee
npm install
ng serve
```

&nbsp;

## Etapa 1

### Diretivas estruturais

```
  // conditional (if)
  <p *ngIf="condition"></p>

  // loop through array (forEach)
  <div *ngFor="let item of list">
    // create 1 div for each item in a list
  </div>
```

### Data binding

```
  // ts --> html (interpolation)
  {{ variable }}

  // ts --> html (property binding)
  <input [value]="variable">

  // ts <-- html (event binding)
  <button (click)="method($event)">
```

### Code

```
// src/app/products.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['Tradicional', 'Com leite'],
  },
];
```

&nbsp;

## Etapa 2

### Criando componentes

```
ng generate component top-bar
ng generate component product-list
```

### Input / Output

```
// src/app/product-card/product-card.component.ts

@Input() product!: Product;
@Output() select = new EventEmitter();
```

&nbsp;

## Etapa 3

### Criando rotas (navegação)

```
// src/app/app.module.ts

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  ...
```

## Etapa 4

### Criando serviços

```
ng generate service cart
ng generate component cart
```

## Etapa 5

### Criando formulários

```
// src/app/app.module.ts

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  ...
```

## Etapa 6

### Criando HTTP requests (async)

```
// src/app/app.module.ts

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  ...
```

&nbsp;

## Extra

### Angular material (UI Library)

```
  ng add @angular/material
```
