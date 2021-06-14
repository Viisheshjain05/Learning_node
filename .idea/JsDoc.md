# Using jsDoc markdown

1. Need to install marked - markdown to html converter [Marked](https://www.npmjs.com/package/marked)
2. Add into plugin array "plugins": ["plugins/markdown"] [JsDoc-Marked](https://jsdoc.app/plugins-markdown.html)

# Basic Tags meaning

> ## Global Tags

1. @description - It will add description at the top of function
2. @depriciate - It will depriciate function as of older version

> ## Functions Tags

1. @param - it will add function param to the table with description

> ## Classes Tags

1. @constructor - adding constructor and its props

> ## Link Tags Types

---

Syntax

1. {@link namepathOrURL}
2. [link text]{@link namepathOrURL}
3. {@link namepathOrURL|link text}
4. {@link namepathOrURL link text (after the first space)}

---

# Typescript features with jsDocs

> ## @ts-check && d.ts file

1. declaration typescript file is generated using jsDoc as you need to install typescript as dev-dependency
2. we can also enrich ts power without need to download typescript by @ts-check as using jsdoc it will provide basic or advance typechecking to the file [TypeScript JsDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
3. we also get nice support from vsCode enabling better description of functions in editor || IDE

> ## @type

1. EX - @type {typeOfData}
2. Type description will be ignored as it does not have any or table type structre like param
3. You can add heading above it to use as description
