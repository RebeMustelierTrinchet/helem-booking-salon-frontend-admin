import styles from "./createAppointmentPage.module.css";
import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../../api/appointments-api";


export default function CreateAppointmentPage() {

    const [customer, setCustomer] = useState("")
    const [service, setService] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState("")
    
    const [apiResult, setApiResult] = useState();
    
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
        const body = JSON.stringify({
            customer,
            service,
            date,
            time,
            phone,
            status: "APROBADO"
        })
        await createAppointment(body, setApiResult)
    }

    useEffect(() => {
        if(apiResult === "Success"){
            navigate("/appointments");
        }
    }, [apiResult])

  return (
    <div className={styles.main_container}>
      <div className={styles.form}>
        <Form.Label htmlFor="inputCustomer">Cliente</Form.Label>
        <Form.Control value={customer} onChange={(e) => setCustomer(e.target.value)} type="text" id="inputCustomer" />
        <Form.Label htmlFor="inputService">Servicio</Form.Label>
        <Form.Control  value={service} onChange={(e) => setService(e.target.value)}  type="text" id="inputService" />
        <Form.Label htmlFor="inputDate">Fecha</Form.Label>
        <Form.Control  value={date} onChange={(e) => setDate(e.target.value)}  type="text" id="inputDate" />
        <Form.Label htmlFor="inputTime">Horario</Form.Label>
        <Form.Control  value={time} onChange={(e) => setTime(e.target.value)}  type="text" id="inputTime" />
        <Form.Label htmlFor="inputPhone">Telefono</Form.Label>
        <Form.Control  value={phone} onChange={(e) => setPhone(e.target.value)}  type="text" id="inputPhone" />
      </div>

      <Button className={styles.buttonSave} onClick={(e) => onSubmit(e)}>Salvar</Button>
    </div>
  );
}
