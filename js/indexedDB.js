/**
 * Created by Sofia on 20.11.2017.
 */
var useLocalStorage = true;

var request = indexedDB.open('db', 3);

request.onerror = function (e) {
    console.log('error');
};

request.onsuccess = function(e){
    useLocalStorage = false;
    var db = e.target.result;
};

request.onupgradeneeded = function(e){
    var db = e.target.result;
    var news = db.createObjectStore("news", {autoIncrement: true});
    var reviews = db.createObjectStore("reviews", {autoIncrement: true});
};