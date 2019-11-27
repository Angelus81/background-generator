// To check version of Node:
npm -v
5.5.1

node -v
v12.13.1

// To upgrade, run: 
npm install npm@latest -g

// Creates package.json file:
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

// Installing packages using -g "globally":
npm install -g live-server

// Live Server creates a server to view html
live-server

// Installing packages locally:
npm install lodash 

****INCORRECT*****
Importing Modules into Sublime in script.js:
import { without } from 'lodash';
console.log(without); 
//error is displayed unknown token 

// install package browserify:
npm install -g browserify

****CORRECT*****
After browserify install type in
browserify script.js > bundle.js

bundle.js is created with all dependencies (lodash), then changed in html script > bundle.

// Console error: "Unchecked runtime.lastError: The message port closed before a response was received."
check if ad blocker or any extensions is causing this try disabling ad blocker/vid plugins

// Every change in script.js needs to be updated in Gitbash run:
browserify script.js > bundle.js

// If node_modules is deleted as 
// long as there is a package.json file it can be restorted by:
npm install

