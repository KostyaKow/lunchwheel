
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
function mergeDict(a, b) {
   var c = {};
   for (var key in a)
      c[key] = a[key];
   for (var key in b)
      c[key] = b[key];
   return c;
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

function makeArc(d) {

   var attrs = {
      'd':           d,
      'fill':        'yellow',
      'stroke':      'blue',
      'strokie-width':5
   };
   return internalArc(attrs, d['moveX'], d['moveY'],
                     d['radiusX'], d['radiusY'], d['rotX'],
                     d['largeArc'], d['sweepFlag'], d['x'], d['y']);
}

function internalArc(attrs, moveX, moveY, radiusX, radiusY, rotX, largeArc, sweepFlag, x, y) {
   var d = sprintf('M%i,%i v-150 a%i,%i %i %i,%i %i,%i z', moveX, moveY, radiusX, radiusY, rotX, largeArc, sweepFlag, x, y);
   attrs['d'] = d;
   return makeEl('path', attrs);
}




