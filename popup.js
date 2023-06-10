// Function to send a message to the background script
function sendMessage(message) {
  chrome.runtime.sendMessage(message);
}

// Handle button click events
document.getElementById("blockButton").addEventListener("click", function() {
  sendMessage({ command: "block" });
});

document.getElementById("unblockButton").addEventListener("click", function() {
  sendMessage({ command: "unblock" });
});
