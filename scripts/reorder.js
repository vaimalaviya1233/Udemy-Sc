function reorder(url) {
  //if (Storage.getItem("status") == "true") {
  //matches url with website address
  switch (url) {
    case "getintocourse.com":
      getintocourse();
      break;
    case "coursevania.com":
      coursevania();
      break;
    case "coursesbits.com":
      coursesbits();
      break;
    case "icontricks.tech":
      icontricks();
      break;
    case "udemy.com":
      udemy();
      break;
    case "couponscorpion.com":
      getcouponscorpion();
      break;
    case "all-ebook.info":
      allebook();
      break;
    case "filebonus.net":
      filebonus();
      break;
    case "zerocost.co.in":
      zerocost();
      break;
    case "coursesity.com":
      coursesity();
      break;
    case "gofreeebooks.in":
      gofreeebooks();
      break;
    case "google.com":
      google();
      break;
    case "zapcourses.com":
      zapcourses();
      break;
    case "moddingunited.xyz":
      moddingunited();
      break;
    case "studybullet.com":
      studybullet();
      break;
    default:
      console.log(url + "  not found --___-- ");
      break;
  }
  //}
}
function getcouponscorpion() {
  //couponscorpion.com
  setTimeout(8000);
  var aTags = document.getElementsByTagName("a");
  var searchText = "GET COUPON CODE";
  var found = null;
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].outerText == searchText) {
      found = aTags[i];
      console.log(aTags[i]);
      found.click();
      // window.location.assign(found.getAttribute("href"));
      setTimeout(2000);
      udemy();
      setTimeout(9000);
      break;
    }
  }
  if (found == null) {
    console.log(" null ");
  }
}

function coursesbits() {
  document.getElementById("enroll").click();
}

function google() {
  var url = window.location.href;
  if (url.includes("coursevania.com")) {
    console.log(
      url
        .slice(url.indexOf("coursevania"), url.indexOf("&"))
        .replaceAll("%3A", ":")
        .replaceAll("%2F", "/")
    );
    var reworked = url
      .slice(url.indexOf("coursevania.com"))
      .replaceAll("%3A", ":")
      .replaceAll("%2F", "/");
    window.location.replace(
      "https://" +
        url
          .slice(url.indexOf("coursevania"), url.indexOf("&"))
          .replaceAll("%3A", ":")
          .replaceAll("%2F", "/")
    );
  }
  if (url.includes("coursesora.com")) {
    console.log(
      url.slice(url.slice(url.indexOf("coursesora", url.indexOf(""))))
    );
    var reworked = url.slice(url.indexOf("coursesora", url.indexOf("")));
    window.location.replace(
      "https://" + url.slice(url.indexOf("coursesora", url.indexOf("")))
    );
  }
  if (url.includes("zapcourses.com")) {
    console.log(
      url.slice(url.slice(url.indexOf("zapcourses", url.indexOf(""))))
    );
    var reworked = url.slice(url.indexOf("zapcourses", url.indexOf("")));
    window.location.replace(
      "https://" + url.slice(url.indexOf("zapcourses", url.indexOf("")))
    );
  }
  if (url.includes("studybullet.com")) {
    console.log(
      url.slice(url.slice(url.indexOf("studybullet", url.indexOf(""))))
    );
    var reworked = url.slice(url.indexOf("studybullet", url.indexOf("")));
    window.location.replace(
      "https://" + url.slice(url.indexOf("studybullet", url.indexOf("")))
    );
  }
}

function filebonus() {
  //filebonus.net
  var firstredirect = document.querySelector(
    "#container > div > div.row > div > form > table > tbody > tr > td:nth-child(2) > center > input[type=submit]"
  );
  var secondredirect = document.querySelector("#downloadbtn");
  if (firstredirect != null) {
    firstredirect.click();
  } else if (secondredirect != null) {
    setTimeout(16000);
    secondredirect.click();
  } else {
    let link = document.querySelector(
      "#container > div.container.download_page.pt30 > div > div.col-md-8 > div.link_generated > div > center > h5 > font > b > a"
    );

    alert("nothing found");
    setTimeout(5000);
  }
}

function allebook() {
  //all-ebook.info
  setTimeout(1000);
  let href = document.querySelector(
    "#dle-content > article > div.screenshots-full > div.std-block-title2 > div > p > strong > a"
  );
  window.location.assign(href["href"]);
}

function getintocourse() {
  //getintocourse.com
  let re_track_btn = document.getElementsByClassName("re_track_btn");
  let blank = document.getElementsByClassName("_blank");
  let free_course = document.getElementsByClassName(
    "maxbutton-get-this-free-course"
  );
  let button = document.getElementsByClassName("wp-block-button__link");
  let readmore = document.getElementsByClassName("readmore");

  if (re_track_btn.length) {
    window.location.assign(
      document.getElementsByClassName("re_track_btn")[0]["href"]
    );
    console.log(" found re_track_btn");
  } else if (blank.length) {
    window.location.assign(
      document.getElementsByClassName("_blank")[0]["href"]
    );
    console.log("found blank");
  } else if (free_course.length) {
    window.location.assign(
      document.getElementsByClassName("maxbutton-get-this-free-course")[0][
        "href"
      ]
    );
    console.log("found free_course");
  } else if (button.length) {
    window.location.assign(
      document.getElementsByClassName("wp-block-button__link")[0]["href"]
    );
    console.log("found button");
  } else if (readmore.length) {
    window.location.assign(
      document.getElementsByClassName("readmore")[0]["children"][0]["href"]
    );
    console.log("found readmore");
  } else {
    alert("non exist");
    console.log("nothing found");
  }
  udemy();
}

function coursevania() {
  //coursevania.com
  if (
    elementExists(
      "#main > div > div > div > div.col-md-4.col-sm-5.udemy-sidebar-holder > div.stm-lms-course__sidebar-holder > div > div.stm_lms_udemy__affiliate_btn > div > a"
    )
  ) {
    window.location.assign(
      document.getElementsByClassName("no-price")[0]["href"]
    );
    udemy();
  }
}

function icontricks() {
  //icontricks.tech
  //checks if element exists by document.querySelector
  // function elementExists(selector) {
  //   return document.querySelector(selector) !== null;
  // }

  /* function getLink(el) {
    var link = el.getAttribute("href");
    return link;
  }

  var selectors = [
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#post-5220 > div.article-content.clearfix > div.entry-content.clearfix > center > button > a",
    "#post-5223 > div.article-content.clearfix > div.entry-content.clearfix > center > button > a",
  ];

  for (var i = 0; i < selectors.length; i++) {
    if (elementExists(selectors[i])) {
      console.log(selectors[i]);
      window.location.assign(document.querySelector(selectors[i])["href"]);
    }
  }
  udemy(); */

  function elementExists(selector) {
    return document.querySelector(selector) != null;
  }

  function getLink(el) {
    var link = el.getAttribute("href");
    return link;
  }

  var selectors = [
    "#post-1378 > div.article-content.clearfix > div.entry-content.clearfix > center > button > a",
  ];
  var numbers = [];
  for (var i = 0; i <= 12000; i++) {
    numbers.push(i);
    selectors.push(
      "#post-" +
        i +
        " > div.article-content.clearfix > div.entry-content.clearfix > center > button > a"
    );
    //"#post-5220 > div.article-content.clearfix > div.entry-content.clearfix > center > button > a"
  }
  console.log(selectors);
  console.log(numbers);

  for (var i = 0; i < selectors.length; i++) {
    if (elementExists(selectors[i])) {
      console.log(selectors[i]);
      window.location.assign(document.querySelector(selectors[i])["href"]);
    }
  }
  setTimeout(2000);
  udemy();
}
function zerocost() {
  //zerocost.co.in
  //checks if element exists by document.querySelector
  function elementExists(selector) {
    return document.querySelector(selector) != null;
  }

  function getLink(el) {
    var link = el.getAttribute("href");
    return link;
  }

  var selectors = [
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#post-1150 > div.post-content > center > button > a",
  ];
  var numbers = [];
  for (var i = 1000; i <= 5000; i++) {
    numbers.push(i);
    selectors.push("#post-" + i + " > div.post-content > center > button > a");
  }
  console.log(selectors);
  console.log(numbers);

  for (var i = 0; i < selectors.length; i++) {
    if (elementExists(selectors[i])) {
      console.log(selectors[i]);
      window.location.assign(document.querySelector(selectors[i])["href"]);
    }
  }
  udemy();
}
function gofreeebooks() {
  //zerocost.co.in
  //checks if element exists by document.querySelector
  function elementExists(selector) {
    return document.querySelector(selector) != null;
  }

  function getLink(el) {
    var link = el.getAttribute("href");
    return link;
  }

  var selectors = ["#post-1378 > div.post-content > center > button > a"];
  var numbers = [];
  for (var i = 0; i <= 5000; i++) {
    numbers.push(i);
    selectors.push(
      "#post-" + i + " > div.entry-content.si-entry > center > button > a"
    );
  }
  console.log(selectors);
  console.log(numbers);

  for (var i = 0; i < selectors.length; i++) {
    if (elementExists(selectors[i])) {
      console.log(selectors[i]);
      window.location.assign(document.querySelector(selectors[i])["href"]);
    }
  }
  setTimeout(2000);
  // udemy();
}

function coursesity() {
  if (
    elementExists(
      "#course-detail-data > section > div > div:nth-child(1) > div.col-lg-12.no__padding > div > div > div.col-lg-4 > div > div"
    )
  ) {
    window.location.assign(
      document.getElementsByClassName("trial-btn1")[0].href
    );
  }
  udemy();
}
function studybullet() {
  /* if (
    elementExists("#post-41174 > div.entry-content.clr > div.button_cont > a")
  ) {
    window.location.assign(
      document.getElementsByClassName("enroll_btn")[0].href
    );
  }
  udemy(); */

  var selectors = [
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#post-1150 > div.post-content > center > button > a",
  ];
  var numbers = [];
  for (var i = 0; i <= 100000; i++) {
    numbers.push(i);
    selectors.push(
      "#post-" + i + " > div.entry-content.clr > div.button_cont > a"
    );
  }
  console.log(selectors);
  console.log(numbers);

  for (var i = 0; i < selectors.length; i++) {
    if (elementExists(selectors[i])) {
      console.log(selectors[i]);
      window.location.assign(document.querySelector(selectors[i])["href"]);
    }
  }
}

function elementExists(selector) {
  return document.querySelector(selector) !== null;
}

function zapcourses() {
  let enrollBtn = document.getElementsByClassName("enroll_btn");
  // example redirect link: https://zapcourses.com/enroll/?path=/negotiation-skills-become-a-master-of-negotiation/&url=https://www.udemy.com/course/negotiation-how-to-craft-agreements-that-give-everyone-more-u/?couponCode=A414527A5B304F76092F
  //make it redirect to the udemy link
  //https://zapcourses.com/enroll/?ZapPath=/media-training-for-print-online-interviews-get-great-quotes/&ZapUrl=https://www.udemy.com/course/media-training-for-print-interviews-and-online-publications/?couponCode=666200FF37461759A861
  if (enrollBtn.length > 0) {
    let redirectLink = enrollBtn[0].href;
    let udemyLink = redirectLink.split("ZapUrl=")[1];
    console.log(udemyLink);
    window.location.assign(udemyLink);
    timeout(2000);
    udemy();
  }
  //if (enrollBtn.length > 0) {
  //  window.location.assign(enrollBtn[0].href);
  //}
}

function moddingunited(){
  var url = window.location;
  var redirectLink = "";
  //https://moddingunited.xyz/download/?elif/kpa.detinUgniddoM_0.01.8v_htamotohP/321bvg436b480w6/elif/moc.erifaidem.www//:sptth
  //https://www.mediafire.com/file/6w084b634gvb123/Photomath_v8.10.0_ModdingUnited.apk/file
  if((url.hostname === "moddingunited.xyz") && (url.pathname === "/download/")){
    var redirectUnLink = url.search;
    for(let i = redirectUnLink.length; i > 0; i-- ){
      redirectLink += redirectUnLink.charAt(i-1);
    }
    console.log(redirectLink);
    window.location.assign(redirectLink);
  }
}
/* function udemy() {
  setTimeout(5000);
  var buttons = document.getElementsByTagName("button");
  var searchText = "Enroll now";
  var found = null;
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].outerText == searchText) {
      found = buttons[i];
      console.log(buttons[i]);
      // found.click();
      break;
    }
  }
  if (found == null) {
    console.log(" null ");
  }
} */

function udemy() {
  window.setTimeout(5000);
  var currunturl = window.location.href;
  if (currunturl.includes("udemy.com/course/")) {
    var buttons = document.getElementsByClassName(
      "styles--btn--express-checkout--28jN4"
    );
    var innerValue = buttons[0].children[0].innerHTML;
    if (innerValue == "Go to course" || innerValue == "Buy this course") {
      window.close();
    }
    if (innerValue == "Enroll now" || innerValue != "Go to course") {
      var buttons = document.getElementsByClassName(
        "styles--btn--express-checkout--28jN4"
      );
      // redirect webpage from https://www.udemy.com/course/complete-unity-2d-megacourse-beginner-to-expert/?couponCode=544481A5D8FEB412ED80 which has course id in body tag in html to https://www.udemy.com/cart/checkout/express/course/4713448/?discountCode=544481A5D8FEB412ED80
      //                       https://www.udemy.com/cart/checkout/express/course/4713448/?discountCode=544481A5D8FEB412ED80
      var body = document.getElementsByTagName("body");
      var courseid = body[0].getAttribute("data-clp-course-id");
      var url = window.location.href;
      var discountcode = url.slice(url.indexOf("couponCode=") + 11);
      var newurl =
        "https://www.udemy.com/cart/checkout/express/course/" +
        courseid +
        "/?discountCode=" +
        discountcode;
      console.log(newurl);
      window.location.assign(newurl);
    }
  } else if (currunturl.includes("udemy.com/cart/checkout/express/course/")) {
    window.setTimeout(5000);

    //window.location.replace(newurl);
    var checkout = document.getElementsByClassName(
      "checkout-button--checkout-button--button--1S-XD"
    );
    if (checkout.length) {
      checkout[0].click();
    }
  }
}
