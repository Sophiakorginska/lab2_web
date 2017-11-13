/**
 * Created by Sofia on 13.11.2017.
 */

var index = 0;

function isOnline() {
    return window.navigator.onLine;
}

function addNews(){
    if (document.getElementById('addpicture').value == '' || document.getElementById('caption').value == ''
        || document.getElementById('newstext').value == '') {
        alert("Please Provide Details!");
        document.getElementById('addpicture');
        document.getElementById('caption');
        document.getElementById('newstext');

        return false;

    }
    if (isOnline()) {


        document.getElementById('myForm2').reset();
        alert("Новина успішно опублікована!");

    }else   {
        var picture = document.getElementById('addpicture').value;
        var caption = document.getElementById('caption').value;
        var text = document.getElementById('newstext').value;
        index ++;
        var objects = [];
        objects.push({"caption":caption,"text":text,"picture":picture});
        localStorage.setItem(index , JSON.stringify(objects));
        document.getElementById('myForm2').reset();

    }
}

function showImage(src, target) {
    var fr = new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function (e) {
        target.src = this.result;
    };
    src.addEventListener("change", function () {
        // fill fr with image data
        fr.readAsDataURL(src.files[0]);
    });
}

var src = document.getElementById("addpicture");
var target = document.getElementById("target");
showImage(src, target);


