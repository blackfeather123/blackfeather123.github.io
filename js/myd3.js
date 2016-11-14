//<circle cx="300" cy="300" r="120" stroke="black" stroke-width="3" fill="#ffffff" />
//<line x1="300" y1="300" x2="300" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
//<line x1="300" y1="300" x2="360" y2="300" style="stroke:rgb(255,0,0);stroke-width:2" />
//<polygon points="300,180 320,140 280,140" style="fill:lime;stroke:purple;stroke-width:1" />
//<ellipse cx="445" cy="300" rx="24" ry="35" style="fill:yellow;stroke:purple;stroke-width:2" />

var svg = d3.selectAll("svg");
var c = svg.append('circle');
var l1 = svg.append('line');
var l2 = svg.append('line');
var p = svg.append('polygon');
var e = svg.append('ellipse');
var cx = 300;
var cy = 300;
c.attr('cx',cx).attr('cy',cy).attr('r',120).attr('stroke','black').attr('stroke-width',3).attr('fill','#ffffff');
l1.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-100).attr('stroke-width',2).attr('stroke','rgb(255,0,0)');
l2.attr('x1',cx).attr('y1',cy).attr('x2',cx+60).attr('y2',cy).attr('stroke-width',5).attr('stroke','rgb(255,0,0)');
p.attr('points','300,180 320,140 280,140').attr('fill','lime').attr('stroke-width',1).attr('stroke','purple');
e.attr('cx',445).attr('cy',cy).attr('rx',24).attr('ry',35).attr('fill','yellow').attr('stroke-width',2).attr('stroke','purple');

function twelve(){
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-60);

}
function three(){
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx+60).attr('y2',cy);

}
function six(){
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy+60);

}
function nine(){
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx-60).attr('y2',cy);

}