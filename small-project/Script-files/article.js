// Form Submit
document.getElementById("articleForm").addEventListener("submit", function(e){

    e.preventDefault();

    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;

    if(title.trim() === ""){
        alert("Please enter article title");
        return;
    }

    alert(
        "Article Saved Successfully!\n\n" +
        "Title: " + title +
        "Category: " + category
    );

    console.log({
        title:title,
        category:category
    });

    this.reset();
});

// Active Sidebar Link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(){
        navLinks.forEach(item => item.style.background = "");
        this.style.background = "#334155";
    });
});

const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
    }
});

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("dragover");
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");

    const files = e.dataTransfer.files;

    if (files.length > 0) {
        fileInput.files = files;
        fileName.textContent = files[0].name;
    }
});