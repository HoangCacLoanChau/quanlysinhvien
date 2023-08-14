// get list from local storage
var studentList = getLocalStorage("LIST");
console.log("🚀 ~ studentList:", studentList);
renderStudent(studentList);

function addStudent() {
  var newStudent = getStudent();
  studentList.push(newStudent);
  console.log(studentList);
  renderStudent(studentList);
  saveLocalStorage("LIST", studentList);
}

function showUpdate(id) {
  var index = findStudent(id, studentList);
  showStudent(studentList[index]);
}

function edit() {
  var updateStudent = getStudent();
  var index = findStudent(updateStudent.id, studentList);
  studentList[index] = updateStudent;
  renderStudent(studentList);
  saveLocalStorage("LIST", studentList);
}
function deleteStudent(id) {
  var index = findStudent(id, studentList);
  studentList.splice(index, 1);
  saveLocalStorage("LIST", studentList);
  renderStudent(studentList);
}
