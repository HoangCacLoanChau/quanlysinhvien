// get data from form
function getStudent() {
  var id = document.getElementById("txtMaSV").value;
  var names = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var password = document.getElementById("txtPass").value;
  var math = document.getElementById("txtDiemToan").value * 1;
  var physic = document.getElementById("txtDiemLy").value * 1;
  var chem = document.getElementById("txtDiemHoa").value * 1;
  return new student(id, names, email, password, math, physic, chem);
}
//render to browser
function renderStudent(list) {
  table = document.getElementById("tbodySinhVien");
  contentHTML = "";
  list.forEach((item) => {
    contentHTML += `
            <tr>
            <td>${item.id}</td>
            <td>${item.names}</td>
            <td>${item.email}</td>
            <td>${item.avg()}</td>
            <td>
            <button class="btn btn-warning" onClick="showUpdate('${item.id}')">Edit</button>
            <button class="btn btn-danger" onClick="deleteStudent('${item.id}')">Delete</button>
            </td>
            </tr>`;
  });
  table.innerHTML = contentHTML;
}
// find index
function findStudent(_id, list) {
  return list.findIndex((item) => {
    return item.id == _id;
  });
}
//// show data to form
function showStudent(student) {
  document.getElementById("txtMaSV").value = student.id;
  document.getElementById("txtTenSV").value = student.names;
  document.getElementById("txtEmail").value = student.email;
  document.getElementById("txtPass").value = student.password;
  document.getElementById("txtDiemToan").value = student.math;
  document.getElementById("txtDiemLy").value = student.physic;
  document.getElementById("txtDiemHoa").value = student.chem;
}
// save to ls
function saveLocalStorage(itemName, list) {
  var jsonData = JSON.stringify(list);
  localStorage.setItem(itemName, jsonData);
}
// get from ls
function getLocalStorage(itemName) {
  var arr = [];
  var listFromLS = localStorage.getItem(itemName);
  if (listFromLS != null) {
    listFromLS = JSON.parse(listFromLS);
    return listFromLS.map(function (item) {
      return new student(
        item.id,
        item.names,
        item.email,
        item.password,
        item.math,
        item.physic,
        item.chem,
      );
    });
  } else {
    return arr;
  }
}
