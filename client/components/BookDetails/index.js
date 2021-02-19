import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getBookDetails, editBook} from "../../store/actions";
import BookUpdateForm from "../common/BookUpdateForm";

const BookDetails = (props) => {
    let bookDetails = useSelector(state => state.booksFeed.bookDetailReducer.detail);
    //let books = useSelector(state => state.booksFeed.booksFeedReducer.books);
    let [toShowForm, setToShowForm] = useState(false);
    const dispatch = useDispatch();
	useEffect(()=> {
		dispatch(getBookDetails(props.match.params.id));
    },[]);

    useEffect(()=> {
        if(toShowForm) {
            setToShowForm(false);
        }
    },[bookDetails.time]);

    const showUpdateForm = () => {
        setToShowForm(true);
    }
    const editBookHandler = (data)=> {
        const payload = {payload: {...data, id: props.match.params.id}};
        dispatch(editBook(payload));
    }
    return (
        <>
            {bookDetails && bookDetails.success && 
                (<><p>Title: {bookDetails.bookInfo.title}</p>
                <p>Author: {bookDetails.bookInfo.description}</p>
                <p>Author: {bookDetails.bookInfo.author}</p>
                <p>Count: {bookDetails.bookInfo.count}</p>
                <button onClick={showUpdateForm}>Edit details</button>
                {toShowForm && <BookUpdateForm data={bookDetails.bookInfo} action={editBookHandler}/>}
                </>)
            }
        </>
    );
}

export default BookDetails;