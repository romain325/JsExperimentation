void test3(color[] palette){
    // Color pallette from https://coolors.co/palettes/trending
  
    color[] values = new color[]{
        color(16,0,43),
        color(36,0,70),
        color(60,9,108),
        color(90,24,154),
        color(123,44,191),
        color(157,78,237),
        color(199,125,255),
        color(224,170,255)
    };

    if(palette != null)
        values = palette;

    background(0);

    for(color value : values){
      pset_begin_layer();
      pset_add(new ParticleSet(500, 100,value) {
          public void step(Particle p) {
              strokeWeight((255 - red(p.pcolor))/150);
              stroke(p.pcolor,75);
              line(p.prev_x, p.prev_y, p.x, p.y);
          }
      });
      
      System.out.println((255 - red(value))/10);
      pset_end_layer();
    }
}
