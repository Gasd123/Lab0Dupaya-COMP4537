/** Manages the messages that will be displayed to the user */
class MessageManager {
  constructor(defaultMessageID) {
    this.messageBox = document.getElementById(defaultMessageID);
  }

  showMessage(messageKey, elementID = null, isPlaceholder = false) {
    const text = MESSAGES[messageKey] || messageKey; // fallback

    if (elementID) {
      const el = document.getElementById(elementID);
      if (isPlaceholder) {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    } else {
      // Default area (the main message box)
      this.messageBox.textContent = text;
    }
  }

  clearMessage(elementID = null) {
    if (elementID) {
      const el = document.getElementById(elementID);
      el.textContent = "";
    } else {
      this.messageBox.textContent = "";
    }
  }
}