// let color = "#3aa757";
chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color });
  // console.log("Default background color set to %cgreen", `color: ${color}`);
});

function scanTabs() {
  chrome.windows.getAll({ populate: true }, function (windows) {
    windows.forEach(function (window) {
      window.tabs.forEach(function (tab) {
        console.log("Tab ID:", tab.id, "URL:", tab.url);

        var url = window.location.href; //output is  https://icontricks.tech/
        var url_array = url.split("/"); // output is ['https:', '', 'icontricks.tech', '']
        var basicurl = url_array[2]; //output should be icontricks.tech;
        // console.log(basicurl);
        // var absolutesite = ["https://icontricks.tech/", "https://coursevania.com", "https://getintocourse.com/"];
        var sites = [
          "icontricks.tech",
          "coursevania.com",
          "getintocourse.com",
          "udemy.com",
          "studybullet.com",
          "findmycourse.in",
          "couponscorpion.com",
          "all-ebook.info",
          "filebonus.net",
          "zerocost.co.in",
          "coursesity.com",
          "gofreeebooks.in",
          "google.com",
          "coursesbits.com",
          "zapcourses.com",
        ];

        for (var i = 0; i < sites.length; i++) {
          if (sites[i] == basicurl) {
            reorder(sites[i]);
          }
        }
        
        // You can perform any other actions here
      });
    });
  });
}

// Call the function when the extension loads
scanTabs();

// Listen for tab updates (e.g., URL changes)
// chrome.tabs.onUpdated.addListener(scanTabs);

// Listen for new tabs being created
// chrome.tabs.onCreated.addListener(scanTabs);

redirect();
reorder();
