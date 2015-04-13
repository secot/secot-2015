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

	var g = function(){
		var l = document.getElementsByClassName("mini-cv");

		for(var i = 0; i < l.length; i++){

			if (l[i].innerHTML.length > 400) {
				n = document.createElement('span');
				n.setAttribute("class","expand-mini-cv");
				n.setAttribute("data-ref",i);
				n.setAttribute("data-title",l[i].previousSibling.previousSibling.innerHTML);
				n.setAttribute("data-text",l[i].innerHTML);
				n.innerHTML = "ver tudo"

				l[i].innerHTML = l[i].innerHTML.substring(0, 400);
				l[i].innerHTML += "... ";

				n.setAttribute("onclick","guestModal(this)");

				l[i].appendChild(n);
			};
		}
	};g()
};

function guestModal(e)
{
	var m = document.getElementById("modal");
	var tit = m.childNodes[1].childNodes[1],
			tex = m.childNodes[1].childNodes[3];

	tit.innerHTML = e.getAttribute("data-title");
	tex.innerHTML = e.getAttribute("data-text");

	m.style.display = "block";
	document.body.style.overflow="hidden";
};

function closeModal()
{
	document.getElementById("modal").style.display = "none";
	document.body.style.overflow="auto";

}