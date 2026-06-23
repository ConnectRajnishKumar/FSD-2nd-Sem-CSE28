const employees = [];

function addEmployee() {

    const name = document.getElementById("name").value.trim();
    const empId = document.getElementById("empId").value.trim();
    const salary = Number(document.getElementById("salary").value);
    const dept = document.getElementById("dept").value.trim();

    if (!name || !empId || !dept || salary <= 0) {
        alert("Please enter valid employee details.");
        return;
    }

    const exists = employees.some(emp => emp.id === empId);

    if (exists) {
        alert("Employee ID already exists.");
        return;
    }

    employees.push({
        name,
        id: empId,
        salary,
        department: dept
    });

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {

    if (employees.length === 0) {
        output.innerHTML = "<h3>No Employee Records Found</h3>";
        return;
    }

    let html = `
    <h3>Employee Records</h3>
    <table>
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Salary</th>
            <th>Department</th>
        </tr>`;

    employees.forEach(emp => {
        html += `
        <tr>
            <td>${emp.name}</td>
            <td>${emp.id}</td>
            <td>₹${emp.salary}</td>
            <td>${emp.department}</td>
        </tr>`;
    });

    html += "</table>";

    output.innerHTML = html;
}

function filterSalary() {

    const filtered = employees.filter(emp => emp.salary > 50000);

    if (filtered.length === 0) {
        output.innerHTML =
            "<h3>No employee earns more than ₹50,000</h3>";
        return;
    }

    let html = "<h3>Employees with Salary > ₹50,000</h3>";

    filtered.forEach(emp => {
        html += `${emp.name} (₹${emp.salary})<br>`;
    });

    output.innerHTML = html;
}

function totalSalary() {

    const total =
        employees.reduce((sum, emp) => sum + emp.salary, 0);

    output.innerHTML =
        `<h3>Total Salary Payout: ₹${total}</h3>`;
}

function averageSalary() {

    if (employees.length === 0) {
        output.innerHTML =
            "<h3>No Employee Records Available</h3>";
        return;
    }

    const total =
        employees.reduce((sum, emp) => sum + emp.salary, 0);

    const avg = total / employees.length;

    output.innerHTML =
        `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
}

function countDepartment() {

    const deptName =
        prompt("Enter Department Name:");

    if (!deptName) return;

    const count = employees.filter(
        emp =>
        emp.department.toLowerCase() ===
        deptName.toLowerCase()
    ).length;

    output.innerHTML =
        `<h3>Employees in ${deptName}: ${count}</h3>`;
}