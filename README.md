#Biges

Framework de JavaScript para sitios rápidos y eficaces. 

##Instalación

######1. Clonar el repositorio el cual ya contiene toda la estructura para su aplicación web.
######2. Leer la API de todas las dependencias que necesitara ocupar.
######3. Modificar el principal archivo llamado `/pages/view.js`.
######4. Esta libreria es compatible con `NODE.JS` y todas las dependencias de `NPM`.
######5. La mayoria de los ejemplos que encontrara son relacionados con `EXPRESS` & `SOCKET.IO`.

El archivo principal es `/index.html`.

Es el encargado de procesar `/pages/view.js` `/bin/bigCSS.js` 

Esta libreria tambien depende de:
  * `jquery.min.js`  [Ver página oficial](http://jquery.com/)
  * `bigstrap.css or normalize.css`  [Ver página oficial](https://github.com/necolas/normalize.css/)
  * `tester.js` & `tester.css`
  * `view.js`

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
//Obtenemos la longitud del TAG superior
var $w = $(this).width();
//NO ES NECESARIO PARA LAS PROPIEDADES DE 'WEBKIT' DECLARARLAS PARA COMPATIBILIDAD
$('#'+id).bigCSS("background","linear-gradient(top, #575757, #000000)");
$('#'+id).bigCSS("display","inline-block");
//    ↑     ↑        ↑           ↑
// TAG ID  BIG   PROPIEDAD     VALOR
$('#'+id).bigCSS("vertical-align","top");
$('#'+id).bigCSS("width",([$w/strap]-[strap*5])+"px");
//                              ↑                 ↑
//                           FORMULAS          VALORES     
//                          MATEMATICAS   NUMERICOS & TEXTO
```
##Themes - BigTH

######Para poder hacer uso correcto de las platillas CSS de `Biges` le recomendamos respetar las gerarquias que se han establecido para la correcta visualización de la misma.

###Elemento raíz
```html
<html>
Representa la raíz de un documento HTML o XHTML. Todos los demás elementos deben ser descendientes de este elemento.
```
###Metadatos del documento
```html
<head>	
Representa una colección de metadatos acerca del documento, incluyendo enlaces a, o definiciones de, scripts y hojas de estilo.
<title>	
Define el título del documento, el cual se muestra en la barra de título del navegador o en las pestañas de página. Solamente puede contener texto y cualquier otra etiqueta contenida no será interpretada.
<base>	
Define la URL base para las URLs relativas en la página.
<link>	
Usada para enlazar JavaScript y CSS externos con el documento HTML actual.
<meta>	
Define los metadatos que no pueden ser definidos usando otro elemento HTML.
<style>	
Etiqueta de estilo usada para escribir CSS en línea.
```
###Scripting
```html
<script>	
Define ya sea un script interno o un enlace hacia un script externo. El lenguaje de programación es JavaScript
<noscript>	
Define una contenido alternativo a mostrar cuando el navegador no soporta scripting.
```
###Secciones
```html
<body>
Representa el contenido principal de un documento HTML. Solo hay un elemento <body> en un documento.
<section> 
This element has been added in HTML5	Define una sección en un documento.
<nav> 
This element has been added in HTML5	Define una sección que solamente contiene enlaces de navegación
<article> 
This element has been added in HTML5	Define contenido autónomo que podría existir independientemente del resto del contenido.
<aside> 
This element has been added in HTML5	Define algunos contenidos vagamente relacionados con el resto del contenido de la página. Si es removido, el contenido restante seguirá teniendo sentido
<h1>,<h2>,<h3>,<h4>,<h5>,<h6>	
Los elemento de cabecera  implementan seis niveles de cabeceras de documentos; <h1> es la de mayor y <h6> es la de menor impotancia. Un elemento de cabecera describe brevemente el tema de la sección que introduce.
<header> 
This element has been added in HTML5	Define la cabecera de una página o sección. Usualmente contiene un logotipo, el título del sitio Web y una tabla de navegación de contenidos.
<footer> 
This element has been added in HTML5	Define el pie de una página o sección. Usualmente contiene un mensaje de derechos de autoría, algunos enlaces a información legal o direcciones para dar información de retroalimentación.
<address>	
Define una sección que contiene información de contacto.
<main>
This element has been added in HTML5	Define el contenido principal o importante en el documento. Solamente existe un elemento <main> en el documento.
```
###Agrupación de Contenido
```html
<p>	
Define una parte que debe mostrarse como un párrafo.
<hr>	
Representa un quiebre temático entre parrafos de una sección o articulo o cualquier contenido.
<pre>	
Indica que su contenido esta preformateado y que este formato debe ser preservado.
<blockquote>	
Representa una contenido citado desde otra fuente.
<ol>	
Define una lista ordenada de artículos.
<ul>	
Define una lista de artículos sin orden.
<li>	
Define un artículo de una lista ennumerada.
<dl>	
Define una lista de definiciones, es decir, una lista de términos y sus definiciones asociadas.
<dt>	
Representa un término definido por el siguiente <dd>.
<dd>	
Representa la definición de los terminos listados antes que él.
<figure> 
This element has been added in HTML5	Representa una figura ilustrada como parte  del documento.
<figcaption> 
This element has been added in HTML5	Representa la leyenda de una figura.
<div>	
Representa un contenedor genérico sin ningún significado especial.
```
###Semántica a nivel de Texto
```html
<a>	
Representa un  hiperenlace , enlazando a otro recurso.
<em>	
Representa un texto  enfatizado , como un acento de intensidad.
<strong>	
Representa un texto especialmente  importante .
<small>	
Representa un  comentario aparte , es decir, textos como un descargo de responsabilidad o una nota de derechos de autoría, que no son esenciales para la comprensión del documento.
<s>	
Representa contenido que ya  no es exacto o relevante .
<cite>	
Representa el  título de una obra .
<q>	
Representa una  cita textual  inline.
<dfn>	
Representa un término cuya  definición  está contenida en su contenido ancestro más próximo.
<abbr>	
Representa una  abreviación  o un  acrónimo ; la expansión de la abreviatura puede ser representada por el atributo title.
<data> 
This element has been added in HTML5	Asocia un equivalente legible por máquina a sus contenidos. (Este elemento está sólamente en la versión de la  WHATWG del estandar HTML, y no en la versión de la W3C de HTML5).
<time> 
This element has been added in HTML5	Representa un valor de fecha y hora; el equivalente legible por máquina puede ser representado en el atributo datetime.
<code>	
Representa un código de  ordenador .
<var>	
Representa a una variable, es decir, una expresión matemática o contexto de programación, un identificador que represente a una constante, un símbolo que identifica una cantidad física, un parámetro de una función o un marcador de posición en prosa .
<samp>	
Representa la salida de un programa o un ordenador.
<kbd>	
Representa la entrada de usuario o usuaria, por lo general desde un teclado, pero no necesariamente, este puede representar otras formas de entrada de usuario o usuaria, como comandos de voz transcritos.
<sub>,<sup>	
Representan un subíndice y un superíndice, respectivamente.
<i>	
Representa un texto en una voz o estado de ánimo alterno, o por lo menos de diferente calidad, como una designación taxonómica, un término técnico, una frase idiomática, un pensamiento o el nombre de un barco.
<b>	
Representa un texto hacia el cual se llama la atención para  propósitos utilitaros.  No confiere ninguna importancia adicional y no implica una voz alterna.
<u>	
Representa una anotación no textual sin-articular, como etiquetar un texto como mal escrito o etiquetar un nombre propio en texto en Chino.
<mark> 
This element has been added in HTML5	Representa texto resaltado con propósitos de referencia, es decir por su relevancia en otro contexto.
<ruby> 
This element has been added in HTML5	
Representa contenidos a ser marcados con anotaciones ruby,  recorridos cortos de texto presentados junto al texto. Estos son utilizados con regularidad en conjunto a lenguajes de Asia del Este, donde las anotaciones actúan como una guía para la pronunciación, como el furigana Japonés.

<rt> 
This element has been added in HTML5	Representa el  texto de una anotación ruby .
<rp> 
This element has been added in HTML5	Representa los paréntesis alrededor de una anotación ruby, usada para mostrar la anotación de manera alterna por los navegadores que no soporten despliegue estandar para las anotaciones.
<bdi> 
This element has been added in HTML5	Representa un texto que debe ser aislado de sus alrededores para el formateado bidireccional del texto.  Permite incrustar un fragmento de texto con una direccionalidad diferente o desconocida.
<bdo>	
Representa la direccionalidad de sus descendientes con el fin de anular de forma explícita al algoritmo bidireccional Unicode.
<span>
Representa texto sin un significado específico.  Este debe ser usado cuando ningún otro elemento semántico le confiere un significado adecuado, en cuyo caso, provendrá de atributos globales como class, lang, o dir.
<br>	
Representa un salto de línea.
<wbr> 
This element has been added in HTML5	Representa una oportunidad de salto de línea, es decir, un punto sugerido de envoltura donde el texto de múltiples líneas puede ser dividido para mejorar su legibilidad.
```
###Ediciones
```html
<ins>	
Define una adición en el documento.
<del>	
Define una remoción del documento.
```
###Contenido incrustado
```html
<img>	
Representa una imagen.
<iframe>	
Representa un contexto anidado de navegación, es decir, un documento HTML embebido.
<embed> 
This element has been added in HTML5	Representa un punto de integración para una aplicación o contenido interactivo externo que por lo general no es HTML.
<object>	
Representa un recurso externo, que será tratado como una imagen, un sub-documento HTML o un recurso externo a ser procesado por un  plugin.
<param>	
Define parámetros para el uso por los plugins invocados por los elementos <object>.
<video> 
This element has been added in HTML5	Representa un  video , y sus archivos de audio y capciones asociadas, con la interfaz necesaria para reproducirlos. 
<audio> 
This element has been added in HTML5	Representa un sonido o stream de audio.
<source> 
This element has been added in HTML5	Permite a autores o autoras especificar recursos multimedia alternativos para los elementos multimedia como  <video> o <audio>.
<track> 
This element has been added in HTML5	Permite a autores o autoras especificar una pista de texto temporizado para elementos multimedia como <video> o   <audio>.
<canvas> 
This element has been added in HTML5	Representa un  área de mapa de bits  en el que se pueden utilizar scripts para renderizar gráficos como gráficas, gráficas de juegos o cualquier imagen visual al vuelo.
<map>	
En conjunto con <area>, define un mapa de imagen.
<area>	
En conjunto con  <map>, define un mapa de imagen.
<svg> 
This element has been added in HTML5	Define una imagen vectorial embebida.
<math> 
This element has been added in HTML5	Define una fórmula matemática.
```
###Datos tabulares
```html
<table>	
Representa datos con más de una dimensión.
<caption>	
Representa el título de una tabla.
<colgroup>	
Representa un conjunto de una o más columnas de una tabla.
<col>	
Representa una columna de una tabla.
<tbody>	
Representa el bloque de filas que describen los  datos contretos  de una tabla.
<thead>	
Representa el bloque de filas que describen las etiquetas de columna de una tabla.
<tfoot>	
Representa los bloques de filas que describen los  resúmenes de columna  de una tabla.
<tr>	
Representa una fila de celdas en una tabla.
<td>	
Representa una celda de datos en una tabla.
<th>	
Representa una celda encabezado en una tabla. 
```
###Formularios
```html
<form>	
Representa un formulario, consistendo de controles que puede ser enviado a un servidor para procesamiento.
<fieldset>	
Representa un conjunto de controles.
<legend>	
Representa el título de un <fieldset>.
<label>	
Representa el título de un control de formulario.
<input>	
Representa un campo de datos escrito que permite al usuario o usuaria editar los datos.
<button>	
Representa un  botón .
<select>	
Represents un control que permite la selección entre un conjunto de opciones.
<datalist> 
This element has been added in HTML5	Representa un conjunto de opciones predefiniddas para otros controles.
<optgroup>	
Representa un conjunto de opciones, agrupadas lógicamente.
<option>	
Representa una opción en un elemento <select>, o una sugerencia de un elemento <datalist>.
<textarea>	
Representa un control de edición de texto multi-línea.
<keygen> 
This element has been added in HTML5	Representa un control de par generador de llaves.
<output> 
This element has been added in HTML5	Representa el resultado de un cálculo.
<progress> 
This element has been added in HTML5	Representa el progreso de finalización de una tarea.
<meter> 
This element has been added in HTML5	Representa la medida escalar (o el valor fraccionario) dentro de un rango conocido.
```
###Elementos interactivos
```html
<details> 
This element has been added in HTML5	Representa un widget desde el que un usuario o usuaria puede obtener información o controles adicionales.
<summary> 
This element has been added in HTML5	Representa un resumen, título o leyenda para un elemento  <details> dado.
<command> 
This element has been added in HTML5	Representa un comando que un usuario o usuaria puede invocar.
<menu> This element has been added in HTML5	Representa una lista de comandos .
```
