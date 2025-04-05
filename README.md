# 🏋️ Calculadora de IMC - Angular

[![Angular Version](https://img.shields.io/badge/Angular-19.0.6-DD0031?logo=angular&style=flat)](https://angular.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Screenshot da Calculadora de IMC](./src/assets/screenshot.png)

> Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 19.0.6.

## ✨ Funcionalidades
- Cálculo automático do Índice de Massa Corporal (IMC)
- Classificação em faixas: Magreza, Normal, Sobrepeso e Obesidade
- Visualização de pesos ideais para cada faixa
- Interface responsiva para desktop e mobile

## 🚀 Como Executar

### Servidor de Desenvolvimento
Execute o servidor local com:
```bash
ng serve
```
Acesse http://localhost:4200 no navegador. A aplicação recarrega automaticamente ao modificar arquivos.

### Instalação
```bash
npm install
```
## 🛠️ Ferramentas do Angular CLI

### Gerar Componentes
```bash
ng generate component nome-do-componente
```
### Para ver todas as opções disponíveis:
```bash
ng generate --help
```
### Build de Produção
```bash
ng build
```
Artefatos serão gerados no diretório dist/.

## Testes
- Testes unitários:
``` bash
ng test
```

- Testes end-to-end:
```bash
ng e2e
```

## 📊 Fórmula do IMC
```bash
IMC = peso (kg) / (altura (m)²)
```

## 📌 Referências

[Tabela de IMC - OMS](https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations)

[Documentação Angular](https://v17.angular.io/docs)

[Angular CLI](https://angular.dev/tools/cli)

Nota: Este projeto foi gerado com Angular CLI. Para mais comandos e referências, consulte a [documentação oficial](https://angular.dev/tools/cli).
