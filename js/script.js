//Set up by ChatGPT

// Instantiate managers
const messageManager = new MessageManager("message");
const gameManager = new GameManager(messageManager);

// Set up UI defaults via MessageManager
messageManager.showMessage("MESSAGE"); // goes to <p id="message">
messageManager.showMessage("GO", "startGame"); // sets <button id="startGame">
messageManager.showMessage("PLACEHOLDER", "numButtons", true); // sets placeholder

// End of ChatGPT portion

document.getElementById("startGame").addEventListener("click", () => {
  //Resets the correct and wrong message if the user presses go again
  document.getElementById("memory").innerHTML = ""
  
  const n = parseInt(document.getElementById("numButtons").value, 10);

  // Check if n is within the required amount before starting the game
  if (n > 7 || n < 3) {
    document.getElementById("invalidArea").innerHTML = "";
    messageManager.showMessage("INVALID", "invalidArea");
  } else {
    document.getElementById("invalidArea").innerHTML = "";
    gameManager.startGame(n);
  }
  
});
