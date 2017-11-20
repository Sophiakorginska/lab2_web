/**
 * Created by Sofia on 13.11.2017.
 */

var index = 0;


function isOnline() {
    return window.navigator.onLine;
}


function addNews() {
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

    } else {
        if (useLocalStorage) {
            var picture = target.src;
            var caption = document.getElementById('caption').value;
            var text = document.getElementById('newstext').value;
            index++;
            var objects = [];
            objects.push({"caption": caption, "text": text, "picture": picture});
            localStorage.setItem(index, JSON.stringify(objects));

        }
        else {
            var transaction = db.transaction(["news"], "readwrite");
            var store = transaction.objectStore("news");
            var news1 = {
                img: target.src,
                caption: document.getElementById('caption').value,
                text: document.getElementById('newstext').value
            };
            store.add(news1);
        }
        document.getElementById('myForm2').reset();
        target.src = "images/gallery-880815_960_720.png"
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


