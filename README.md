# maurbe.github.io
Repository containing the source code for the personal website based on Ryan Fitzgerald's [devportfolio](https://github.com/RyanFitzgerald/devportfolio) repo.\
Note to myself: To update the website with modifications run 
```
npm run build
npm run deploy
```
The `run` command is defined in the `package.json` file and runs `npx gatsby build && gh-pages -d public -b main --add` under the hood. Source code must be kept on the `main` branch.

