function updateColor() {
    const colorPicker = document.getElementById("color-picker");
    const colorCode = document.getElementById("color-code");
    const colorBox = document.getElementById("color-display");
    
    // Update the color code text
    colorCode.textContent = colorPicker.value;
    
    // Change the background color of the color box
    colorBox.style.backgroundColor = colorPicker.value;
}