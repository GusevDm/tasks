const button = document.querySelector(".button");
const body = document.body;

const contentModal = createModal("Hello, <b>world!</b>");

button.addEventListener("click", e => {
    body.appendChild(contentModal);

});

function createModal(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    overlayElement.addEventListener("click", e => {
        if(e.target === overlayElement) {
            body.removeChild(overlayElement);
        }
    });

    const template = document.querySelector("#overlayTemplate");

    overlayElement.innerHTML = template.innerHTML;

    const close = overlayElement.querySelector(".close");
    close.addEventListener("click", e => {
        e.preventDefault();

        body.removeChild(overlayElement);
    });

    const textWindow = overlayElement.querySelector(".textWindow");
    textWindow.innerHTML = content;

    return overlayElement;
}



// button.addEventListener("click", e => {
//     body.appendChild(contentModal);
// });

// function createModal(content) {
//     const overlayElement = document.createElement("div");
//     overlayElement.classList.add("overlay");
    
//     overlayElement.addEventListener("click", e => {
//         if(e.target === overlayElement) {
//             body.removeChild(overlayElement);
//         }
//     });

//     const overlayWindow = document.createElement("div");
//     overlayWindow.classList.add("overlayWindow");

//     const textWindow = document.createElement("p");
//     textWindow.classList.add("textWindow");

//     textWindow.innerHTML = content;

//     const close = document.createElement("a");
//     close.classList.add("close");
//     close.textContent = "x";
//     close.href = "#";

//     body.appendChild(overlayElement);
//     overlayElement.appendChild(overlayWindow);
//     overlayWindow.appendChild(close);
//     overlayWindow.appendChild(textWindow);

//     close.addEventListener("click", e => {
//         e.preventDefault();
    
//         body.removeChild(overlayElement);
//     });

//     return overlayElement;
// }