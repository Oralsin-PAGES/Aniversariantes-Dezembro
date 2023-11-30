document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.jpg",
        "01-12-TTP.jpeg",
        "03-12-SAM.jpeg",
        "03-12-SMP.jpeg",
        "08-12-VLM.jpeg",
        "10-12-VLM.jpeg",
        "11-12-NRN.jpeg",
        "12-12-ROT.jpeg",
        "17-12-VLM.jpeg",
        "18-12-SAM.jpeg",
        "19-12-SAM.jpeg",
        "23-12-SBC.jpeg",
        "24-12-SIQ.jpeg",
        "25-12-SMP.jpeg",
        "26-12-MAP.jpeg",
        "26-12-NRN.jpeg",
        "29-12-SAM.jpeg",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
