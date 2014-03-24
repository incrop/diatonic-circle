require(['config'], function(c) {


    var paper = Raphael('container', c.containerSize, c.containerSize);

    var circle = paper.circle(c.containerSize / 2, c.containerSize / 2, c.outerRadius);

    circle.attr('fill', '#aaa');

    circle.attr('stroke', '#000');


})();

