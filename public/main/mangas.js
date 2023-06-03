document.addEventListener("DOMContentLoaded", function () {
    console.log("si esta funcionando");

    let horizontal = document.querySelector(".horizontal");
    let vertical = document.querySelector(".vertical");
    let figure_img = document.querySelector(".container_img");
    let btn_nex = document.querySelector(".swiper-button-next");
    let btn_swiper = document.querySelectorAll(".btn_nave-slider")
    btn_swiper.forEach(i=>{
        i.classList.add("ocultar")
    })
    btn_nex.addEventListener("click", () => {
        console.log("Hola");
    });

    horizontal.addEventListener("click", () => {
        figure_img.classList.replace("container_img", "swiper-wrapper");
        btn_swiper.forEach(i=>{
            i.classList.remove("ocultar")
        })
        nevegar()
    });

    vertical.addEventListener("click", () => {
        console.log("click");
        figure_img.classList.replace("swiper-wrapper", "container_img");
        figure_img.style.transform = "none";
        btn_swiper.forEach(i=>{
            i.classList.add("ocultar")
        })
    });
    function nevegar() {
        let swiper = new Swiper(".container_img_capi", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});
