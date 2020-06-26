CREATE DATABASE EmployeeTracker; 
use EmployeeTracker;
create table department(
id integer not null auto_increment,
name varchar(30),
primary key(id)
);


create table role(
id integer not null auto_increment,
title varchar(30),
salary decimal(10,2),
department_id integer,
primary key(id)
);

create table employee(
id integer not null auto_increment,
first_name varchar(30),
last_name varchar(30),
role_id integer,
manager_id integer,
primary key(id)
);



