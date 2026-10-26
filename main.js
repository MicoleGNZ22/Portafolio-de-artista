// Configuración de datos del portafolio
const obras = {
    obras: {
        obra1: {
            numero: 1,
            titulo: 'Coffe',
            tipo: 'video',
            url: 'https://www.youtube.com/embed/vOTkx4fuvrA',
            descripcion: 'La animación nos muestra un diálogo entre nuestro protagonista en una constante lucha entre sucumbir a su adicción y dependencia a la cafeína y se cuestiona si realmente lo necesita para vivir su día a día o puede vivir sin depender constantemente de esta.'
        },
        obra2: {
            numero: 2,
            titulo: 'Deseos Lunares',
            tipo: 'video',
            url: 'https://www.youtube.com/embed/OMe_YMU3tpQ',
            descripcion: 'Deseos Lunares es una animación realizada en el motor de videojuegos Unreal Engine 5. Esta nos narra la historia de un pequeño conejo en soledad el cual desea desesperadamente compañía, amor y alguien con quien compartir el enorme y solitario bosque en el que vive.'
        },
        obra3: {
            numero: 3,
            titulo: 'Ilustraciones',
            tipo: 'imagen',
            imagen: 'imagenes/Conejo.jpg',
            descripcion: 'Serie de ilustraciones digitales en las cuales objetos o formas infantiles e inocentes se transforman perdiendo la inocencia y se transforman por completo.'
        },
        obra4: {
            numero: 4,
            titulo: 'Grabados',
            tipo: 'imagen',
            imagen: 'imagenes/grabado.jpg',
            descripcion: 'Grabados en linóleo con tinta hechos por mí durante mi desarrollo como artista en CEDART (Centros de Educación Artística).'
        }
    },
    statement: 'Me gusta crear arte tanto en digital como de forma tradicional. Me gusta plasmar mis ideas ya sea en papel o en la pantalla. Mis trabajos se basan en mis emociones o pensamientos, tiendo a ser una persona con una mente muy dispersa y eso lo transformo en arte.',
    
    // Redes sociales y enlaces
    instagramPersonal: 'https://www.instagram.com/_niick_09/',
    instagramMetanoia: 'https://www.instagram.com/__metanoiaart__/',
    youtubeChannel: 'https://www.youtube.com/@FERNANDAMICOLEGONZALEZGONZALEZ' // Reemplaza por el enlace exacto a tu canal de YouTube
};


// 1. LÓGICA DEL BOTÓN ABOUT CON ENLACES A REDES SOCIALES

const contenedorAbout = document.querySelector('.about');
const buttonAbout = document.querySelector("#aboutButton");

if (contenedorAbout) {
    contenedorAbout.innerHTML = `
        <p>${obras.statement}</p>
        <div class="redes-about">
            <a href="${obras.instagramPersonal}" target="_blank" rel="noopener noreferrer" class="btn-about btn-ig">
                Mi Instagram
            </a>
            <a href="${obras.instagramMetanoia}" target="_blank" rel="noopener noreferrer" class="btn-about btn-metanoia">
                Metanoia IG
            </a>
            <a href="${obras.youtubeChannel}" target="_blank" rel="noopener noreferrer" class="btn-about btn-yt">
                Canal de YouTube
            </a>
        </div>
    `;
    
    // Ocultar la ventana emergente al inicio
    contenedorAbout.style.display = 'none';
}

if (buttonAbout && contenedorAbout) {
    buttonAbout.addEventListener("click", (e) => {
        e.stopPropagation();
        
        if (contenedorAbout.style.display === 'none') {
            contenedorAbout.style.display = 'block';
        } else {
            contenedorAbout.style.display = 'none';
        }
    });

    document.body.addEventListener('click', () => {
        if (contenedorAbout.style.display !== 'none') {
            contenedorAbout.style.display = 'none';
        }
    });

    contenedorAbout.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}