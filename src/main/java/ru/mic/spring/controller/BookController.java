package ru.mic.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import ru.mic.spring.repository.BookRepository;

@RestController
public class BookController {
    @Autowired
    private BookRepository bookRepository;
}
