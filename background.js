// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'facebook' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});



var toggle = false;
chrome.pageAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.pageAction.setIcon({path: "on.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"contentscript.js"});
  }
  else{
    chrome.pageAction.setIcon({path: "off.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"alert()"});
  }
});   