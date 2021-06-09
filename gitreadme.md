## Viewing old and new git commit diffrence

1. git diff HEAD<"current commit hash">^..HEAD<"old commit hash">
   ex- git diff HEAD^..HEAD
   ex- git diff HEAD^ 91b99aaeb49da3d5b17dd74d15e010cf5666e194

## How to run local installed git or npm package by npm dependency

Todo - get to know about symlink to connect local dependencies and npm package - [yalc] to manage local dependencies.

1. run npm install {path-of-package }

   EX - npm install ./utils/vender/classnames

   As it will look for package.json file in the above path and copy all the files to node_modules and link the path to the dependency so if you change anything in the orignal file it will be updated in node_modules copied files too so you can use it or update it as normal package

   By Explicitly Adding each local project they do not install all package dependency into root node_module folder they have them in express or package folder node_modules and if you run yarn or npm after del node_module in root it will not work properly as it install all the dependency in the root node_module folder itself this way if you can edit file in you vender or local dependency folder and it will be updated in the node_modules copy too so you can view changes in the package also as it is linked to root node_modules.

      process -

      1. create project init
      2. install all dependencies not in local folder
      3. install all local package in thier respective folders
      4. now use npm install ../local-folder to link and save only project copy into the root node_modules
      5. thats it

      Do Nots -

      1. after adding package.json -> "classnames": "file:utils/vender/classnames",
      2. do not run npm install as it will install all classnames dependencies into root node_module folder and do not link
      3. always sepreately add file local dependencies or use package [yalc]

   FILE - package.json -> "classnames": "file:utils/vender/classnames",

   ref article - https://www.stefanjudis.com/today-i-learned/npm-install-supports-local-packages/
