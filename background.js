chrome.contextMenus.create({
  title: "Japan Knowledgeで検索",
  type: "normal",
  contexts: ["all"],
  onclick: (info) => {
    chrome.storage.sync.get(
      /*
      {
        url:
          "https://japanknowledge.com/lib/search/basic/index.html?cids=42200",
      },
      */
      function(items) {
        var selectedText = info.selectionText;
        const url =
          items.url +
          "/search/basic/index.html?q1=" +
          selectedText +
          "&" +
          items.query;
        window.open(url);
      }
    );
  },
});
