function colorChange(color, buttonId) {
    document.body.style.backgroundColor = color;
    document.body.style.color = getTextColor(color);

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    const clickedButton = document.getElementById(buttonId);
    clickedButton.classList.add('active');
}

function getTextColor(backgroundColor) {
    // Simple logic to determine text color based on background color
    if (backgroundColor === 'yellow') {
        return 'black';
    } else {
        return 'white';
    }
}