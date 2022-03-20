import '../css/componentes.css';
// import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre = 'Sin nombre' ) => {
    console.log('Creando una etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!!`;

    document.body.append( h1 );

    //img

    // console.log(webpackLogo);
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append( img );
}