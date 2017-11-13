/**
 * Created by Sofia on 06.11.2017.
 */

window.addEventListener('load', function() {
    function updateOnlineStatus(event) {
        if(isOnline()){
            reviewsOffline();
        }
    }
    window.addEventListener('online',  updateOnlineStatus);
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
        document.getElementById('name')*/;

        return false;

    }
    if (isOnline()){

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

    }else{
        var date = new Date;
        var author = document.getElementById('name').value;
        var text1 = document.getElementById('myId').value;
        index ++;
        var objects = [];
        objects.push({'author':author,'text':text1,'date':date});
        localStorage.setItem(index , JSON.stringify(objects));

    }
}

function reviewsOffline() {
    leng = localStorage.length+1;
    for (var i = 1; i < leng; i++){
        review = JSON.parse(localStorage.getItem(i));
        var parentElem = document.getElementById('feedback');
        var out = document.createElement('div');
        out.id = 'reviews';
        out.innerHTML =
            "<div class = container>" +
            "<div class='main-text' style='border-bottom: solid 1px'>" +
            "<br>" +
            "<span class='author'>" + review[0].author + "</span>" +
            "<span class='date'>" + review[0].date + "</span><p><br>" + review[0].text+
            "</p><br></div></div>";
        parentElem.appendChild(out);
        localStorage.removeItem(i);
    }
}



