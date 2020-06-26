use employeeTracker;
insert into department(name)values("sales"),("engineering"),("finance"),("legal");


SELECT * FROM employeetracker.department;




use employeetracker;
insert into role(title,salary,department_id)values("sales lead",100000,1)
,("salesperson",80000,1),("lead engineer",150000,2),("software engineer",120000,2)
,("accountant",125000,3),("legal team lead",250000,4),("lawyer",190000,4);

SELECT * FROM employeetracker.role;


use employeetracker;
insert into employee(first_name,last_name,role_id)values("John","Doe",1),
("Mike","Chan",1),("Ashley","Rodriguez",4)
,("Kevin","Tupik",4),("Malia","Brown",5),("Sarah","Lourd",7),("Tom","Allen",7);


update employee set manager_id=1 where id = 2  ;
update employee set manager_id = 3 where id = 1 or id = 4 ;
update employee set manager_id = 6 where id = 7 ;
SELECT * FROM employeetracker.employee;
