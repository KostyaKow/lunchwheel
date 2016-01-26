inspiration
   https://blog.bramp.net/post/2011/07/27/html5-canvas-lunch-wheel/

good svg path tutorial
   https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
   https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
   https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
   http://www.svgbasics.com/arcs.html

sprinf lib
   https://github.com/alexei/sprintf.js

getElementById('svgId').contentDocument
   you can append stuff to here


svg
   circle
      attrs
         cx             = x of circle
         cy             = y of circle
         r              = radius
         stroke         = outline (green/red/blah)
         stroke-width   = px size of outline (4)
         fill           = inside color (yellow)
   polygon
      attrs
         points         = "200,10 250,190 160,210"
      style
         fill:lime; stroke:purple; stroke-width:1
   line
      attrs
         x1, y1, x2, y2
   path
      d
         M/m   = move to
         L x y = line 
         H x   = horizontal
         V y   = vertical
         A ... = arc
arc notes
   A radius-x,radius-y rotation-x,large-arc-f,sweep-flag x y
      sweep-flag flip


