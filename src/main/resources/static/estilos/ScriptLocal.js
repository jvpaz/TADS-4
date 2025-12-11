document.addEventListener("DOMContentLoaded", function() {
    const carrossel = document.querySelector(".secao_item");
    const botoes = document.querySelectorAll(".carrossel_botoes button");

    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = Number(btn.getAttribute("data-slide"));
            const slide = carrossel.children[index]; // pega o slide correto

            // rola horizontalmente até o slide
            carrossel.scrollTo({
                left: slide.offsetLeft,
                behavior: 'smooth'
            });

            // atualizar botão ativo
            botoes.forEach((b, i) => b.classList.toggle("active", i === index));
        });
    });

     window.addEventListener("resize", () => {
        mostrarSlide(slideAtivo);
    });

});
