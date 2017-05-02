import Ember from 'ember';

export default Ember.Service.extend({
  CANVAS_ELEMENT_ID: 'pixelCanvas',
  CANVAS_WIDTH: 50,
  CANVAS_HEIGHT: 50,
  CANVAS_INITIAL_ZOOM: 20,
  CANVAS_MIN_ZOOM : 10,
  CANVAS_MAX_ZOOM : 40,
  CANVAS_COLORS : ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],

  stage: null,                                  // EaselJS stage
  pixels: null,                                 // EaselJS container to store all the pixels
  zoom : this.CANVAS_INITIAL_ZOOM,             // zoom level

  pixelMap : new Array(this.CANVAS_WIDTH),     // map of pixels


  isDrawing : false,                      // whether a new pixel to draw is being selected
  drawingShape : new createjs.Shape(),    // shape to render pixel selector
  drawColor : 'red',                      // color to render new pixel being drawn

  init() {
    this._super(...arguments);
    this.set('stage', new createjs.Stage(this.CANVAS_ELEMENT_ID));
    console.log('Setting up pixelMap');
    for (var i = 0; i < this.CANVAS_WIDTH; i++){
      this.pixelMap[i] = Array(this.CANVAS_HEIGHT);
    }
  },

  add(pixel){
    console.log('Adding a pixel and update');
    console.log(pixel);
    this.stage.addChild(pixel);
    this.stage.update();
  },

  getX(){
    return this.stage.mouseX;
  },

  getY(){
    return this.stage.mouseY;
  },

  isDrawing(){
    return this.isDrawing;
  },

  getCanvasColorsLength(){
    return this.CANVAS_COLORS.length;
  },

  getColor(){
    return this.drawColor;
  },

  setColor(index){
    this.drawColor = this.CANVAS_COLORS[index];
  }
});
