
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import styles from './commentsTable.module.css'
import {deleteComment} from '../../api/comments-api'

export default function CommentsTable({comments, setOnDeleteResponse}) {

  // Function to delete a comment
  async function onDeleteComment(commentID){
    deleteComment(commentID, setOnDeleteResponse)
}

  return (
    <div  className={styles.tableCont}>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Autor</th>
            <th>Titulo</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => {
            return(
              <tr key={index}>
                <td>{comment.author}</td>  
                <td>{comment.title}</td>
                <td><Button size="sm" onClick={(e) => onDeleteComment(comment._id)} variant="danger">Borrar</Button></td>
              </tr>
            );
          })}
        </tbody>
        </Table>
    </div>
  );
}