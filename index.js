const args = require("minimist")(process.argv);
const SrcIndex = require("./src/index_src");

let DEFAULT_authorArr = ["max", "colte"];
let DEFAULT_author = "colte";

const author = (args.author || args.a)?.toString().toLowerCase();

if (author === "true" || author === undefined) {
  console.warn(
    "PLEASE ENTER AUTHOR NAME [--author || -a],[ max || colte ] else Default colte"
  );
  return SrcIndex({ author: DEFAULT_author });
}

if (DEFAULT_authorArr.indexOf(author) === -1) {
  console.warn(
    "PLEASE ENTER AUTHOR NAME FROM [ max || colte ] else Default colte"
  );
  return SrcIndex({ author: DEFAULT_author });
}

SrcIndex({ author: author });
