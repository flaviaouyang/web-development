# General Notes

## NPM

- set up package.json (important information about your project)

  - manual approach `npm init`
  - default approach `npm init -y`

- install a package

  - add to dependencies property of package.json

- dev dependency

  - `-D` or `--save-dev`
  - don't need it in the productions
  - examples of dev dependencies are linting, nodemon, etc...

- scripts

```JSON
"scripts" {
  "start": "node app.js"
},
```

- `package-lock.json`
  - have specific versions for all packages so it's compatible with version changes
