/**
 * Created by Sofia on 06.11.2017.
 */
function checkInfo() {

    if (document.getElementById('myId').value == '' || document.getElementById('name').value == '') {
        alert("Please Provide Details!");
        document.getElementById('myId');
        document.getElementById('name');

        return false;

    } else {

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
    }}

function addNews(){
    if (document.getElementById('addpicture').value == '' || document.getElementById('caption').value == ''
        || document.getElementById('newstext').value == '') {
        alert("Please Provide Details!");
        document.getElementById('addpicture');
        document.getElementById('caption');
        document.getElementById('newstext');

        return false;

    } else{

        document.getElementById('myForm2').reset();
        alert("Новина успішно опублікована!");


    }



        }
