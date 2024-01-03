// textSelection.js

document.addEventListener('mouseup', function(e) {
    let selection = window.getSelection();
    if (selection.toString().length > 0) {
        let range = selection.getRangeAt(0);
        let rect = range.getBoundingClientRect();
        showSaveButton(rect.right + window.scrollX, rect.top + window.scrollY, selection.toString());
    } else {
        hideSaveButton();
    }
});

function showSaveButton(x, y, selectedText) {
    var saveButton = document.getElementById("saveButton");
    saveButton.style.left = `${x}px`;
    saveButton.style.top = `${y}px`;
    saveButton.style.display = "block";

    // Attach selected text to the button for later use
    saveButton.setAttribute('data-selected-text', selectedText);
}

function hideSaveButton() {
    var saveButton = document.getElementById("saveButton");
    if (saveButton) {
        saveButton.style.display = "none";
    }
}

// This function will be triggered when the save button is clicked
function saveTextAndComment() {
    var saveButton = document.getElementById("saveButton");
    var selectedText = saveButton.getAttribute('data-selected-text');
    
    // Show comment input field
    var commentInput = document.getElementById("commentInput");
    commentInput.style.display = "block";
    commentInput.focus();

    // You can modify this to handle the saving of text and comments as needed
    // For example, saving to local storage
    // localStorage.setItem('savedText', JSON.stringify({ text: selectedText, comment: 'Your comment here' }));
}

// Example function to handle comment submission
function submitComment() {
    var commentInput = document.getElementById("commentInput");
    var comment = commentInput.value;
    var saveButton = document.getElementById("saveButton");
    var selectedText = saveButton.getAttribute('data-selected-text');

    // Logic to save the selected text and comment
    // For example, saving to local storage
    // localStorage.setItem('savedText', JSON.stringify({ text: selectedText, comment: comment }));

    // Hide the comment input field after saving
    commentInput.style.display = "none";
    hideSaveButton();
}
