// DOM Elements 
const boxes = document.querySelectorAll(".box"),
image = document.querySelector(".image");

// console.log(boxes,image);
//Loop through each boxes elements 

boxes.forEach(box =>{
    // when a droggable elements draggaed over a box element 

    box.addEventListener("dragover",e=>{
        e.preventDefault() //prevent default behaviour
        // console.log("dragging") ;

        box.classList.add("hovered");
    });

    // when a draggable elements leaves  a box element 

    box.addEventListener("dragleave",()=>{
    box.classList.add("hovered");

    });

    //when a draggable elements is  dropped  on a box element 
    box.addEventListener("drop", ()=>{
        box.appendChild(image);
        box.classList.add("hovered");
    })



})