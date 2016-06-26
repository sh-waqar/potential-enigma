# potential-enigma
A test project based on angularjs, webpack and es2015.

## Instructions
- Checkout the repo using command.

```
git clone https://github.com/sh-waqar/potential-enigma.git
```

- Install the project dependencies.

```
npm install
```

- Run the dev server.

```
npm start
```

You should now have the app server at localhost:8080 and you can open it in your favorite browser.

## Run test cases
- The project is using Karma as test runner and Jasmine as testing framwork.

```
npm test
```

## Production build
- Run the following command to create the production ready code with uglified scripts and cache busting.

```
npm build
```
- This will create a `dist` folder which can be used for deployment.

## Features covered

- Used **ES2015** using babel. Features used (Classes, Arrow function, let, modules).
- Used **SCSS** for styling. Website is fully responsive and mobile friendly. (No use of bootstrap).
- Used **Webpack** for module bundling task automation.
- Used **Karma** and **Jasmine** for writing test cases.