function changeImage() {
    var image = document.getElementById('myImage1');
    if (image.src.match("yeet")) {
        image.src = "images/baby.jpg";
    }
    else {
        image.src = "images/yeet.jpg";
    }
}