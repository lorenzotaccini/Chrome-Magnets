document.getElementById('copy').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getMagnetLinks" }, (response) => {
        if (response && response.magnetLinks) {
          const magnetLinksStr = response.magnetLinks.join('\n');
          navigator.clipboard.writeText(magnetLinksStr).then(() => {
            alert("Magnet links copied to clipboard!");
          }).catch(err => {
            alert("Failed to copy magnet links: " + err);
          });
        } else {
          alert("No magnet links found.");
        }
      });
    });
  });
  

  