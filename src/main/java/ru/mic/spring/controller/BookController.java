package ru.mic.spring.controller;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.mic.spring.domain.Book;
import ru.mic.spring.repository.BookRepository;
import ru.mic.spring.repository.HibernateSessionFactory;

import java.util.List;

@RestController
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    private static SessionFactory sessionFactory = HibernateSessionFactory.getSessionFactory();

    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public List<Book> getAll(@RequestParam("from") int from,
                             @RequestParam("step") int step,
                             @RequestParam("name") String name) throws Exception {
        String query;
        if (name == null || name.isEmpty()) query = "SELECT * FROM book";
        else query = "SELECT * FROM book WHERE author LIKE '%" + name + "%'";

        Session session = sessionFactory.getCurrentSession();
        if ((session.getTransaction() != null ))
            session.getTransaction().begin();
        List<Book> list = session.createSQLQuery(query).addEntity(Book.class).setFirstResult(from).setMaxResults(step).list();
        session.getTransaction().commit();
        return list;
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable Long id) {
        bookRepository.delete(id);
    }

    @RequestMapping(value = "/size", method = RequestMethod.GET)
    public long size(@RequestParam("name") String name) {
        return bookRepository.count();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void addBook(@RequestBody Book book) {
        bookRepository.save(book);
    }
}
