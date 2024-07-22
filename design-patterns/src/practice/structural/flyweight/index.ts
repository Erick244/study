import { Game } from "./main/app";

const game = new Game();

for (let i = 0; i <= 10; i++) {
    game.createParticle("red", 10, {
        x: +(Math.random() * 100).toFixed(0),
        y: +(Math.random() * 100).toFixed(0),
    });
}

game.renderParticles();
