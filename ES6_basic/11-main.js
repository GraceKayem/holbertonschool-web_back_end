Write a function named createEmployeesObject that will receive two arguments:

departmentName (String)
employees (Array of Strings)
export default function createEmployeesObject(departmentName, employees) {

}
The function should return an object with the following format:

{
     $departmentName: [
          $employees,
     ],
}
Execution:

bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$