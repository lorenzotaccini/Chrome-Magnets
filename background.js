chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "copyMagnetLinks") {
      // La copia nella clipboard verrà gestita nel popup script
      sendResponse({ success: true });
    }
  });
  

  