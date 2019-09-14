const pageRedirect = () => {
    let delay = 3000;

    setTimeout( () => {
        window.location = "../crearCuenta/crearCuenta.html";
    }, delay);
}

window.onload(pageRedirect());