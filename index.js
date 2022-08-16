// Write your solution in this file!
const employee = {
    name: 'value1',
    streetAddress: 'value2'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    //let deleteFromEmployeeByKey = delete employee.key;
    //return employee.assign({}, employee, {[key]:});
    return Object.assign({}, delete employee.key)
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee
   
    
}

