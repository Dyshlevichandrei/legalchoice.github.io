setInterval(function(){date=new Date,h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),h=h<10?"0"+h:h,m=m<10?"0"+m:m,s=s<10?"0"+s:s,document.getElementById("time").innerHTML=h+":"+m+":"+s});var d=new Date,day=new Array("Воскресенье ","Понедельник ","Вторник ","Среда ","Четверг ","Пятница ","Суббота "),month=new Array("января ","февраля ","марта ","апреля ","мая ","июня ","июля ","августа ","сентября ","октября ","ноября ","декабря ");document.write(day[d.getDay()]+" "+d.getDate()+" "+month[d.getMonth()]+" "+d.getFullYear()+" ");