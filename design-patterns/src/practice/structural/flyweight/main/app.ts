import { Particle } from "../particle/particle";
import { ParticleFactory } from "../particle/particle.factory";
import { Positions } from "./../../bridge/types/positions.type";

export class Game {
    private particles: Particle[] = [];
    private particlePositions: Positions[] = [];

    public createParticle(
        color: string,
        size: number,
        positions: Positions
    ): void {
        const particle = ParticleFactory.getParticle(color, size);
        this.particles.push(particle);
        this.particlePositions.push(positions);
    }

    public renderParticles(): void {
        this.particles.forEach((particle, i) => {
            particle.render(this.particlePositions[i]);
        });
    }
}
