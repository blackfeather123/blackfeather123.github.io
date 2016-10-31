var clock = null; //定时器操作句柄
var state = 0; //0初始化，1进行中，2暂停，3失败
var speed = 2; //初始化方块下落速度

//http://www.w3schools.com/jsref/dom_obj_document.asp    语法网址
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

/*
创建div,className是其类名
*/
function cdiv(className) {
    var div = document.createElement('div');   //设div为产生一个指定的html元素div                 
    div.className = className;                 //设置新产生的div的class为“className”  http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classname
    return div;
}
/*
创建div.row
*/
function crow() {
    var row = cdiv('row');                       //设row为产生一个div,其class为“row”
    var classes = createSn();                    //设classes为creatsn()运行完后所产生的数组，即arr
    var con = $('container');                    //找出id为"container"的

    for (var i = 0; i < 4; i++) {                 //在class为row的div中产生4个将arr数组中的元素（即cell或cell black)当做class的div 
        row.appendChild(cdiv(classes[i]));         //将cdiv(classes[i])新增到row中    http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
    }

    if (con.firstChild == null) {
        con.appendChild(row); //刚开始添加一行       将class为row的div添加到id为container的div中
    }
    else {
<<<<<<< HEAD
        con.insertBefore(row, con.firstChild);     //以后从下往上添加行
=======
        con.insertBefore(row, con.firstChild);         //以后从上往下添加行
>>>>>>> origin/master
    }
}
/*
按id获取对象
*/
function $(id) {
    return document.getElementById(id)        //找出id为“id”的那一行
}
/*
返回一个数组，随机其中1个单元值为‘cell black’，其他3个为cell
*/
function createSn() {
    var arr = ['cell', 'cell', 'cell', 'cell'];
    var i = Math.floor(Math.random() * 4);   //Math.floor为向下取最接近的整数，Math.random() * 4为返回0和4之间的随机数
    arr[i] = 'cell black';                   //使arr数组其中一个变为cell black
    return arr;
}
/*
初始化，自动添加row
*/
function init() {                        
    for (var i = 0; i < 4; i++) {           //在id为“container”中添加4个class为row的div
        crow();                        
    }
    //委托事件--点击
    $('main').onclick = function (ev) {       //点击游戏内部格子时运行判断功能
        judge(ev);
    }
}

function judge(ev)//判断输赢，加分
{
    if (state == 3) {              //设置游戏结束后无法继续点击黑块
        alert('请重新开始游戏');
        return;
    }
    if (ev.target.className.indexOf('black') == -1) {         //indexOf返回一个字符串指定的值中第一次出现的位置
<<<<<<< HEAD
        fail();                                               //点击到白块游戏结束
    }
    else {
        ev.target.className = 'cell';         //点击的为白块
        ev.target.parentNode.pass = 1;       //parentNode为返回指定节点的父节点（一个将指定度元素包含进去的元素）作为一个Node对象，  http://www.w3schools.com/jsref/prop_node_parentnode.asp
        score();                             //设置点击黑块得分
=======
        fail();                                           
    }
    else {
        ev.target.className = 'cell';
        ev.target.parentNode.pass = 1;       //parentNode为返回指定节点的父节点（一个将指定度元素包含进去的元素）作为一个Node对象  http://www.w3schools.com/jsref/prop_node_parentnode.asp
        score();
>>>>>>> origin/master
    }
}
/*
动画
*/
function move() {
    var con = $('container');
<<<<<<< HEAD
    var top = parseInt(window.getComputedStyle(con, null)['top']);   //window.getComputedStyle为获取指定元素的style内容，则得到top的值  http://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
    if (speed + top > 0)
    { top = 0; }           //top走过头，直接top=0
    else {
        top += speed;                 //调节每次下降的像素 黑块按速度下降
    }
    con.style.top = top + 'px';       //设置id为container的div的style为top:top(top为变化数字）px

    if (top == 0) {
        crow();                     
        con.style.top = '-100px';      //设置con的style为top: -100px
        drow();                        //
    }
   else  if (top == (-100 + speed)) {
        var rows = con.childNodes;     //childNodes获取con的子节点的集合
=======
    var top = parseInt(window.getComputedStyle(con, null)['top']);   //window.getComputedStyle为获取指定元素的style内容  http://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
    if (speed + top > 0)
    { top = 0; } //top走过头，直接top=0
    else {
        top += speed;                 //调节每次下降的像素 黑块按速度下降
    }
    con.style.top = top + 'px';       //设置id为container的div的style为top:top(top为宜变化数字）px

    if (top == 0) {
        crow();
        con.style.top = '-100px';      //设置con的style为top: -100px
        drow();
    }
    else if (top == (-100 + speed)) {
        var rows = con.childNodes;
>>>>>>> origin/master
        if ((rows.length == 5) && (rows[rows.length - 1].pass !== 1)) {
            fail();          //黑块降到底游戏结束
        }
    }
}
/*
失败，结束
*/
function fail() {
    clearInterval(clock);   //停止setInterval
    state = 3;
    alert('游戏结束');     //alert为显示一个对话框
}
/*
start() 启动
*/
function start() {
    clock = setInterval('move()', 30);    //每30毫秒运行并显示move程序   http://www.w3schools.com/jsref/met_win_setinterval.asp
}
/*
删除最后一行
*/
function drow() {
    var con = $('container');
    if (con.childNodes.length == 6) {       //length为Con中有多少个选定的HTML元素    http://www.w3schools.com/jsref/prop_nodelist_length.asp
        con.removeChild(con.lastChild);    //lastChild为得到一个指定元素的最后一个子节点的HTML内容   http://www.w3schools.com/jsref/prop_node_lastchild.asp
    }                                      //removeChild为删除选定的内容      http://www.w3schools.com/jsref/met_node_removechild.asp
}
/*
计分
*/ 
function score() {            //innerHTML为读取或元素的HTML内容                  http://www.w3schools.com/jsref/prop_html_innerhtml.asp
    var newscore = parseInt($('score').innerHTML) + 1;  //在原分数基础上分数加1   parseInt语法：输出里面的数字   http://www.w3schools.com/jsref/jsref_parseint.asp  
    $('score').innerHTML = newscore;    //将新的分数替换旧的分数     
    if (newscore % 15 == 0) {       //总分每增加15分就运行加速代码，将速度+2
        jiasu();
    }
}
/*
加速函数
*/
function jiasu() {
    speed += 2;
<<<<<<< HEAD
     if (speed == 20)            //速度到20时显示达到最大速度
    { alert('已至最大速度'); }
}
function playgame(){   
    $('score').innerHTML = 0;  
    state = 0;                 
    speed = 2;                 
      start();            //开始运行程序
=======
     if (speed == 20)
    { alert('已至最大速度'); }
}
function playgame(){
    $('score').innerHTML = 0;
    state = 0;
    speed = 2;
      start();         //开始运行程序
>>>>>>> origin/master
}


    

init();     //产生row
<<<<<<< HEAD

=======
    //开始运行程序
>>>>>>> origin/master
