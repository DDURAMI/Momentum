const h1 = document.querySelector(".hello h1")

console.dir(document);

// function handleTitleClick() {
//     const currnetColor = h1.style.color;
//     let newColor;
//     if (currnetColor === "blue"){
//         newColor = "tomato"
//     } else {
//         newColor = "blue"
//     };
//     h1.style.color = newColor;
// };

function handleTitleClick() {
    // const clickedClass = "active"
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("active")
}

function handleMouseEnter() {
    h1.innerText = "Mouse is Here!"
};

function handleMouseLeave() {
    h1.innerText = "Mouse is Gone!"
};

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
};

function handleWindowCopy() {
    alert("copier")
}; 


h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
