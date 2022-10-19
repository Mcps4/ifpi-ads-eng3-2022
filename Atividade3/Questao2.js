"use strict";
class ClasseAbstrata {
}
class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo() {
        console.log("Hello World");
    }
}
let classeConcreta = new ClasseConcreta();
classeConcreta.imprimaAlgo();
