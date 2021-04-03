class Particle {
    float prev_x, prev_y, x, y;
    color pcolor;
    int lifetime;
    boolean dead = false;

    Particle(float x, float y, int lifetime, color c) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.lifetime = lifetime;
        this.pcolor = c;
    }

      void update() {
        PVector force = force_at(this.x, this.y);

        this.lifetime--;
        if (this.lifetime <= 0)
        this.dead = true;

        if (!seamless) {
            if (this.x >= width + width/2 ||
                this.x < -width/2 ||
                this.y >= height + height/2 ||
                this.y < -height/2)
                this.dead = true;
            } else {
            if (this.x >= width) {
                this.x -= width;
                this.prev_x -= width;
            } else if (this.x < 0) {
                this.x += width;
                this.prev_x += width;
            }
            
            if (this.y >= height) {
                this.y -= height;
                this.prev_y -= height;
            } else if (this.y < 0) {
                this.y += height;
                this.prev_y += height;
            }
        }

        this.prev_x = x;
        this.prev_y = y;

        this.x += force.x;
        this.y += force.y;
    }
}
