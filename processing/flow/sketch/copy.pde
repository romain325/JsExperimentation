import processing.pdf.*;
import gifAnimation.*;

float noise_scale = 0.01;
float force_scale = 1;
int RANGE = 100;

ArrayList<ParticleSetGroup> psets;

ParticleSetGroup curr;
void pset_begin_layer() { 
  curr = new ParticleSetGroup();
}
void pset_add(ParticleSet ps) { 
  curr.add(ps);
}
void pset_end_layer() { 
  add_group(curr);
}
void add_group(ParticleSetGroup psg) { 
  psets.add(psg);
}


boolean seamless;
GifMaker gifExport;

void init(boolean is_seamless) {
  smooth();
  noiseSeed(millis());
  background(255);
  psets = new ArrayList<ParticleSetGroup>();
  seamless = is_seamless;
  gifExport = new GifMaker(this, "out.gif");
  gifExport.setRepeat(0);  // make it an "endless" animation
  gifExport.setSize(500, 500);
}

void save_pdf(String name) {
  beginRecord(PDF, "artwork-" + name + ".pdf");
}

PVector force_from_angle(float theta) {
  return new PVector(cos(theta) * force_scale, sin(theta) * force_scale);
}

PVector force_at(float x, float y) {
  float theta = noise(x * noise_scale, y * noise_scale) * TWO_PI;
  return force_from_angle(theta);
}

void draw_force(PVector v, float x, float y, float len) {
  fill(0, 50);
  stroke(0, 50);
  line(x - len * v.x/2, 
    y - len * v.y/2, 
    x + len * v.x/2, 
    y + len * v.y/2);
  ellipse(x + len * v.x/2, 
    y + len * v.y/2, 
    3, 3);
}

void draw_force_field() {
  for (int i = 5; i < width; i+=10) {
    for (int j = 5; j < height; j+=10) {
      PVector v = force_at(i, j);
      draw_force(v, i, j, 10);
    }
  }
}

int frame = 0;
int iteration = 0;
boolean make_gif = true;
void draw_and_update(int skip) {
  frame++;
  if (iteration < psets.size()) {
    boolean dead = true;
    for (int i = 0; i < psets.get(iteration).group.size(); i++) {
      psets.get(iteration).group.get(i).update();
      psets.get(iteration).group.get(i).draw();
      if (psets.get(iteration).group.get(i).dead == false)
        dead = false;
    }

    // Move to next group of particle sets if this one is dead
    if (dead)
      iteration++;
    
    if (make_gif && frame % skip == 0) {
      gifExport.setDelay(1);
      gifExport.addFrame();
    }
  } else {
    endRecord();
    if (make_gif) {
        gifExport.setDelay(7000);
        gifExport.addFrame();
        gifExport.finish();
    }
    println("Finished");
    noLoop();
  }
}
