function biggerFont() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function boldFont() {
    var textArea = document.getElementById("textInput");

    // Check which radio button is selected
    var boldButton = document.getElementById("button1");
    var normalButton = document.getElementById("button2");

    if (boldButton.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (normalButton.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function uppercaseFont() {
    var textArea = document.getElementById("textInput");
    var uppercaseText = textArea.value.toUpperCase();

    var mooText = uppercaseText.split(".");
    if(mooText.length > 1) {
        console.log("test" + mooText);
        var finalMooText = "";
        for(let i = 0; i < mooText.length-1; i++){
            finalMooText += mooText[i] + "-Moo.";
        }
    
        textArea.value = finalMooText;
    }
    else {
        console.log("testelse" + mooText);
        textArea.value = textArea.value.toUpperCase();
    }

}