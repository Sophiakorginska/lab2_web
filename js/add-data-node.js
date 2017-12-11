/**
 * Created by Sofia on 11.12.2017.
 */
$.ajax({
    url: 'http://localhost:8080/api/posts',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawNewPost(data);
        console.log(data);
    }
});

function drawNewPost(data) {
    for (var i = 0; i < data.length; i++) {
        PostDetails(data[i]);
        console.log(data[i]);
    }
}

function PostDetails(rowData) {
    var parentElem = document.getElementById('news-list');
    var out = document.createElement('div');
    out.id = 'news';
    out.innerHTML =
        "<div class='col-md-4' ><div class='news'> <a href='#'> <img class='picture' src='" + cursor.value.img + "'>" +
        "<div class='caption'><p>" + cursor.value.caption + "</p>" +
        "</div> <p>" + cursor.value.text + "</p> </a></div></div>";
    parentElem.appendChild(out);
}


