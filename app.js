"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xmen_class_1 = require("./classes/xmen.class");
var villano_class_1 = require("./classes/villano.class");
var wolverine = new xmen_class_1.Xmen("Logan", "Wolverine");
var lex = new villano_class_1.Villano("Lex Luthor", "Conquistar el mundo");
wolverine.imprimir();
lex.imprimirPlan();
