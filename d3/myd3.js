//<circle cx="300" cy="300" r="120" stroke="black" stroke-width="3" fill="#ffffff" />
//<line x1="300" y1="300" x2="300" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
//<line x1="300" y1="300" x2="360" y2="300" style="stroke:rgb(255,0,0);stroke-width:2" />
//<polygon points="300,180 320,140 280,140" style="fill:lime;stroke:purple;stroke-width:1" />
//<ellipse cx="445" cy="300" rx="24" ry="35" style="fill:yellow;stroke:purple;stroke-width:2" />
//＃3333ff

var svg = d3.selectAll("svg");
var c = svg.append('circle');
var l1 = svg.append('line');
var l2 = svg.append('line');
var l3 = svg.append('line');
var p = svg.append('polygon');
var e = svg.append('ellipse');
var cx = 300;
var cy = 300;
var degree_l1 = 90;
var degree_l2 = 90;
var degree_l3 = 90;

c.attr('cx',cx).attr('cy',cy).attr('r',120).attr('stroke','black').attr('stroke-width',3).attr('fill','#ffffff');
l1.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-100).attr('stroke-width',2).attr('stroke','rgb(153, 204, 255)').attr('id',1);
l2.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-85).attr('stroke-width',4).attr('stroke','rgb(255,0,0)').attr('id',2);
l3.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-70).attr('stroke-width',6).attr('stroke','rgb(0,153,153)').attr('id',3);
p.attr('points','300,180 320,140 280,140').attr('fill','lime').attr('stroke-width',1).attr('stroke','purple');
e.attr('cx',445).attr('cy',cy).attr('rx',24).attr('ry',35).attr('fill','yellow').attr('stroke-width',2).attr('stroke','purple');

function twelve(){
    l1.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-100);
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-85);
    l3.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-70);

}
function three(){
    l1.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-100);
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-85);
    l3.attr('x1',cx).attr('y1',cy).attr('x2',cx+70).attr('y2',cy);

}
function six(){
    l1.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-100);
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-85);
    l3.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy+70);

}
function nine(){
    l1.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-100);
    l2.attr('x1',cx).attr('y1',cy).attr('x2',cx).attr('y2',cy-85);
    l3.attr('x1',cx).attr('y1',cy).attr('x2',cx-70).attr('y2',cy);

}
function hide(){
    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    c.attr('fill','#3333ff');
}
function show(){
    $('#1').show();
    $('#2').show();
    $('#3').show();
    c.attr('fill','#ffffff');
}

  
setInterval(function(){
        Second();
        Minute();
        Hour();
    }, 1000);

   
function Second(){
    degree_l1 = degree_l1 - 6;
   var radians_l1 = degree_l1*(Math.PI / 180);
   new_l1_x2 = Math.cos(radians_l1)*100;
   new_l1_x2 +=cx;
   new_l1_y2 = Math.sin(radians_l1)*100;
   new_l1_y2 = cy-new_l1_y2;
   l1.attr('x2',new_l1_x2).attr('y2',new_l1_y2);

}

function Minute(){
    degree_l2 = degree_l2 - 0.1;
   var radians_l2 = degree_l2*(Math.PI / 180);
   new_l2_x2 = Math.cos(radians_l2)*85;
   new_l2_x2 +=cx;
   new_l2_y2 = Math.sin(radians_l2)*85;
   new_l2_y2 = cy-new_l2_y2;
   l2.attr('x2',new_l2_x2).attr('y2',new_l2_y2);

}
function Hour(){
    degree_l3 = degree_l3 - 0.1/60;
   var radians_l3 = degree_l3*(Math.PI / 180);
   new_l3_x2 = Math.cos(radians_l3)*70;
   new_l3_x2 +=cx;
   new_l3_y2 = Math.sin(radians_l3)*70;
   new_l3_y2 = cy-new_l3_y2;
   l3.attr('x2',new_l3_x2).attr('y2',new_l3_y2);

}


