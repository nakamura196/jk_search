// Saves options to chrome.storage
function save_options() {
  var url = document.getElementById("url").value;
  var query = document.getElementById("query").value;
  chrome.storage.sync.set(
    {
      url,
      query,
    },
    function() {
      alert("保存しました。");
    }
  );
}

function add_lib() {
  document.getElementById("url").value = "https://japanknowledge.com/lib";
}

function add_psnl() {
  document.getElementById("url").value = "https://japanknowledge.com/psnl";
}

function add_r() {
  document.getElementById("query").value = "cids=42200";
}

function restore_options() {
  chrome.storage.sync.get(
    {
      url: "https://japanknowledge.com/lib", ///search/basic/index.html?cids=42200
      query: "cids=42200",
    },
    function(items) {
      document.getElementById("url").value = items.url;
      document.getElementById("query").value = items.query;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
document.getElementById("lib").addEventListener("click", add_lib);
document.getElementById("psnl").addEventListener("click", add_psnl);
document.getElementById("r").addEventListener("click", add_r);
