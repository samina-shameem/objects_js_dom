//initial student object
let student = {
    name: "Samina Salam",
    age: 26,
    subjects: ["Maths", "English", "Science"]
};

//function to display the student object dynamically on the DOM
function displayStudentInfo() {
    document.getElementById('student-name').textContent = student.name || "Not Available";
    document.getElementById('student-age').textContent = student.age || "Not Available";
    document.getElementById('student-subjects').textContent = student.subjects ? student.subjects.join(", ") : "Not Available";

}


//display initial student information

displayStudentInfo();

//handle form subnission to update student information

document.getElementById('update-form').addEventListener('submit', function (event) {
    event.preventDefault();
    //console.log("Update button clicked");

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());
    const subjects = document.getElementById('subjects').value.trim().split(',');

    //console.log("Name:", name, "Age:",age, "Subjects:", subjects);


    //update the student object with new values
    student.name = name || student.name;
    student.age = age || student.age;
    student.subjects = subjects[0] ? subjects : student.subjects;



    //update displayed student information
    displayStudentInfo();

    //clear i/p fields

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('subjects').value = '';
});

//handle the removal of student information

document.getElementById('remove-button').addEventListener('click', function () {
    student = {};//clear student ojct
    displayStudentInfo();//update displayed info
});
