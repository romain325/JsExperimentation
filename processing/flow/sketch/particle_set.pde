class ParticleSet {
    ArrayList<Particle> particles;
    boolean dead;

    ParticleSet(int n, int lifetime, color c) {
        dead = false;
        particles = new ArrayList<Particle>();
        for (int i = 0; i < n; i++) {
            float px = random(-RANGE, width + RANGE);
            float py = random(-RANGE, height + RANGE);
            particles.add(new Particle(px, py, lifetime, c));
        }
    }

    void update() {
        this.dead = true;
        for (int i = 0; i < this.particles.size(); i++) {
            Particle p = particles.get(i);
            if (p.dead)
                continue;
            else
                this.dead = false;
            p.update();
        }
    }

    void draw() {
        for (int i = 0; i < this.particles.size(); i++) {
            Particle p = particles.get(i);
            if (p.dead) continue;
            this.step(p);
        }
    }

    void step(Particle p) {
    }
};
