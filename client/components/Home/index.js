import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { getBooksFeed } from "../../store/actions";
import "./index.css";
const Home = () => {
	let books = useSelector(state => state.booksFeed.booksFeedReducer.books);
	let [bookSeachStr, setBookSeachStr] = useState("");
	let [filteredBooks, setFilteredBooks] = useState([]);
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(()=> {
		if(!books.length)
			dispatch(getBooksFeed());
		if(bookSeachStr && books.length) {
			setFilteredBooks(books.filter(b=> b.title.toLowerCase().includes(bookSeachStr.toLowerCase())));
		}
	},[bookSeachStr]);

	const viewDetails = (bId)=> {
		history.push(`/details/${bId}`);
	}
	return (
		<>
			<div className="row text-center">
				<div className="col-6">
					<div className="search-parent"><input type="text" placeholder="Keep Searching..." id="book-search-inp" autoComplete="off" 
						onChange={(e)=> setBookSeachStr(e.target.value)}/></div>
				</div>
			</div>
			<div className="row">
				{bookSeachStr && (
					<div className="col-12">
					
						<h4>Filtered books by title : {bookSeachStr}</h4>
						{filteredBooks.length ? (
							<ul className="filtered-book-list book-list">
							{
								filteredBooks.map((fb,ind)=> {
									return (
										<li key={ind}>
											<span>{`${fb.title} | ${fb.author} | ${fb.count}`}</span>
											<a onClick={()=>viewDetails(fb.id)}>View more</a>
										</li>
									)
								})
							}
							</ul>
						) : (<span>No book by this title</span> )}
					</div>
				)}
				<div className="col-6">
					<h4>Available Books</h4>
					{books && books.length>0 && books.find(b => b.count) ? 
						(<>
							<ul className="available-book-list book-list">
							{
								books.filter(b=> b.count).map((book,ind) => { 
									return (
										<li key={ind}>
											<span>{book.title}</span>
											<a onClick={()=>viewDetails(book.id)}>View more</a>
										</li>
									);
								})
							}
							</ul>
						</>
						) : (
							<span>No book available ... such a weird situation</span> 
						)
					}
				</div>
				<div className="col-6">
					<h4>Stocked out</h4>
					{books && books.length>0 && books.find(b => !b.count) ? 
						(<>
							<ul className="stocked-out-list book-list">
							{
								books.filter(b=> !b.count).map((book,ind) => { 
									return (
										<li key={ind}>
											<span>{book.title}</span>
											<a onClick={()=>viewDetails(book.id)}>View more</a>
										</li>
									);
								})
							}
							</ul>
						</>
						) : (
							<span>Everything stocked up</span> 
						)
					}
				</div>
			</div>
			
		</>
	);
}
export default Home;