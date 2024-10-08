/*
- Employee tracking app- 
Create a class to track the employees of a company:
1. Use first names, last names, and the number of years worked as values in the
constructor.

2. Create two or more people with values for their first names, last names, and
the number of years they've worked at the company. Add the people into an
array.

3. Set up a prototype to return the details of the person's first and last names
and how long they've worked at the company.

4. Iterate the contents of the array to output the results into the console, adding
some text to make the output a full sentence.
*/

class Employees {
    constructor(firstName, lastName, yearsOfService){
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsOfService = yearsOfService;

    }
}

//create three people
let x = new Employees("Mike", "Otieno", 14);
let y = new Employees("Rose", "Kamau", 10);
let z = new Employees("Mary", "Lesan", 34);

//Add the three people to an array
employeesArray = [x, y, z];

Employees.prototype.printEmployeeDetails = function() {
    for (let i=0; i<3; i++){
            console.log(employeesArray[i]);
    }
        
}

x.printEmployeeDetails();