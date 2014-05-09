$(window).ready(function(){
function body () {
	$('body').html("");
	//titulo, Autor, descripcion
	$('body').ds('Biges','Elias Ruiz Hz', 'Una libreria que permite crear un sitio con puro JS');
	//n,id,name,clase,contenido,strap
	var n = "", id = "" , name = "" , clase = "" , contenido = "" , strap = 1 ; 
	var theme = "theme_blue";
	//$('body').nuevo(n,id,name,clase,contenido,strap);
	$('body').nuevo("header","tl","encabezado","cabeza",contenido,1);
		$('#tl').nuevo("h1","title","ver uno",theme,"Biges",2);
		$('#tl').nuevo("spam","slogan","dos",clase,contenido,2);
			$("#slogan").nuevo("div","text",name,"sloganTEXT","El poder de la creación",2);
			$('#slogan').nuevo("div","fecha",name,clase,"Hoy es: ",2);
	$('body').nuevo("article","cuerpo",clase,"cp",contenido,1);
		$('#cuerpo').nuevo("div","uno",name,clase,contenido,3);
			$('#uno').nuevo("h3","JQ",name,theme,"jQuey",1);
			var jqtext = "Hola";
			$('#uno').nuevo("p",id,name,theme,jqtext,strap);
		$('#cuerpo').nuevo("div","dos",name,clase,contenido,3);
			$('#dos').nuevo("h3","BigJS",name,theme,"BigJS",1);
		$('#cuerpo').nuevo("div","tre",name,clase,contenido,3);
			$('#tre').nuevo("h3","BigCSS",name,theme,"BigCSS",1);

blup();		
}	
function fin (argument) {
	$('body').html("");
}
function blup () {
	setTimeout(body,1000);
}
function ini (argument) {
	if(body("load")){
		blup();
	}else{
		fin();
	};
}
ini();
});
