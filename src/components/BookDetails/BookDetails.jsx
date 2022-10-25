import "./bookdetails.css"
import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BOOK_DETAILS_URL } from "../../data"
export const BookDetails = ()=>{
    const[book,setBook]=useState({})
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`${BOOK_DETAILS_URL}/${id}`)
        .then(res=>setBook(res.data))
        .catch(err=>console.log(err))
    },[id])
    return(
        <div className="book-details">
            <div className="book-img">
                <h2>{book.title}</h2>
                <img src={book?.image_url} alt="/" />
            </div>
            <div className="book-description">
                <h2>Description</h2>
                <p>{book?.description}</p>
                <h3>Authors</h3>
                <p>{book?.authors}</p>
                <h2>Genres</h2>
                <p>{book?.genres}</p>
            </div>
        </div>
    )
}