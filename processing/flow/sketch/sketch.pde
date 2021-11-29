void keyPressed() {
  if (key == 's')
    saveFrame();
}

void setup() {
  size(720, 720);
  init(true);
  //save_pdf("2");
  test3(null);
}

void draw() {
  draw_and_update(1);
}
