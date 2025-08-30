
function openModal() {
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


function addImageFromURL() {
    let url = prompt("Enter the image URL:");
    if (url) {
        createImage(url);
        closeModal();
    }
}


function addImageFromPC() {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = function (event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                createImage(e.target.result);
                closeModal();
            }
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function createImage(src) {
    let container = document.getElementById("imageContainer");

    let imgBox = document.createElement("div");
    imgBox.style.position = "relative";
    imgBox.style.display = "inline-block";
    imgBox.style.margin = "10px";

    let img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "200px";
    img.style.borderRadius = "10px";
    img.style.display = "block";

    let btnDelete = document.createElement("button");
    btnDelete.innerText = "❌";
    btnDelete.style.position = "absolute";
    btnDelete.style.top = "5px";
    btnDelete.style.right = "5px";
    btnDelete.style.background = "red";
    btnDelete.style.color = "white";
    btnDelete.style.border = "none";
    btnDelete.style.padding = "3px 6px";
    btnDelete.style.borderRadius = "50%";
    btnDelete.style.cursor = "pointer";
    btnDelete.style.fontSize = "12px";

    btnDelete.onclick = function () {
        container.removeChild(imgBox);
    };

    imgBox.appendChild(img);
    imgBox.appendChild(btnDelete);
    container.appendChild(imgBox);
}
