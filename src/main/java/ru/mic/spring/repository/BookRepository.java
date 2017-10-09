package ru.mic.spring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.mic.spring.domain.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

}
