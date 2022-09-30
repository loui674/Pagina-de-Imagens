const search = document.querySelector(".search-box input"),
    images = document.querySelectorAll(".image-box");


search.addEventListener("keyup", e => {
    if(e.key == "Enter"){
        let searcValue = search.value,
        value = searcValue.toLowerCase();
        images.forEach(image => {
            if(value === image.CDATA_SECTION_NODE.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        })


        console.log(value);
    }
})