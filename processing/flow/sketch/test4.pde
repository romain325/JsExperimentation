void test4(){
 
    background(0);

    pset_begin_layer();
    pset_add(new ParticleSet(1000, 100,color(220,0,0)) {
        public void step(Particle p) {
            strokeWeight(10);
            stroke(p.pcolor, 2);
            strokeCap(PROJECT);
            line(p.prev_x, p.prev_y, p.x, p.y);
            //strokeCap(ROUND);
            //line(p.prev_x, p.prev_y, p.x, p.y);
        }
    });
    
    pset_end_layer();
}
