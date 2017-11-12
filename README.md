# A noob is making a web app

## Librairies added

- react-router-dom
- react-apollo
- styled-components
- flow-bin
- react-transition-group 
- facepaint
- diacritics

- enzyme
- jest-styled-components
- react-test-renderer

- babel-preset-flow
- eslint-plugin-prettier
- raf
- cypress
- surge

## Development

### Creating the app

1. Create a new github repo

2. Install latest node version

   ```shell
   nvm install v8.7.0
   nvm use 8.7.0
   ```

3. Create a new react app (1.4.1)

   ```shell
   creat-react-app komi-app
   ```

4. Connect app to github repo

   - initiate project
   - add remote and push master

   ```shell
   git remote add origin https://github.com/mimccio/komi-app.git
   git push -u origin master
   ```

   - initiate gitflow

### Setup test driven development environment

1. eject CRA

2. ESLint config :

   - [install airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)


   *bash*

   ```shell
   (
     export PKG=eslint-config-airbnb;
     npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save "$PKG@latest"
   )
   ```

   - Add `.eslintignore` file :

   ```
   public/
   node_modules/
   config/
   scripts/
   build/
   ```

   - `yarn add eslint-plugin-prettier`
   - Add .eslintrc config file :

   ```
   {
     "parser": "babel-eslint",
     "parserOptions": {
       "ecmaVersion": 2016,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true,
         "modules": true,
         "experimentalObjectRestSpread": true
       }
     },
     "extends": ["plugin:flowtype/recommended", "airbnb"],
     "plugins": ["react", "jsx-a11y", "import", "flowtype", "prettier"],
     "env": {
       "es6": true,
       "browser": true,
       "node": true,
       "jest": true
     },
     "rules": {
       "semi": [2, "never"],
       "comma-dangle": [1, "always-multiline"],
       "space-infix-ops": 0,
       "max-len": [1, 120, 2],
       "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
       "react/jsx-no-bind": [
         1,
         {
           "allowArrowFunctions": true
         }
       ],
       "react/prop-types": 0,
       "jsx-quotes": [2, "prefer-single"]
     }
   }
   ```

3. Install cypress
4. Install CircleCI
5. Add Surge to CircleCI
6. [Add Flow](https://flow.org/en/docs/tools/create-react-app/)
   - Run `npm install --save flow-bin` (or `yarn add flow-bin`).
   - Add `"flow": "flow"` to the `scripts` section of your `package.json`.
   - Run `npm run flow init` (or `yarn flow init`) to create a [`.flowconfig` file](https://flowtype.org/docs/advanced-configuration.html) in the root directory.
   - `yarn add babel-preset-flow`

   - add flow to babel presets in package.json (or babelrc)

     ```json
     "babel": {
         "presets": [
           "react-app",
           "flow"
         ]
       },
     ```

   - Add `// @flow` to any files you want to type check (for example, to `src/App.js`).


*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*