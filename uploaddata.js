
let fileInput = document.getElementById("fileInput");


let upload_btn = document.getElementsByClassName("upload_btn")[0];

upload_btn.addEventListener("click", function() {
  
    let file = fileInput.files[0];

    if (file) {
        console.log("File Name:", file.name);
        console.log("File Size:", file.size);
        console.log("File Type:", file.type);
    } else {
        console.log("No file selected yet!");
    }
});