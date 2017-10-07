USE test;
DROP TABLE IF EXISTS book;

CREATE TABLE book (
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
  ('Honn', 'some_text', 'isbn-4', 2003, 0, 'Book_four'),
  ('David', 'some_text', 'isbn-5', 2004, 0, 'Book_five'),
  ('Henn', 'www', 'isbn-6', 2005, 0, 'Book-6'),
  ('Mike', 'ssss', 'isbn-7', 2006, 0, 'Book-7'),
  ('Cristof', 'crist', 'isbn-8', 2008, 0, 'Book-8'),
  ('Ccc', 'crist', 'isbn-9', 2009, 0, 'Book-9'),
  ('Pavel', 'pavel life', 'isbn-10', 2008, 0, 'Book-10'),
  ('Mic', 'mic', 'isbn-11', 2008, 0, 'Book-11'),
  ('qqq', 'crist', 'isbn-8', 2008, 0, 'Book-12')
;