USE test;
DROP TABLE IF EXISTS book;

CREATE TABLE `test`.`book` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(100) NULL,
  `description` VARCHAR(255) NULL,
  `isbn` VARCHAR(20) NULL,
  `print_year` INT NULL,
  `read_already` BIT NULL DEFAULT 0,
  `title` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));

INSERT INTO test.book (author, description, isbn, print_year, read_already, title) VALUES
  ('Helly', 'description', 'isbn-1', 2000, 0, 'Book_one'),
  ('Ann', 'some_desc', 'isbn-2', 2001, 0, 'Book_two'),
  ('Mike', 'some_text', 'isbn-3', 2002, 0, 'Book_three'),
  ('Honn', 'some_text', 'isbn-4', 2003, 0, 'Book_four');