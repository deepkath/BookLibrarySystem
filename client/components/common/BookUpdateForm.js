import React, {useState, useEffect} from "react";
import {useSelector} from 'react-redux';

const BookUpdateForm = (props) => {
    let bookData = props.data || {};
    let [title, setTitle] = useState(bookData.title || "");
    let [author, setAuthor] = useState(bookData.author || "");
    let [description, setDescription] = useState(bookData.description || "");   
    let [count, setCount] = useState(bookData.count || 0);
    let isEditFlow = (bookData.title && bookData.author);


    return (
        <div className="row text-center add-form">
            <div className="col-12">
                <input type="text" readOnly={isEditFlow} placeholder="Book Title" defaultValue={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="col-12">
                <textarea placeholder="Book Description" rows="4" cols="50" defaultValue={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
            </div>
            <div className="col-12">
                <input type="text" readOnly={isEditFlow} placeholder="Author Name" defaultValue={author} onChange={(e)=> setAuthor(e.target.value)}/>
            </div>
            <div className="col-12">
                <input type="number" placeholder="Count" defaultValue={count} onChange={(e)=> setCount(e.target.value)}/>
            </div>
            <div className="col-12">
                <button className="btn-cta" onClick={() => props.action({title, description, author, count})}>{isEditFlow ? 'Edit' : 'Add'} Book</button>
            </div>
        </div>
    )
}

export default BookUpdateForm;