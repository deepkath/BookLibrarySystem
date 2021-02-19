const express = require('express');
const { v4: uuidv4 } = require('uuid');
const books = require('../feed/books.json');
const router = express.Router();

let booksMemory = {...books};

// fetch all books data from json feed
router.get('/fetchBooks', (req, res, next)=> {
    res.status(200).json(booksMemory);
});

// fetch details of a particular book id
router.get('/fetchInfo/:id', (req, res, next)=> {
    let bId = req.params.id;
    let bookInfo = booksMemory.all.find(b=> b.id==bId);
    if(bookInfo)    res.status(200).json({bookInfo, success: true});
    else res.status(200).json({success: false})
});

// add new book details
router.post('/addBook', (req, res, next)=> {
    let newPayload = {...req.body.payload, id: uuidv4()};
    booksMemory.all = [...booksMemory.all, newPayload];
    res.status(200).json({...booksMemory, success: true, time: new Date().getTime()});
});

// edit book details
router.post('/editBook', (req, res, next)=> {
    let bookPayload = req.body.payload;
    let bookInfo = {...bookPayload};
    booksMemory.all = booksMemory.all.map(b=> {
        if(b.id==bookPayload.id)
            return {id: b.id, ...bookPayload};
        return b;
    })
    res.status(200).json({bookInfo, success: true, time: new Date().getTime()});
});

module.exports = router;