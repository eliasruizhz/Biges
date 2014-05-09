(function ($) {
	var def = {
		tl: "Hola",
		autor: "",
		desc: ""
	};
	$.fn.bigCSS = function (a,b){
		this.css(a,b);
	};
	$.fn.ds = function (a,b,c){
		def.tl = a;
		def.autor = b;
		def.desc = c;
		$('title').text(def.tl);
		$('#description').attr("content",def.desc);
		$('#author').attr("content",def.autor);
	};
	$.fn.nuevo = function (n,id,name,clase,contenido,strap){
		var a = $(this).html();
		if (n == "div"||"span"||"nav"||"header"||"footer"||"h1"||"h2"||"h3"||"h4"||"p") {
		$(this).html(a+'<'+n+' id="'+id+'" name="'+name+'" class="test '+clase+'">'+contenido+'</'+n+'>');
		}else if(n == "hr"||"br"){
		$(this).html(a+'<'+n+' id="'+id+'" name="'+name+'" class="test '+clase+'"/>');
		}		
if(strap > 1 ){
var $w = $(this).width();

$('#'+id).bigCSS("display","inline-block");
$('#'+id).bigCSS("vertical-align","top");
$('#'+id).bigCSS("width",([$w/strap]-[strap*5])+"px");
}
	};

}(window.jQuery));
