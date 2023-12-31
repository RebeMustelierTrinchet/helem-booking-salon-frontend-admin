import styles from './CommentsPage.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getComments} from "../../api/comments-api"
import { Button } from 'react-bootstrap'

export default function CommentsPage(){

    const [comments, setComments] = useState([])

    useEffect(() => {
        async function fetchComments(){
            getComments(setComments)
        }

        fetchComments()
    }, [])

    return (
        <div>
            <div> New Comments Page</div>
            <Button><Link to='/create-comment' style={{color: "white"}}>Crear nuevo comentatio</Link></Button>

            {comments && comments.length? <>
            {
            comments.map((comment, index) => {
               return (
                <p key={index}>
                    {comment.title} <br />
                    {comment.author} <br />
                    {comment.message}
                </p>
               ); 
            })  
             } </>: <p>0 comentarios</p>}
        </div>
    );
}