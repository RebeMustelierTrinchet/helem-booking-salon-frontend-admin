import styles from "./CreateCommentPage.module.css";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {createComment} from "../../api/comments-api"


export default function CreateCommentPage() {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [message, setMessage] = useState("")
    
    const [apiResult, setApiResult] = useState();
    
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
        const body = JSON.stringify({
            title: title,
            author: author,
            message: message
        })
        await createComment(body, setApiResult)
    }

    useEffect(() => {
        if(apiResult === "Success"){
            navigate("/comments");
        }
    }, [apiResult])

  return (
    <div className={styles.main_container}>
      <div className={styles.form}>
        <Form.Label htmlFor="inputTittle">Titulo</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="inputTittle" />
        <Form.Label htmlFor="inputAuthor">Author</Form.Label>
        <Form.Control  value={author} onChange={(e) => setAuthor(e.target.value)}  type="text" id="inputAuthor" />
        <Form.Label htmlFor="inputMessage">Mensaje</Form.Label>
        <Form.Control  value={message} onChange={(e) => setMessage(e.target.value)}  as="textarea" rows={3} type="text" id="inputMessage" />
      </div>

      <Button onClick={(e) => onSubmit(e)}>Salvar</Button>
    </div>
  );
}
