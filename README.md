#Biges

Framework de JavaScript para sitios rápidos y eficaces. 

##Instalación

El archivo principal es `/index.html`.

Es el encargado de procesar `/pages/view.js` `/biges/bigCSS.js` 

Esta libreria tambien depende de `JQUERY 9/10`

##API - BigJS

  * Usted podra pogramar jerárquicamente su sitio web.

```js
//inicializamos el documento
$('body').html("");
	//titulo, Autor, descripcion
	$('body').ds('Biges','Elias Ruiz Hz', 'Una libreria que permite crear un sitio con puro JS');
	//Inicializamos las variables de base.
	//n,id,name,clase,contenido,strap
	var n = "", id = "" , name = "" , clase = "" , contenido = "" , strap = 1 ; 
	//n = TAG HTML A OCUPAR
	//id = ATRIBUTO ID DEL TAG ELEGIDO
	//name = NOMBRE DEL TAG ELEGIDO
	//class = CLASE CSS QUE SE LE DARA AL TAG ELEGIDO
	//contenido = SI SE LLEGARA A OCUPAR / SI NO SOLO INDICAR LA VARIABLE BACIA
	//strap = LAS COLUMNAS EN LA QUE SI DIVIDIRA EL "width"
	//El documento lo empezaremos desde Body
	//$('body').nuevo(n,id,name,clase,contenido,strap);
	$('body').nuevo("header","tl","encabezado","cabeza",contenido,1);
	//  ↑              ↑      ↑        ↑          ↑         ↑     ↑
	//Lugar           QUE    ID       NAME       CLASS CONTENIDO COLUMNAS
	$('#tl').nuevo("h1","title","ver uno",clase,"BigCSS",2);
		$('#tl').nuevo("spam","slogan","dos",clase,"Mi libreria",2);
	$('body').nuevo("article","cuerpo",clase,"cp",contenido,1);
		$('#cuerpo').nuevo("div","uno",name,"dos","UNO",3);
		$('#cuerpo').nuevo("div","dos",name,"dos","DOS",3);
		$('#cuerpo').nuevo("div","tre",name,"dos","TRES",3);
```

##API - BigCSS

  * Usted podra personalizar sus estilos CSS con BigCSS convinadolas con el potencial de JavaScript

```js
var $w = $(this).width();
$('#'+id).bigCSS("display","inline-block");
$('#'+id).bigCSS("vertical-align","top");
$('#'+id).bigCSS("width",([$w/strap]-[strap*5])+"px");
```
