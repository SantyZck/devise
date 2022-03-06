CREATE DATABASE database_devise;

USE database_devise;

--Users Table
CREATE TABLE users(
	id INT(11) NOT NULL,
	username VARCHAR(16) NOT NULL,
	password VARCHAR(60) NOT NULL,
	fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
	ADD PRIMARY KEY (id);

ALTER TABLE users
	MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

--Links Table
CREATE TABLE links (
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE links
	ADD PRIMARY KEY (id);

ALTER TABLE links
	MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

	DESCRIBE links;

-- Table for todos
CREATE TABLE todos (
	id INT(11) NOT NULL,
	content VARCHAR(150),
	user_id INT(11),
	created_at timestamp NOT NULL DEFAULT current_timestamp,
	CONSTRAINT fl_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE todos
	ADD PRIMARY KEY (id);

ALTER TABLE todos
	MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE todos;