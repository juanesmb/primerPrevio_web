
/////////////////////////////MAIN//////////////////////////////////

cargarlistadoNoticias();





//////////////////////////FUNCTIONS////////////////////////////////

function cargarlistadoNoticias()
{
    var listadoNoticias =
    [{
        "id": "1",
        "titulo": "Democracia estudiantil",
        "categoria": "Colegio",
        "descripcion": "El 20 de marzo se realizó un proceso democrático para conocer los representantes de los distintos grupos, así como el personero estudiantil que serán las cabezas visibles de los estudiantes ante los distintos estamentos directivos de la institución",
        "detalle": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas ‘Letraset’, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p><p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, ‘consecteur’, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de ‘de Finnibus Bonorum et Malorum’ (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, ‘Lorem ipsum dolor sit amet..’, viene de una linea en la sección 1.10.32</p>",
        "fecha": "20 de marzo de 2021",
        "img": "http://www.elmundo.com/images/ediciones/Viernes_28_2_2014/Viernes_28_2_2014@@Elecciones-escolares-600.jpg"
    },
    {
        "id": "2",
        "titulo": "Bosque Idol",
        "categoria": "Colegio",
        "descripcion": "Las directivas del colegio definieron que este evento tan importante para la institución se realizará el día 10 de Octubre del presente año.  Debido a la pandemia se realizará de manera virtual, con el uso de las nuevas tecnologías",
        "detalle": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas ‘Letraset’, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p><p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, ‘consecteur’, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de ‘de Finnibus Bonorum et Malorum’ (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, ‘Lorem ipsum dolor sit amet..’, viene de una linea en la sección 1.10.32</p>",
        "fecha": "20 de marzo de 2021",
        "img": "https://www.redeszone.net/app/uploads-redeszone.net/2016/05/Geometria-aleatoria.png"
    },
    {
        "id": "3",
        "titulo": "Alternancia",
        "categoria": "Colegio",
        "descripcion": "El colegio realiza sus trabajos de adecuaciones para volver lo más pronto posible a la alternancia, de ser posible después de la Semana Santa. ",
        "detalle": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas ‘Letraset’, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p><p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, ‘consecteur’, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de ‘de Finnibus Bonorum et Malorum’ (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, ‘Lorem ipsum dolor sit amet..’, viene de una linea en la sección 1.10.32</p>",
        "fecha": "12 de marzo de 2021",
        "img": "https://www.redeszone.net/app/uploads-redeszone.net/2016/05/Geometria-aleatoria.png"
    },
    {
        "id": "4",
        "titulo": "Aplazada eliminatoria a Qatar",
        "categoria": "Deportes",
        "descripcion": "El 20 de marzo se realizó un proceso democrático para conocer los representantes de los distintos grupos, así como el personero estudiantil que serán las cabezas visibles de los estudiantes ante los distintos estamentos directivos de la institución",
        "detalle": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas ‘Letraset’, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p><p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, ‘consecteur’, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de ‘de Finnibus Bonorum et Malorum’ (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, ‘Lorem ipsum dolor sit amet..’, viene de una linea en la sección 1.10.32</p>",
        "fecha": "20 de marzo de 2021",
        "img": "https://www.redeszone.net/app/uploads-redeszone.net/2016/05/Geometria-aleatoria.png"
    }
    ]

    console.log(JSON.stringify(listadoNoticias))
}





/*
var url = "datos.json";
var listadoCartas = fetch(url)
    .then(response => response.json())
    .then(data => generar(data))
    .catch(function (error) {
    });
*/