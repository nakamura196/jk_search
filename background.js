chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'jk_search',
    title: 'Japan Knowledgeで「%s」を検索',
    type: 'normal',
    contexts: ['selection']
  });
});
chrome.contextMenus.onClicked.addListener((info) => {
  chrome.storage.sync.get(
    function(items) {
      var selectedText = info.selectionText;
      
      const url =
        items.url +
        "/search/basic/index.html?q1=" +
        selectedText +
        "&" +
        items.query;
      chrome.tabs.create({
        url
      });
    }
  );
  
});
