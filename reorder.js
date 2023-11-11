const delay = (ms) => new Promise((res) => setTimeout(res, ms));


function reorder(url) {
  //matches url with website address
  switch (url) {
    case "getintocourse.com":
      getintocourse();
      break;
    case "coursevania.com":
      coursevania();
      break;
    case "zapcourses.com":
      zapcourses();
      break;
    case "icontricks.tech":
      icontricks();
      break;
    case "udemy.com":
      udemy();
      break;
    case "studybullet.com":
      studybullet();
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
    case "coursesbits.com":
      coursesbits();
      break;
    case "findmycourse.in":
      findmycourse();
      break;
    case "google.com":
      google();
      break;
    default:
      break;
  }
}

function findmycourse() {
  console.log("Hello");
  setTimeout(function () {
    console.log("in timeout");
    setTimeout(3000);
    udemyurl = document.getElementsByClassName(
      "bg-indigo-600 my-4 w-full text-center hover:bg-indigo-700 text-white py-2 px-4 rounded-lg inline-block transition duration-200"
    )[0].href;
    window.location.assign(udemyurl);
    console.log(udemyurl);
  }, 3000);
  /* var url = window.location.href;
  var url_array = url.split("/");
  // output is ['https:', '', 'icontricks.tech', '']
  //console.log(url_array);

  var basicurl = url_array[2];
  //output should be icontricks.tech;
  //console.log(basicurl);

  if ((url_array[2] == "findmycourse.in") & (url_array[3] == "course")) {
    //alert("executing.......");
    udemyurl = document.getElementsByClassName("bg-indigo-600 my-4 w-full text-center hover:bg-indigo-700 text-white py-2 px-4 rounded-lg inline-block transition duration-200")[0].href;
    window.location.assign(udemyurl);
  } else {
    alert("not executed");
  } */
}

function studybullet() {
  setTimeout(() => {
    urled = document.getElementsByClassName("enroll_btn")[0].href;
    //https://studybullet.com/enroll/?ZapPath=/course/intro-to-custom-building-blockchains-with-substrate/&amp;ZapUrl=https://www.udemy.com/course/intro-to-custom-building-blockchains-with-substrate/
    urled.split("ZapUrl=");
    window.location.assign(urled[1]);
  }, 4000);
  //<a class="enroll_btn" href="https://studybullet.com/enroll/?ZapPath=/course/intro-to-custom-building-blockchains-with-substrate/&amp;ZapUrl=https://www.udemy.com/course/intro-to-custom-building-blockchains-with-substrate/" target="_blank" rel="noopener">Enroll for Free</a>
  urled = document.getElementsByClassName("enroll_btn");
  //https://studybullet.com/enroll/?ZapPath=/course/intro-to-custom-building-blockchains-with-substrate/&amp;ZapUrl=https://www.udemy.com/course/intro-to-custom-building-blockchains-with-substrate/
  urled.split("ZapUrl=");
  window.location.assign(urled[1]);
}

function coursesbits() {
  setTimeout(() => {
    console.log("coursesbits redirecting");
  }, 5000);
  window.location.assign(
    document.querySelector(
      "body > div.course-page > div.grid-container > div > div.three > a"
    ).href
  );
}
function zapcourses() {
  setTimeout(() => {
    window.location.assign(
      document.getElementsByClassName("enroll_btn")[0]["href"]
    );
  }, 5000);
  window.location.assign(
    document.getElementsByClassName("enroll_btn")[0]["href"]
  );
}

function getcouponscorpion() {
  //setTimeout(8000);
  // document.getElementsByClassName("font120 mt0 mb10 mobfont110 lineheight20 moblineheight15");

  //couponscorpion.com
  //setTimeout(() => {
  //console.log("couponscorpion redirecting");
  //}, 1000);

  coupon = document.getElementsByClassName("btn_offer_block re_track_btn")[0][
    "href"
  ];
  //document.querySelector(
  //"#post-171638 > div.disablemobileborder.single_top_postproduct.pt20.pb20.border-top.border-grey-//bottom.mb30.flowhidden.clearfix > div.right_st_postproduct.floatright.mobileblockdisplay > div > //span.rh_button_wrapper > a"
  //);
  if (coupon != null) {
    console.log(coupon);
    //window.location.assign(coupon["href"]);
  }
  //udemy();
}

function google() {
  setTimeout(() => {
    console.log("google redirecting");
  }, 5000);
  var url = window.location.href;
  var originalurl =
    "https://coursevania.com/courses/complete-inventory-management-in-microsoft-excel-tally-erp9/";
  //                                                 ::://////               ///       ///                                                           ///
  var string =
    "https://www.google.com/search?q=https%3A%2F%2Fcoursevania.com%2Fcourses%2Fcomplete-inventory-management-in-microsoft-excel-tally-erp9%2F&oq=https%3A%2F%2Fcoursevania.com%2Fcourses%2Fcomplete-inventory-management-in-microsoft-excel-tally-erp9%2F+&ie=UTF-8";
  var substring =
    "coursevania.com%2Fcourses%2Fcomplete-inventory-management-in-microsoft-excel-tally-erp9%2F&oq=https%3A%2F%2Fcoursevania.com%2Fcourses%2Fcomplete-inventory-management-in-microsoft-excel-tally-erp9%2F+&ie=UTF-8";
  if (url.includes("coursevania.com")) {
  }
}

function filebonus() {
  //filebonus.net
  setTimeout(() => {
    console.log("filebonus redirecting");
  }, 5000);
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
  setTimeout(() => {
    console.log("all-ebook.info redirecting");
  }, 5000);
  let href = document.querySelector(
    "#dle-content > article > div.screenshots-full > div.std-block-title2 > div > p > strong > a"
  );
  window.location.assign(href["href"]);
}

function getintocourse() {
  //getintocourse.com
  setTimeout(() => {
    console.log("getintocourse redirecting");
  }, 5000);
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
  setTimeout(2000);
  //udemy();
}

function udemy() {
  setTimeout(function () {
    console.log("udemy redirecting");
    console.log("udemy script started");
    var go_to_course = document.querySelector(
      "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_slider-menu-container.sidebar-container--fixed--2xu7a > div > div.slider-menu--show-transactional-cta-container--1Xckm > div.slider-menu--cta-button--3eii3 > div > button"
    ).innerHTML;
    var enroll_btn = document.querySelector(
      "#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_slider-menu-container > div > div.slider-menu--show-transactional-cta-container--1Xckm > div.slider-menu--cta-button--3eii3 > div > button > span"
    );
    if (butspan.innerHTML == "Enroll now") {
      window.alert("Enroll now");
    } else if (go_to_course.includes("Go to")) {
      console.log("Go To Course Match Found ");
      window.close();
    }
  }, 7000);
}

function coursevania() {
  //coursevania.com
  setTimeout(() => {
    console.log("coursevania redirecting");
    window.location.assign(
      document.getElementsByClassName("no-price")[0]["href"]
    );
  }, 1000);
  window.location.assign(
    document.getElementsByClassName("no-price")[0]["href"]
  );
}

function icontricks() {
  //icontricks.tech
  //checks if element exists by document.querySelector
  // function elementExists(selector) {
  //   return document.querySelector(selector) !== null;
  // }
  setTimeout(() => {
    console.log("icontricks.tech redirecting");
  }, 5000);
  function getLink(el) {
    var link = el.getAttribute("href");
    return link;
  }

  var selectors = [
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
  ];

  for (var i = 0; i < selectors.length; i++) {
    if (elementExists(selectors[i])) {
      console.log(selectors[i]);
      window.location.assign(document.querySelector(selectors[i])["href"]);
    }
  }
  setTimeout(2000);
  //udemy();
}
function zerocost() {
  setTimeout(() => {
    console.log("zerocost.co.in redirecting");
  }, 5000);
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
    "#post-1378 > div.post-content > center > button > a",
    "#post-1372 > div.post-content > center > button > a",
    "#post-1374 > div.post-content > center > button > a",
    "#post-1386 > div.post-content > center > button > a",
    "#post-1388 > div.post-content > center > button > a",
    "#post-1390 > div.post-content > center > button > a",
    "#post-1394 > div.post-content > center > button > a",
    "#post-1392 > div.post-content > center > button > a",
    "#post-1144 > div.post-content > center > button > a",
    "#post-1228 > div.post-content > center > button > a",
    "#post-1232 > div.post-content > center > button > a",
    "#post-1234 > div.post-content > center > button > a",
    "#post-1238 > div.post-content > center > button > a",
    "#post-1242 > div.post-content > center > button > a",
    "#post-1247 > div.post-content > center > button > a",
    "#post-1245 > div.post-content > center > button > a",
    "#post-1249 > div.post-content > center > button > a",
    "#post-1251 > div.post-content > center > button > a",
    "#post-1253 > div.post-content > center > button > a",
    "#post-1148 > div.post-content > center > button > a",
    "#post-1152 > div.post-content > center > button > a",
    "#post-1171 > div.post-content > center > button > a",
    "#post-1173 > div.post-content > center > button > a",
    "#post-1159 > div.post-content > center > button > a",
    "#post-1161 > div.post-content > center > button > a",
    "#post-1165 > div.post-content > center > button > a",
    "#post-1167 > div.post-content > center > button > a",
    "#post-1169 > div.post-content > center > button > a",
    "#post-1155 > div.post-content > center > button > a",
    "#post-1157 > div.post-content > center > button > a",
    "#post-1179 > div.post-content > center > button > a",
    "#post-1146 > div.post-content > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#the-post > div.entry-content.entry.clearfix > center > button > a",
    "#post-1150 > div.post-content > center > button > a",
  ];
  var numbers = [];
  for (var i = 1000; i <= 15000; i++) {
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
  setTimeout(2000);
  //udemy();
}
function gofreeebooks() {
  //zerocost.co.in
  setTimeout(() => {
    console.log("gofreeebooks redirecting");
  }, 5000);
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
  //udemy();
}

function coursesity() {
  setTimeout(() => {
    console.log("coursesity redirecting");
  }, 5000);
  if (
    elementExists(
      "#course-detail-data > section > div > div:nth-child(1) > div.col-lg-12.no__padding > div > div > div.col-lg-4 > div > div"
    )
  ) {
    window.location.assign(
      document.getElementsByClassName("trial-btn1")[0].href
    );
  }
}

function elementExists(selector) {
  return document.querySelector(selector) !== null;
}
