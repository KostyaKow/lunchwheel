
var d = document;
function getById(id) {
   return document.getElementById(id);
}
function append(parentEl, childEl) {
   parentEl.appendChild(childEl);
}
function makeEl(type) {
   var xmlns = "http://www.w3.org/2000/svg";
   var el = d.createElementNS(xmlns, type);
   //svgEl.appendChild(el);
   return el;
}
function setAttr(el, attr, value) {
   el.setAttributeNS(null, attr, value);
}

