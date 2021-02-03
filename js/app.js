'use strict';
var form = document.getElementById('newForm');
var table = document.getElementById('newTable');
var clear = document.getElementById('clear')
StudGrad.all = [];

if (!localStorage.getItem('total')) {
    localStorage.setItem('total', JSON.stringify([]));
} else {
    StudGrad.all = JSON.parse(localStorage.getItem('total'));
}

function randomNumber() {
    return Math.floor(Math.random() * (100 - 0) + 0);
}

function StudGrad(name, course) {
    this.name = name;
    this.course = course;
    this.grade = randomNumber();
    StudGrad.all.push(this);
}



function tableHeader() {
    table.innerHTML = `<tr>
    <th>Student Name</th>
    <th>Student Grade</th>
    <th>Student Course</th>
    </tr>`
}


form.addEventListener('submit', function (event) {
    event.preventDefault()
    var studName = event.target.studName.value;
    var course = event.target.course.value;
    var newData = new StudGrad(studName, course);
    localStorage.setItem('total', JSON.stringify(StudGrad.all));
    newData.tableBody();

})


tableHeader();

StudGrad.prototype.tableBody = function () {
    table.innerHTML = '';
    tableHeader();
    console.log(tempArray)
    var tempArray = JSON.parse(localStorage.getItem('total'));
    for (var i = 0; i < tempArray.length; i++) {
        var tr = document.createElement('tr');


        var td = document.createElement('td');
        td.innerHTML = tempArray[i].name;
        console.log(tempArray[i].name);
        console.log(tempArray)
        tr.appendChild(td);

        var td = document.createElement('td');
        td.innerHTML = this.grade;
        tr.appendChild(td);

        var td = document.createElement('td');
        td.innerHTML = tempArray[i].course;
        tr.appendChild(td);

        table.appendChild(tr);
    }
}


clear.addEventListener('click', function (event) {
    if (event.target.tagName == 'BUTTON' & event.target.id) {
        localStorage.clear();
        localStorage.setItem('total', JSON.stringify([]));
        location.reload();
        tableHeader();
    }
})