
document.getElementById('list').addEventListener('click', function (event) {

    event.target.parentNode.removeChild(event.target);
})


document.getElementById('add-btn').addEventListener('click', function () {

    var getUl = document.getElementById('list');

    var li = document.createElement('li');


    li.classList = 'item';
    li.innerText = 'Fuck of the deligation';
    getUl.appendChild(li);





})

