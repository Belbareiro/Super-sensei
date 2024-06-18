class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Nombre del Ninja: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} ha bebido sake y ahora tiene ${this.salud} de salud.`);
    }
}

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200);  // Llamada al constructor de la clase Ninja con 200 de salud
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;  // Nuevo atributo sabiduría con valor predeterminado 10
    }

    speakWisdom() {
        this.drinkSake();  // Llamar al método drinkSake() de la clase Ninja
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
        console.log(`Sabiduría: ${this.sabiduria}`);
    }
}

// Ejemplo de uso
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10, Sabiduría: 10"



