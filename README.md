# Proyecto Data Lovers - Ghiblipedia

## Índice 
* [1. Definición del producto](#1-definici%C3%B3n-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo de baja fidelidad](#3-prototipo-de-baja-fidelidad)
* [4. Prototipo de alta fidelidad](#4-prototipo-de-alta-fidelidad)
* [5. Testeos de usabilidad](#5-testeos-de-usabilidad)

***

## 1. Definición del producto
Para este proyecto decidimos seleccionar el set de datos de Studio Ghibli, y nombramos nuestro sitio como "Ghiblipedia". El objetivo del sitio web es mostrar información relativa a las películas producidas por Studio Ghibli, como títulos de las películas, personajes, directores, productores, rating, fecha de estreno, entre otros datos que podrían ser relevantes para los fans.  

## 2. Historias de usuario
Con el objetivo de definir las necesidades del usuario que debía cubrir nuestro sitio web, realizamos una serie de Historias de Usuario apartir de la data que nos fue proporcionada, mismas que se detallan a continuación: 

### Historia de Usuario 1
**Yo como usuaria de Ghiblipedia quiero ver las películas para conocer el contenido que hay de Studio Ghibli.**

#### Criterios de Aceptación
* Al entrar al sitio web se muestra información sobre las películas de Studio Ghibli, como título y rating. 
* La aplicación es visualmente agradable y la iformación es clara. 

#### Definición de terminado
* Ingresamos a la página y renderiza todas las películas contenidas en el objeto.
* Nuestro CSS alinea, ordena y tiene un aspecto visual al renderizar las tarjetas.
* Haber solicitado feedback del prototipo.
* El código de las programadoras debe estar integrado en GitHub a través de un PR (pull request).
* Haber escrito el test de la(s) función(es) utilizadas.

### Historia de Usuario 2
**Yo como usuaria de Ghiblipedia quiero conocer a lxs directorxs y productorxs de Studio Ghibli para conocerlxs y saber cuántas y cuáles son las animaciones en las que han participado.**

#### Criterios de Aceptación
* El usuario puede filtrar la información por directorxs y productorxs.
* Se muestra una lista de películas en las que ha participado elx directorx o productorx.
* Filtrado y ordenado funciona de una forma intuitiva.
* Es atractivo visualmente.

#### Definición de terminado
* Proveer un menú para filtrar la información del objeto por los criterios de directorxs y productorxs.
* Al seleccionar el filtro de directorxs o productorxs, se muestre la lista de personas que cumplen con cada criterio y las películas en las que han trabajado cada una en una lista enumerada.
* Haber solicitado feedback del prototipo. 
* El código de las programadoras debe estar integrado en GitHub a través de un PR (pull request).
* Haber escrito el test de la(s) función(es) utilizadas.

### Historia de Usuario 3
**Yo como usuaria de Data Lovers quiero conocer la descripción, fecha de lanzamiento, poster, director, productor y personajes de las películas de Studio Ghibli, para conocer más sobre las animaciones.**

#### Criterios de Aceptación
* Al seleccionar una película, se despliega una pantalla con la información relevante como sinopsis, fecha de estreno, poster, rating, director, productor, personajes. 
* Es visualmente atractivo y fácil de usar.

#### Definición de terminado
* Cuando la usuaria haga click en la tarjeta de alguna película, se le dirija a una pantalla nueva.
* En la pantalla nueva, se renderiza la información relevante sobre la película seleccionada de manera ordenada y atractiva.
* Haber solicitado feedback del prototipo.
* El código de las programadoras debe estar integrado en GitHub a través de un PR (pull request).
* Haber escrito el test de la(s) función(es) utilizadas.

### Historia de Usuario 4
**Yo como usuaria de Data Lovers quiero conocer los personajes de las películas de Studio Ghibli, para saber cuántos y cuáles son.**

#### Criterios de Aceptación
* El usuario puede filtrar y ordenar por personajes y estos se muestran en la pantalla.
* Cuando se aplique el filtro, los personajes se pueden ordenar bajo diferentes criterios.
* Es visualmente atractivo y fácil de usar.

#### Definición de terminado
* Agregar al menú de filtrado de la data, la opción de filtrar por "personajes" y que estos se muestren en la pantalla.
* Crear nuevos criterios de ordenamiento de la información como: alfabéticamente y por edad.
* Haber solicitado feedback del prototipo.
* El código de las programadoras debe estar integrado en GitHub a través de un PR (pull request).
* Haber escrito el test de la(s) función(es) utilizadas.

## 3. Prototipo de baja fidelidad
Tomando en cuenta los requerimientos de las historias de usuario, realizamos un primer protitipo en papel: 
![Página principal](/src/Images/Prototipo-Inicio.jpg)
![Menú de navegación](/src/Images/Prototipo-Menu.jpg)
![Pantalla de películas](/src/Images/Prototipo-Películas.jpg)
![Display de películas individuales](/src/Images/Prototipo-Película-individual.jpg)
![Pantalla de directores y productores](/src/Images/Prototipo-Directores.jpg)
![Pantalla de personajes](/src/Images/Prototipo-Personajes.jpg)

## 4. Prototipo de alta fidelidad
Partiendo del primer boceto, realizamos el diseño de un [prototipo de alta fidelidad](https://www.figma.com/proto/Yij0eY9mDZun3V0SqKEQNJ/Ghiblipedia?node-id=157%3A184&scaling=min-zoom&page-id=0%3A1) en Figma.

La primera modificación que realizamos sobre el diseño original fue pasar de tener una pantalla de inicio y un menú antes de que el usuario pudiera visualizar las películas, a mostrar todo eso en la primera pantalla, con la finalidad de hacer que la información fuera más accesible. 
Procuramos de mantener un diseño minimalista con la intención de lograr una visualización que fuese amigable con la mayoría de los usuarios. 

## 5. Testeos de usabilidad
A lo largo del proceso de implementación nos mantuvimos fieles al prototipo original en la mayoría de los casos, realizando solamente adecuaciones sencillas que nos fueron señaladas por los usuarios, como lo fueron: 

* La información de las películas en la pantalla principal mostraba el poster, título y año de publicación de cada una, los usuarios señalaron que les interesaba más conocer el rating en lugar de la fecha de estreno.
* El ordenamiento de las películas mostraba las opciones: en orden alfabético y por año, a partir del feedback recibido lo cambiamos a ordenar por mejor rating a peor rating y después en orden alfabético. 
* Al mostrar el rating para cada película lo señalabamos mediante una estrella en color negro, los usuarios reportaron que no llamaba la atención y sugirieron agregar más estrellas y presentarlas en otro color. Para mejorar la experiencia de usuario decidimos que la cantidad a estrellas a aparecer en cada tarjeta dependería del rating de la película en cuestión y se mostrarían en color amarillo para diferenciarse del resto del texto. 
* Las tarjetas en la sección de directores y productores tenían un efecto al hacer hover sobre ellas, los usuarios indicaron que daba la impresión de que al hacer click iba a aparecer otra cosa o se les redirigiría a otra pantalla, lo cual no era nuestra intención, por lo que quitamos el efecto y lo dejamos sólo en la sección de películas donde sí era pertinente. 
* En la misma sección nos señalaron que el texto de las tarjetas se veía muy plano y dificultaba su lectura, razón por la que cambiamos la forma en que se presentaba y asignamos jerarquías. 
