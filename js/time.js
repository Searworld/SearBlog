

function newstime() {
      var getDays = function (from) {
        var from = new Date(from);
        var now = new Date();
        return Math.floor((now.getTime() - from.getTime()) / (24 * 60 * 60 * 1000));
      }
      var today = new Date();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var dt = '第' + getDays("2016-07-25") + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒';
      document.getElementById('time').innerHTML = dt;
      setTimeout('newstime()', 1000)
    }
    window.onload = newstime;

/*
function newtime(){
	var getDays=function(from){
		var from=new Date(from);//获取2019-12月25日并且赋值给from
		var now=new Date();//获取当前时间
		return Math.floor((from.getTime()-now.getTime())/(24*60*60*1000));
		}//math.floor是内置对象中的一个要点（1不管小数多少进一  2、 四舍五入 3不管小数多少都去掉
	//24*60*60*1000是转化为秒统一单位方便计算，（获取的时间-当前的时间）/秒=距离的时间


	var today=new Date();//获取当前时间
	var hours=24-today.getHours();//获取当前的小时
	var minutes=60-today.getMinutes();//获取当前分钟
	var seconds=60-today.getSeconds();//获取当前秒数
	if (minutes<10){
		minutes="0"+minutes;
	}//和下面的是一样的，在分钟不足10分钟的时候前面加上02，03等分钟
	if (seconds<10){
		seconds="0"+seconds
	}
	var likai = '距离2019只有'+getDays("2019-12-25") + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒';

	document.getElementById('time').innerHTML=likai;//找ID叫 content的html节点 的内容    然后把dt赋值给他

	setTimeout('newtime()',1000)//下面的setTimeuot是 每一秒执行下newstime这个函数，让时间走

}	
	window.onload=newtime
*/



