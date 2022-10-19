abstract class ClasseAbstrata { 
    abstract imprimaAlgo(): void ;
}

class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo() {
        console.log("Hello World");
    }
}

let classeConcreta = new ClasseConcreta();
classeConcreta.imprimaAlgo();
