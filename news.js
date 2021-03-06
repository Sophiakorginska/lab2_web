/**
 * Created by Sofia on 13.11.2017.
 */

window.addEventListener('load', function() {
    function updateOnlineStatus(event) {
        if(isOnline()){
            newsOffline();
        }
    }
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});

var index = 0;

function isOnline() {
    return window.navigator.onLine;
}

function newsOffline() {
    leng = localStorage.length+1;
    for (var i = 1; i < leng; i++){
        news = JSON.parse(localStorage.getItem(i));
        var parentElem = document.getElementById('news-list');
        var out = document.createElement('div');
        out.id = 'news';
        out.innerHTML =
    "<div class='col-md-4' ><div class='news'> <a href='#'> <img class='picture' src='images/news.png'>" +
    "<div class='caption'><p>" + news[0].caption +"</p>" +
        "</div> <p>"+ news[0].text+"</p> </a></div></div>";
        parentElem.appendChild(out);
        localStorage.removeItem(i);
    }
}
