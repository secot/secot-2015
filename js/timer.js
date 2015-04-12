window.onload = function(){
	var e = function(){
		var o = new Date("5/11/2015"),
				t = new Date,
				n = o.getTime()-t.getTime(),
				a = {d:0,h:0,m:0,s:0};
				n>0&&(a.d=Math.floor(n/864e5),
				n-=864e5*a.d,
				a.h=Math.floor(n/36e5),
				n-=36e5*a.h,
				a.m=Math.floor(n/6e4),
				n-=6e4*a.m,a.s=Math.floor(n/1e3));

		for(var r in a)document.getElementById(r).innerHTML = a[r];setTimeout(e,1e3)
	};e()
};