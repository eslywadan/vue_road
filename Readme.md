# Vue Play Ground 

- Use for practicing `Vue` from scratch 
## install vue-cli
```bash
npm install -g vue-cli
```
## Bootstraping the project (optional)
```bash
vue create my-vue-app
```

## install project dependencies
install depdendent modules from the `package.json`
```
npm install
```
## npm run server
```
npm run serve
```

## ES Lint

Step 1: Create `.eslintrc.js` in the root of project
```js
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'pligin:vue/essential',
        'eslint:recommended'
    ],
    paserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        // Example rule: turn off semi-colon enforement
        'semi': 'off',
        'no-console': 'off',
        'vue/no-unused-vars': 'warn'
    }
}
```

Then run 
```bash
npm install eslint babel-eslint eslint-plugin-vue --save-dev
```


## test (use jest)

install jest
```bash
vue add unit-jest
```