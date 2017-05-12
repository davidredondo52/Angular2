//import {Xmen} from "./classes/xmen.class";
//import {Villano} from "./classes/villano.class";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./classes/index");
var wolverine = new index_1.Xmen("Logan", "Wolverine");
var lex = new index_1.Villano("Lex Luthor", "Conquistar el mundo");
wolverine.imprimir();
lex.imprimirPlan();
