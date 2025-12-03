# maurbe.github.io
Repository containing the source code for the personal website based on Ryan Fitzgerald's [devportfolio](https://github.com/RyanFitzgerald/devportfolio) repo.\
Note to myself: To update/develop the website run 
```
npm run build
npm run deploy
```
The <code>run</code> command is defined in the <code>package.json</code> file and runs <code>npx gatsby build && gh-pages -d public -b main --add</code> under the hood. Source code must be kept on the <main> branch.

