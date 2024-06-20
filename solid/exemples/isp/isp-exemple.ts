// // Método sem o ISP

// interface Animais {
//     beberAgua: () => string;
//     andar: (metros: number) => string;
//     botarOvos: (quantidade: number) => string;
// }

// class Galinha implements Animais {
//     beberAgua() {
//         return "O animal está bebendo agua.";
//     }

//     andar(metros: number): string {
//         return `O animal esta andando ${metros} metros!`;
//     }

//     botarOvos(quantidade: number): string {
//         return `O animal esta botando ${quantidade} ovos!`;
//     }
// }

// class Cachorro implements Animais {
//     beberAgua() {
//         return "O animal está bebendo agua.";
//     }

//     andar(metros: number): string {
//         return `O animal esta andando ${metros} metros!`;
//     }

//     botarOvos(quantidade: number): string { // quebrando a regra do isp
//         return `O animal não bota ovos!`; 
//     }
// }

// Método com o ISP

interface Animais {
    beberAgua: () => string;
    andar: (metros: number) => string;   
}

interface AnimaisQueBotamOvos extends Animais {
	botarOvos: (quantidade: number) => string;
}

class Galinha implements AnimaisQueBotamOvos {
    beberAgua() {
        return "O animal está bebendo agua.";
    }

    andar(metros: number): string {
        return `O animal esta andando ${metros} metros!`;
    }

    botarOvos(quantidade: number): string {
        return `O animal esta botando ${quantidade} ovos!`;
    }
}

class Cachorro implements Animais {
    beberAgua() {
        return "O animal está bebendo agua.";
    }

    andar(metros: number): string {
        return `O animal esta andando ${metros} metros!`;
    }
}
