import './App.css';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb", 
      role: "Devrel Engineer", 
      img: "https://images.pexels.com/photos/7092341/pexels-photo-7092341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Sal", 
      role: "Manager", 
      img: "https://images.pexels.com/photos/7092341/pexels-photo-7092341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "John", 
      role: "Director of Eng.", 
      img: "https://images.pexels.com/photos/7092341/pexels-photo-7092341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Melanie", 
      role: "Software Engineer", 
      img: "https://images.pexels.com/photos/7092341/pexels-photo-7092341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      name: "Corey", 
      role: "The Devops Guy", 
      img: "https://images.pexels.com/photos/7092341/pexels-photo-7092341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      name: "Jake", 
      role: "Senior Intern", 
      img: "https://images.pexels.com/photos/7092341/pexels-photo-7092341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id){
        return {...employee, name: newName, role:newRole};
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  return (
    <div className="App">
      { 
        <>
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee 
                  id = {employee.id}
                  name = {employee.name} 
                  role={employee.role} 
                  updateEmployee={updateEmployee}
                />)

              return <Employee 
                key = {employee.id}
                id={employee.id}
                name = {employee.name} 
                role = {employee.role} 
                img={employee.img}
                editEmployee={editEmployee}
              />
            })}
          </div>

          <AddEmployee newEmployee = {newEmployee}/>
        </>
        }
    </div>
  );
}

export default App;