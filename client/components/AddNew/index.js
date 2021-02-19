import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import BookUpdateForm from "../common/BookUpdateForm";
import {addBook} from '../../store/actions';
import './index.css';

const AddNew = (props) => {
    let allBooks = useSelector(state => state.booksFeed.updateBookReducer.allBooks);
    let [isAdd, setIsAdd] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(()=> {
        if(isAdd)
            history.push(`/`);
    },[allBooks.time]);
    const addBookHandler = (data)=> {
        const payload = {payload: {...data}};
        dispatch(addBook(payload));
        setIsAdd(true);
    }
    return (
        <BookUpdateForm action={addBookHandler} />
    );
}

export default AddNew;