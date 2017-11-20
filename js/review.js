/**
 * Created by Sofia on 06.11.2017.
 */
var useLocalStorage = true;

window.addEventListener('load', function () {
    function updateOnlineStatus(event) {
        if (isOnline()) {
            reviewsOffline();
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});

var index = 0;

function isOnline() {
    return window.navigator.onLine;
}

function checkInfo() {

    if (document.getElementById('myId').value == '' || document.getElementById('name').value == '') {
        alert("Please Provide Details!");
        /*  document.getElementById('myId');
         document.getElementById('name')*/
        ;

        return false;

    }
    if (isOnline()) {

        var date = new Date;
        var author = document.getElementById('name').value;
        var text1 = document.getElementById('myId').value;
        var parentElem = document.getElementById('feedback');
        var out = document.createElement('div');
        out.id = 'reviews';
        out.innerHTML =
            "<div class = container>" +
            "<div class='main-text' style='border-bottom: solid 1px'>" +
            "<br>" +
            "<span class='author'>" + author + "</span>" +
            "<span class='date'>" + date + "</span><p><br>" + text1 +
            "</p><br></div></div>";
        parentElem.appendChild(out);
        document.getElementById('myForm').reset();

    }
    else {

        if (useLocalStorage) {
            var date = new Date;
            var author = document.getElementById('name').value;
            var text1 = document.getElementById('myId').value;
            index++;
            var objects = [];
            objects.push({'author': author, 'text': text1, 'date': date});
            localStorage.setItem(index, JSON.stringify(objects));

        }
        else {
            var transaction = db.transaction(["reviews"], "readwrite");
            var store = transaction.objectStore("reviews");
            var review = {
                message: document.getElementById('myId').value,
                author: document.getElementById('name').value,
                time: new Date
            };
            store.add(review);
        }
        document.getElementById('myForm').reset();
    }
}

function reviewsOffline() {
    if (useLocalStorage) {
        leng = localStorage.length + 1;
        for (var i = 1; i < leng; i++) {
            review = JSON.parse(localStorage.getItem(i));
            var parentElem = document.getElementById('feedback');
            var out = document.createElement('div');
            out.id = 'reviews';
            out.innerHTML =
                "<div class='main-text' style='border-bottom: solid 1px'>" +
                "<br>" +
                "<span class='author'>" + review[0].author + "</span>" +
                "<span class='date'>" + review[0].date + "</span><p><br>" + review[0].text +
                "</p><br></div>";
            parentElem.appendChild(out);
            localStorage.removeItem(i);
        }
    }
    else {
        var transaction = db.transaction(["reviews"], "readonly");
        var store = transaction.objectStore("reviews");
        store.openCursor().onsuccess = function (e) {
            var cursor = e.target.result;
            if (cursor) {
                cursor.continue();
                var parentElem = document.getElementById('feedback');
                var out = document.createElement('div');
                out.id = 'reviews';
                out.innerHTML =
                    "<div class='main-text' style='border-bottom: solid 1px'>" +
                    "<br>" +
                    "<span class='author'>" + cursor.value.author + "</span>" +
                    "<span class='date'>" + cursor.value.time + "</span><p><br>" + cursor.value.message +
                    "</p><br></div>";
                parentElem.appendChild(out);
            }
        }
    }
}



