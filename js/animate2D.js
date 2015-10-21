define(["paper"], function(paper){
    var animate2D = {
        canvas: undefined
    };

    animate2D.onFrame = function(event) {
        //called up to 60 times/second
        animate2D.helloWorld.rotate(0.5);
        animate2D.helloWorld.fillColor.hue += 1;
    };

    return animate2D;
});