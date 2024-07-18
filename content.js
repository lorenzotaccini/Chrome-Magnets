// Trova tutti i link magnetici nella pagina
function getMagnetLinks() {
    const links = document.querySelectorAll('a[href^="magnet:"]');
    const magnetLinks = Array.from(links).map(link => link.href);
    return magnetLinks;
  }
  
  // Invia i link magnetici al background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getMagnetLinks") {
      const magnetLinks = getMagnetLinks();
      sendResponse({ magnetLinks: magnetLinks });
    }
  });
  