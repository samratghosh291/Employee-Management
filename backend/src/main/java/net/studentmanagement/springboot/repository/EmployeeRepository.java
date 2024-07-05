package net.studentmanagement.springboot.repository;


import net.studentmanagement.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    //all crud databases methods


}
