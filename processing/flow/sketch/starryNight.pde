// https://jonesevodemo.files.wordpress.com/2015/02/starrynight.png

void starryNight(){

    background(23,24,40);
    
    // blue 1
    pset_begin_layer();
    pset_add(new ParticleSet(2000, 75,color(24,56,100)) {
        public void step(Particle p) {
            strokeWeight(8);
            stroke(p.pcolor,60);
            line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    pset_end_layer();
    
    // blue2
    pset_begin_layer();
    pset_add(new ParticleSet(1000, 100,color(51,110,167)) {
        public void step(Particle p) {
            strokeWeight(5);
            stroke(p.pcolor,20);
            line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    pset_end_layer();

    // blue3
    pset_begin_layer();
    pset_add(new ParticleSet(3000, 25,color(116,181,212)) {
        public void step(Particle p) {
            strokeWeight(3);
            stroke(p.pcolor,10);
            line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    pset_end_layer();

     // yellow
    pset_begin_layer();
    pset_add(new ParticleSet(500, 20,color(230,216,104)) {
        public void step(Particle p) {
            strokeWeight(5);
            stroke(p.pcolor,15);
            line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    pset_end_layer();
    
    // orange
    pset_begin_layer();
    pset_add(new ParticleSet(100, 10,color(219,144,28)) {
        public void step(Particle p) {
            strokeWeight(8);
            stroke(p.pcolor,15);
            line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    pset_end_layer();

    // thin white
    pset_begin_layer();
    pset_add(new ParticleSet(1000, 70,color(237,247,211)) {
        public void step(Particle p) {
            strokeWeight(4);
            stroke(p.pcolor,15);
            line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    pset_end_layer();
    
    // Fat white
    pset_begin_layer();
    pset_add(new ParticleSet(100, 10,color(237,247,211)) {
        public void step(Particle p) {
            strokeWeight(8);
            stroke(p.pcolor,15);
            line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    pset_end_layer();

}
