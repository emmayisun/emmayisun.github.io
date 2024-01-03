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

    saveButton.onclick = function() {
        saveTextAndComment(selectedText);
    };
}

function hideSaveButton() {
    var saveButton = document.getElementById("saveButton");
    if (saveButton) {
        saveButton.style.display = "none";
    }
}

function saveTextAndComment(selectedText) {
    var commentInput = prompt("Please enter your comment:", "");
    if (commentInput != null) {
        saveToLocalStorage(selectedText, commentInput);
    }
}

function saveToLocalStorage(text, comment) {
    var savedItems = JSON.parse(localStorage.getItem("savedText")) || [];
    savedItems.push({ text: text, comment: comment });
    localStorage.setItem("savedText", JSON.stringify(savedItems));
}

// Retrieving saved items from local storage (use this in your saved-item.html)
function getSavedItems() {
    return JSON.parse(localStorage.getItem("savedText")) || [];
}

// Function to delete an item from local storage (you can call this from your delete button)
function deleteSavedItem(index) {
    var savedItems = JSON.parse(localStorage.getItem("savedText")) || [];
    savedItems.splice(index, 1);
    localStorage.setItem("savedText", JSON.stringify(savedItems));
}
