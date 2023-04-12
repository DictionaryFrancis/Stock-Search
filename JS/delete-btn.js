const close_btn = document.querySelector(".img_close_btn")

close_btn.addEventListener("click", (e) =>{
    e.preventDefault()

    console.log("worked")

    container_info.style.display = "none";

} )