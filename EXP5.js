let employees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    employees.push({ name, id, salary, dept });
    if (name === "" || id === "" || isNaN(salary)) {
        alert("Please fill in all fields with valid information.");
        return;
    }
    let employee = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    }
    employees.push(employee);
    alert("Employee added successfully!");
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";

}
function displayEmployees() {
    let output = "<h2>Employee List</h2><ul>";
    employees.forEach(emp => {
        output += 
         Name: ${emp.name}, 
            ID: ${emp.id},
            Salary: ${emp.salary},
            Department: ${emp.department}
            <br>`;
    