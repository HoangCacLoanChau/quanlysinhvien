function student(id, names, email, password, math, physic, chem) {
  this.id = id;
  this.names = names;
  this.email = email;
  this.password = password;
  this.math = math;
  this.physic = physic;
  this.chem = chem;
  this.avg = function () {
    var result = (math + physic + chem) / 3;
    result = Math.round(result * 100) / 100;
    return result;
  };
}
