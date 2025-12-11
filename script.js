// Espera 2.8 segundos y muestra el contenido
setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    }, 600);
}, 2800);
