var inquirer = require("inquirer")
//   * Add departments, roles, employees
var mysql = require("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2003",
    database: "employeetracker"
})
connection.connect(function (error) {
    if (error) {
        throw error
    }
    console.log("connection id " + connection.threadId)
    menu()
})
//   * View departments, roles, employees
function menu() {
    inquirer.prompt({
        type: "rawlist",
        message: "Choose a selection",
        name: "Choice",
        choices: ["add departments", "add roles", "add employees", "view departments", "view roles", "view employees", "update employee roles", "Exit"]
    }).then(function (userinput) {
        switch (userinput.Choice) {
            case "add departments":
                addDepartment()
                break
            case "add roles":
                addRole()
                break
            case "add employees":
                addEmployees()
                break
            case "view departments":
                viewDepartments()
                break
            case "view roles":
                viewRoles()
                break
            case "view employees":
                viewEmployees()
                break
            case "update employee roles":
                updateEmployeeRoles()
                break
            case "Exit":
                connection.end()
                break
        }
    })
}
function addDepartment() {
   inquirer.prompt({
       type:"input",
       message:"What is your department name?",
       name:"departmentName"
   }).then(function(userinput){
       connection.query("insert into department (name)values (?)",userinput.departmentName,function(error,results){
           console.log("departmentAdded")
           menu()
       })
   })
}
function addRole() {
}
function addEmployees() {
}
function viewDepartments() {
}
function viewRoles() {
}
function viewEmployees() {
}
function updateEmployeeRoles() {
}
//   * Update employee roles