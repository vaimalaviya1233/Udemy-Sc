//gets url of the page and matches it 
var url = window.location.href;//output is  https://icontricks.tech/
var url_array = url.split("/");// output is ['https:', '', 'icontricks.tech', '']
var basicurl = url_array[2];//output should be icontricks.tech;
// console.log(basicurl);
// var absolutesite = ["https://icontricks.tech/", "https://coursevania.com", "https://getintocourse.com/"];
var sites = ["icontricks.tech", "coursevania.com", "getintocourse.com", "udemy.com", "couponscorpion.com"];

for (var i = 0; i < sites.length; i++) {
    if (sites[i] == basicurl) {
        reorder(sites[i]);
    }
}
// var url_array_length = url_array.length;
// var url_array_length_minus_one = url_array_length - 1;
// var url_array_length_minus_two = url_array_length - 2;
