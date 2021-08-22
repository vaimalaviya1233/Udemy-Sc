function reorder(url) {
    //matches url with website address
    switch (url) {
        case "getintocourse.com":
            getintocourse();
            break;
        case "coursevania.com":
            coursevania();
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
        default:
            break;
    }
}
function getcouponscorpion(){
    coupon = document.querySelector("#post-171638 > div.disablemobileborder.single_top_postproduct.pt20.pb20.border-top.border-grey-bottom.mb30.flowhidden.clearfix > div.right_st_postproduct.floatright.mobileblockdisplay > div > span.rh_button_wrapper > a");
    if (coupon != null) {
        window.location.assign(coupon.href);
    }
}

function getintocourse() {
    //getintocourse.com
    let re_track_btn = document.getElementsByClassName('re_track_btn');
    let blank = document.getElementsByClassName('_blank');
    let free_course = document.getElementsByClassName('maxbutton-get-this-free-course');
    let button = document.getElementsByClassName('wp-block-button__link');
    let readmore = document.getElementsByClassName("readmore");

    if (re_track_btn.length) {
        window.location.assign(document.getElementsByClassName('re_track_btn')[0]["href"]);
        console.log(" found re_track_btn");
    } else if (blank.length) {
        window.location.assign(document.getElementsByClassName('_blank')[0]["href"]);
        console.log("found blank");
    } else if (free_course.length) {
        window.location.assign(document.getElementsByClassName('maxbutton-get-this-free-course')[0]["href"]);
        console.log("found free_course");
    } else if (button.length) {
        window.location.assign(document.getElementsByClassName('wp-block-button__link')[0]["href"]);
        console.log("found button");
    } else if (readmore.length) {
        window.location.assign(document.getElementsByClassName("readmore")[0]["children"][0]["href"]);
        console.log("found readmore");
    } else {
        alert('non exist');
        console.log("nothing found");
    }
}

function udemy() {
    wait(3000);
    var butspan = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_sidebar-container.sidebar-container--fixed--2xu7a > div > div:nth-child(1) > div.sidebar-container--purchase-section--17KRp > div > div.generic-purchase-section--buy-box-main--siIXV > div > div.buy-button.buy-box--buy-box-item--1Qbkl.buy-box--buy-button--1mpz_ > div > button > span");
    var button = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_sidebar-container.sidebar-container--fixed--2xu7a > div > div:nth-child(1) > div.sidebar-container--purchase-section--17KRp > div > div.generic-purchase-section--buy-box-main--siIXV > div > div.buy-button.buy-box--buy-box-item--1Qbkl.buy-box--buy-button--1mpz_ > div > button");
    if ((butspan["innerHTML"] == "Enroll now")) {
        document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div.paid-course-landing-page__container > div.sidebar-container-position-manager > div > div > div > div.course-landing-page_sidebar-container.sidebar-container--fixed--2xu7a > div > div:nth-child(1) > div.sidebar-container--purchase-section--17KRp > div > div.generic-purchase-section--buy-box-main--siIXV > div > div.buy-button.buy-box--buy-box-item--1Qbkl.buy-box--buy-button--1mpz_ > div > button").click();
    }
    else if (butspan["innerHTML"] == "Go to course") {
        window.close();
    }
}

function coursevania() {
    //coursevania.com
    window.location.assign(document.getElementsByClassName('no-price')[0]["href"]);
}

function icontricks() {
    //icontricks.tech
    //checks if element exists by document.querySelector
    function elementExists(selector) {
        return document.querySelector(selector) !== null;
    }

    function getLink(el) {
        var link = el.getAttribute("href");
        return link;
    }

    var selectors = ["#the-post > div.entry-content.entry.clearfix > center > button > a", "#the-post > div.entry-content.entry.clearfix > center > button > a", "#the-post > div.entry-content.entry.clearfix > center > button > a", "#the-post > div.entry-content.entry.clearfix > center > button > a"];

    for (var i = 0; i < selectors.length; i++) {
        if (elementExists(selectors[i])) {
            console.log(selectors[i]);
            window.location.assign(document.querySelector(selectors[i])["href"]);
        }
    }
}


