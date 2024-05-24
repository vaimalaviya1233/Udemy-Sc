
chrome.storage.local.get(
  {
    settings: {
      status: true
    },
  },function (data) {
    document.getElementById("status").checked = data.settings.status;
  }
);

document.querySelectorAll("input").forEach(function (element) {
  element.addEventListener("change", function () {
    chrome.storage.local.set(
      {
        settings: {
          status: document.getElementById("status").checked,
        },
      },
      function () {
        // Show confirmation message
        M.toast({
          html: "Saved!",
          displayLength: 2000,
          classes: "rounded",
        });
      }
    );
  });
});

/* // Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
// When the button is clicked, inject setPageBackgroundColor into current page
 changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
}); 
// The body of this function will be execuetd as a content script inside the
// current page
 function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
}); 
 import("./scripts/materialize.js");

const M = require('scripts/materialize.js');
//var instance = M.Collapsible.getInstance(elem);
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, 'inDuration');
  instances.open(0);
});
 */
