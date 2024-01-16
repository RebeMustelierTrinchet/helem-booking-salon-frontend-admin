import styles from './CommentsPage.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getComments} from "../../api/comments-api"
import { Button } from 'react-bootstrap'
import CommentsTable from '../../components/commentsTable/commentsTable'

export default function CommentsPage(){

    const [comments, setComments] = useState([])
    const [onDeleteResponse, setOnDeleteResponse] = useState(null)

    useEffect(() => {
        async function fetchComments(){
            getComments(setComments)
        }

        fetchComments()
    }, [])

    useEffect(() => {
        if(onDeleteResponse === "Success"){
            window.location.reload()
        }
    }, [onDeleteResponse])

    return (
        <div className={styles.cont} >
            <h1 className={styles.titulo}>Comments Page</h1>
            <Button><Link to='/create-comment' style={{color: "white"}}>Crear nuevo comentatio</Link></Button>

            {/* si hay comentarios pasalos y si no retorname 0 */}
            {comments && comments.length?
                <CommentsTable comments={comments} className={styles.tableCont}  setOnDeleteResponse={setOnDeleteResponse} />
             : <p>0 comentarios</p>}
        </div>
    );
}