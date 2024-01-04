document.addEventListener('mouseup', function(e) {
    let selection = window.getSelection();
    if (selection.toString().length > 0) {
        highlightSelectedText(); // Call the highlight function
        let range = selection.getRangeAt(0);
        let rect = range.getBoundingClientRect();
        showSaveButton(rect.right + window.scrollX, rect.top + window.scrollY, selection.toString());
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

function saveTextAndComment(selectedText) {
    var comment = prompt("Please enter your comment:", "");
    if (comment !== null) {
        // Save the selected text, comment, and other data to local storage
    }
}

function highlightSelectedText() {
    var selection = window.getSelection();
    if (!selection.rangeCount) return;
    var range = selection.getRangeAt(0);
    var span = document.createElement("span");
    span.classList.add("highlighted-text");
    span.appendChild(range.extractContents());
    range.insertNode(span);
    selection.removeAllRanges(); // Remove selection after highlighting
}

// Additional code for saving to local storage, etc.

function saveToLocalStorage(text, comment, url, title) {
    var savedItems = JSON.parse(localStorage.getItem('savedText')) || [];
    savedItems.push({ text: text, comment: comment, url: url, title: title });
    localStorage.setItem('savedText', JSON.stringify(savedItems));
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
