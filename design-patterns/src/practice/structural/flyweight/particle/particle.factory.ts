import { Particle } from "./particle";

export class ParticleFactory {
    private static particles: Map<string, Particle> = new Map();

    public static getParticle(color: string, size: number): Particle {
        const key = color + size;
        let particle = this.particles.get(key);

        if (!particle) {
            particle = new Particle(color, size);
            this.particles.set(key, particle);
        }

        return particle;
    }
}
