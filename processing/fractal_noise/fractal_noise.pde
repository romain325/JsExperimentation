void setup(){
  size(500,500);
  stroke(255);
  noFill();
  noiseDetail(5);
}
 
void draw(){
  background(0);
  float scale = 0.01;
 
  loadPixels();
  for(int x = 0; x < width; x++){
    for(int y = 0; y < height; y++){
      float col = 255 * noise(scale * x , scale * y, 10 * scale * frameCount);
      pixels[x + width * y] = color(col);
    }
  }
  updatePixels();
 
  if(frameCount<=50){
    saveFrame("render_fractal/fractal_noise###.png");
  }
}
