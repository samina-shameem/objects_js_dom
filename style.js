//initial student object
let student = {
    name: "Samina Salam",
    age: 26,
    subjects: ["Maths", "English", "Science"]
};

//function to display the student object dynamically on the DOM
function displayStudentInfo() {
    document.getElementById('student-name').textContent = student - name;
    document.getElementById('student-age').textContent = student - age;
    document.getElementById('student-subjects').textContent = student - subjects.join(",");

}


//display initial student information
displayStudentInfo();

//handle form subnission to update student information

document.getElementById('update-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const subjects = document.getElementById('subjects').value.split(',');


//update displayed student information
displayStudentInfo();

//clear i/p fields

document.getElementById('name').value = '';
document.getElementById('age').value = '';
document.getElementById('subjects').value = '';
});

//handle the removal of student information

document.getElementById('remove-button').addEventListener('click', function(){
    student = {};//clear student ojct
    displayStudentInfo();//update displayed info
});
