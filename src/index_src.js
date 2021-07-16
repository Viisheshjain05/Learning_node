// ? Src Folder Containing Sevral Projects

// * FileName           -   index_src
// * Contain Cources - [Colt-steele_DataStructure, Max_NodejsF];
// * Contain Projects - [ Product store ,Clone Repo];

// INDEX
// 1) Data Structure and algorithm
// 2) Node Js
// 3) Product Store
// 4) Clone Repo
// 5)

const ColtSteel_dataStructure = require("./L-DS_Algo-Colt_Steele/index_Colt-steele");
const Max_nodeJs = require("./L-Node_js-max/index");
const Max_CleanCode = require("./L-Clean_code_max/index_clean-code-max");

const SrcIndex = ({ author }) => {
  author === "max" ? Max_nodeJs() : ColtSteel_dataStructure();
  // Max_CleanCode();
};

module.exports = SrcIndex;

//! Check Links And uses
/* *****************************
 ?       IMPORTS  START     
 * ****************************** */
// 1) // ? Section[1, 2] fs
// const LearnFs = require("./src/Learn_Cources/Section1-2/FirstCode");

// 2) // ? Section[3, 4] http, createServer
// const LearnCreateServer = require("./src/Learn_Cources/section3-4/learnCreateServer");
// const LearnCreateServerASSIGNMENT = require("./src/Learn_Cources/section3-4/Assignment1/createUser");

// 3) // ? Section[5, 6] express
// const MiddlewareFunc = require("./src/Learn_Cources/section5-6 EXPRESS/Assignment/BasicMiddleware/middlewareFunc");
// const FullUserRoutes = require("./src/Learn_Cources/section5-6 EXPRESS/Assignment/FullUserRoutesAss/app");
// const ExpressApp = require("./src/Learn_Cources/section5-6 EXPRESS/expressApp");
// const HandlingRequest = require("./src/Learn_Cources/section5-6 EXPRESS/HandlingRequest");
// const LocalDataVar = require("./src/Learn_Cources/section5-6 EXPRESS/LocalDataVar");

// 4) // ? Complete Projects
// const ProductStore = require("./src/ProductStore/app");

/* *****************************
 ?       FILES  START     
 * ****************************** */

// 1) // ? Section[1, 2] fs
// LearnFs.log();

// 2) // ? Section[3, 4]
// LearnCreateServer();
// LearnCreateServerASSIGNMENT();

// 3) // ? Section[5, 6]
// ExpressApp();
// MiddlewareFunc();
// HandlingRequest();
// FullUserRoutes();
// LocalDataVar();

//  ? Mix Section Learning with Project
// ProductStore();
