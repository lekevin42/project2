import Ember from 'ember';

export default Ember.Component.extend({
  click: function (event) {
    console.log(event.target);
    console.log(event.pageX);
    console.log(event.pageY);
    var pixel = new createjs.Shape();
    //pixel.beginStroke("red").beginFill("blue").drawCircle(event.pageX, event.pageY, 30);
    pixel.graphics.beginFill("deepSkyBlue").drawCircle(event.pageX, event.pageY, 50);


  }

});
