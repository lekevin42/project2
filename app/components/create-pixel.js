import Ember from 'ember';


export default Ember.Component.extend({
  stage: Ember.inject.service('canvas'),

  didInsertElement(){
    this.$().attr('tabindex', 0);
    this.$().focus();
  },

  keyPress(event){
    console.log(event.keyCode);
    let s = this.get('stage');
    let index = event.keyCode - 49;

    if ((index >= 0) && (index < s.getCanvasColorsLength())){
      s.setColor(index);
    }
  },

  mouseDown(event) {
    let s = this.get('stage');
    console.log(event.target);
    console.log(s.getX());
    console.log(s.getY());
    var drawingShape = new createjs.Shape();
    var color = s.getColor();
    drawingShape.graphics.clear().beginFill(color).drawRect(s.getX(), s.getY(), 25, 25);

      //  drawingShape.x = Math.floor(p.x);
      //  drawingShape.y = Math.floor(p.y);
    //  drawingShape.visible = true;
    //pixel.beginStroke("red").beginFill("blue").drawCircle(event.pageX, event.pageY, 30);
    //pixel.graphics.beginFill("deepSkyBlue").drawCircle(event.pageX, event.pageY, 50);
    this.get('stage').add(drawingShape);
  },

  mouseMove(event){
    let s = this.get('stage');
    console.log('moving');
  }
});
