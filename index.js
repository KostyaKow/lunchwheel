
var d = document;
function getById(id) {
   return document.getElementById(id);
}
function append(parentEl, childEl) {
   parentEl.appendChild(childEl);
}
function setAttr(el, attr, value) {
   el.setAttributeNS(null, attr, value);
}
function makeEl(type, attrs) {
   var xmlns = "http://www.w3.org/2000/svg";
   var el = d.createElementNS(xmlns, type);
   
   if (attrs != undefined) {
      for (var key in attrs)
         setAttr(el, key, attrs[key]);         
   }

   return el;
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function deg(a, b, c, d) {
   return polarToCartesian(a, b, c, d);
}

function makeLine(x1, y1, x2, y2) {
   var attrs = {
      'x1': x1, 'y1': y1,
      'x2': x2, 'y2': y2,
      'style': 'stroke:rgb(250, 0, 0); stroke-width:2'
   };
   var line = makeEl('line', attrs);
   return line;
}

function makeLineDegree(container, startX, startY, length, angle) {
   var end = polarToCartesian(startX, startY, length, angle);
   var line = makeLine(startX, startY, end.x, end.y);
   append(container, line);
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var l1 = deg(x, y, radius, startAngle);

    var d = [
      "M", start.x, start.y, 
      "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
      "L", x, y,
      "L", start.x, start.y
    ].join(" ");

    return d;       
}
function makeArc(container, x, y, radius, startAngle, endAngle, color) {
   var attrs = {
      'd':           describeArc(x, y, radius, startAngle, endAngle),
      'fill':        color,
      'stroke':      'black',
      'stroke-width':2
   };
   var arc = makeEl('path', attrs);

   append(container, arc);
   return arc;
}

function makeText(container, text, x, y, fill, transform) {
   var textEl = makeEl('text', {'x':x, 'y':y, 'fill':fill, 'transform':transform});
   textEl.textContent = text;
   append(container, textEl);
   return textEl;
}

/*function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(" ");

    return d;       
}*/

var app = angular.module('foodwheel', []);
app.controller('foodwheel', function($scope) {  
   $scope.places = {
      'Artisan'      : 30,
      'Subway'       : 20,
      'Jimmy Jones'  : 60,
      'Asian'        : 50,
      'Irish'        : 30,
      'Soylent'      : 50,

      'Irishsd'      : 10,
      'Soylentadf'   : 30,
      'Irixh'        : 30,
      'Soyfent'      : 50,
   }

   $scope.remove = (name) => {
      delete $scope.places[name];
   }

   $scope.$watch('places', function(newVal, oldVal) {
      makePie($scope.places);
   }, true);

   $scope.keyPress = (event) =>{
      if (event.keyCode == 13)
         alert('hi');
   }
});



