// textSelection.js

document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
        showSaveButton();
    }
});

function showSaveButton() {
    var saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.style.display = 'block';
        // Adjust the position of the button as needed
    }
}

document.getElementById('saveButton').addEventListener('click', function() {
    var selectedText = window.getSelection().toString();
    var articleURL = window.location.href;
    var savedItems = JSON.parse(localStorage.getItem('savedText')) || [];
    
    savedItems.push({ text: selectedText, url: articleURL });
    localStorage.setItem('savedText', JSON.stringify(savedItems));

    alert('Text saved successfully!');
    document.getElementById('saveButton').style.display = 'none';
});
