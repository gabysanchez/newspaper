CREATE USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY 'admin';

GRANT ALL PRIVILEGES ON * . * TO 'admin'@'%';

USE newspaper;

CREATE TABLE reporters (
    id int not null AUTO_INCREMENT,
    name varchar(20),
    birthDate date,
    PRIMARY KEY (id));

CREATE TABLE resources (
    id int not null AUTO_INCREMENT,
    url varchar(100),
    PRIMARY KEY (id));

