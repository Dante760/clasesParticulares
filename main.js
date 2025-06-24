let boton = document.getElementById("botonEmail");

boton.addEventListener("click", ()=>{
    let email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email);
    boton.textContent = "Copiado";
    setTimeout(()=>{
        boton.textContent = "Copiar";
    },2000)
})

let botonWA = document.getElementById("botonWhatsApp");

botonWA.addEventListener("click", ()=>{

    const numero = "5491149742213";
    const mensaje = encodeURIComponent("Hola, estoy interesado en las clases de programación web.");
    const enlace = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(enlace, "_blank");
});
