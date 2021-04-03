void test2(){
    background(0);
    int impact = 250;
    
    while(impact > 0){
      pset_begin_layer();
      pset_add(new ParticleSet(10000, 100, color(impact)) {
          public void step(Particle p) {
              strokeWeight(2);
              stroke(150,5);
              line(p.prev_x, p.prev_y, p.x, p.y);
          }
      });
      pset_end_layer();
      impact -= 50;
      System.out.println(impact);
    }
}

void test2Inverted(){
    background(255);
    int impact = 0;
    
    while(impact < 250){
      pset_begin_layer();
      pset_add(new ParticleSet(10000, 100, color(impact)) {
          public void step(Particle p) {
              strokeWeight(2);
              stroke(150,5);
              line(p.prev_x, p.prev_y, p.x, p.y);
          }
      });
      pset_end_layer();
      impact += 50;
      System.out.println(impact);
    }
}
