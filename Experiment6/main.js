const heading = document.getElementById("mainHeading");
const paragraph = document.getElementById("paragraph");
const input = document.getElementById("userInput");
const messageBox = document.getElementById("messageBox");

let fontSize = 16;

/* Change Heading */
document
.getElementById("changeTextBtn")
.addEventListener("click", () => {

    if(input.value.trim() !== ""){
        heading.textContent = input.value;
    }
});

/* Change Background Color */
document
.getElementById("bgColorBtn")
.addEventListener("click", () => {

    const colors = [
        "#FFE5E5",
        "#E3F2FD",
        "#E8F5E9",
        "#FFF8E1",
        "#F3E5F5"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
});

/* Increase Font Size */
document
.getElementById("fontSizeBtn")
.addEventListener("click", () => {

    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

/* Show / Hide Paragraph */
document
.getElementById("toggleBtn")
.addEventListener("click", () => {

    if(paragraph.style.display === "none"){
        paragraph.style.display = "block";
    }
    else{
        paragraph.style.display = "none";
    }
});

/* Add New Message */
document
.getElementById("addMessageBtn")
.addEventListener("click", () => {

    messageBox.innerHTML =
        "✔ JavaScript Event Triggered Successfully!";
});

/* Reset Everything */
document
.getElementById("resetBtn")
.addEventListener("click", () => {

    heading.textContent =
        "Welcome to JavaScript Lab";

    paragraph.style.display = "block";

    paragraph.style.fontSize = "16px";

    document.body.style.backgroundColor =
        "#f4f6f9";

    input.value = "";

    messageBox.innerHTML = "";

    fontSize = 16;
});