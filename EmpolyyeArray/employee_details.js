const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];


    function displayEmployees(){
      const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
    }

    function calculateTotalSalaries(){
      const total_sal = employees.reduce((total,employees) => total + employees.salary,0);
      alert(`Total Salary is ${total_sal}`);
    }

    function displayHREmployees(){
      const HRemp = employees.filter((employees)=>{
        return employees.department === 'HR';
      });
    const mapp = HRemp.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById("display_HR").innerHTML = mapp;
      
    }

    function findEmployeeById(ID){
      const foundEmployee = employees.find(employees => employees.id === ID);
      if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
      }

    }