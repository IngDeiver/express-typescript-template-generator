<h1 align="center">Welcome to Express with typescript and good practices template 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
   <a href="#" target="_blank">
    <img alt="Build" src="https://img.shields.io/travis/IngDeiver/express-typescript-template-generator" />
  </a>
   <a href="#" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/jsdelivr/npm/hw/express-typescript-template-generator" />
  </a>
  
</p>

Base express.js template with TypeScript and  best practices ready for start to coding.

## Feactures 
- Typescript
- Dodumentation with jsdoc (available in jsdoc/docs/index.html)
- Commits convections
- Eslint
- Repository pattern
- DTO pattern
- Validation request data with middlwares
- Global error handler
- Mogoose config
- Dotenv config
- Testing with jest
- Pretty logs with winston
- Pretty routes pattern

## Project structure
```
📦src # Main folder of code
 ┣ 📂config # Folder for  app config, here there is files like dotenv config ig 
 ┣ 📂controller # Folder for handlers functions called from routes
 ┣ 📂dtos # DTO pattern for handle data of models
 ┣ 📂exceptions # Global handle error and custom exceptions
 ┣ 📂interfaces # Interfaces for greater abstraction
 ┣ 📂middlewares # Folder for express middlewares
 ┣ 📂models # Schemas of mongodb for handle data
 ┣ 📂repository # Pattern repository for disengage database engine
 ┣ 📂routes # Express routes for slices
 ┣ 📂server # Express server instance
 ┣ 📂services # Services for write core code bussiness
 ┣ 📂utils # Utils for usage in the application like logger utils
 ┣ 📜app.ts # Main file of project
 ┗ 📜setupTests.ts # Config for testing with jest
```

## Installation
```sh
$ npm i -g express-typescript-template-generator
```

## Use
```sh
$ express-typescript-template-generator
```
```sh
$ cd <project-name>
```
> Configure your .env file with the necessary environment variables.
> Create the .env and .env.dev files at the root of the project with:
> - DB_URI=your database uri

## Development usage

```sh
$ npm run tsc
$ npm run dev
```
> Open the browser in: http://localhost:3000/api/user.

## Production usage

```sh
$ npm start
```

## Run tests

```sh
$ npm run test
```

## Create documentation

```sh
$ npm run jsdoc
```

## Eslint

```sh
$ npm run lint
$ npm run lint:fix
```

## Author

👤 **Deiver Carrascal**

* Website: https://ingdeiver.github.io/portafolio/
* Github: [@IngDeiver](https://github.com/IngDeiver)

## Show your support

Give a ⭐️ if this project helped you!.
Can make pull request to contribute!.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_