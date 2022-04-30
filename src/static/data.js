let button = document.queryCommandIndeterm(".btn");
console.log(button);

let input = document.querySelector(".btn").files[0];
let formData = new FormData();

formData.append("inputfile", input);
fetch("/upload", { method: "POST", body: formData });
