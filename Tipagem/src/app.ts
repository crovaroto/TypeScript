// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

//Forma 1
let employee: {
  code: number,
  name: string
} = {code: 10, name: 'Cássio'};

//Forma 2
interface Employee {
  code: number,
  name: string
}

const employeeObj: Employee = {
  code: 10,
  name: 'Cássio'
} 

//Forma 3 
const employeeType = {} as Employee;
  employeeType.code = 10;
  employeeType.name = 'Cássio';




