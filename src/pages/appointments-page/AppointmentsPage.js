import styles from './AppointmentsPage.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getAllAppointments} from "../../api/appointments-api"
import { Button } from 'react-bootstrap'
import AppointmentsTable from '../../components/appointmentsTable/appointmentsTable'

export default function AppointmentsPage(){

    const [appointments, setAppointments] = useState([])
    const [onDeleteResponse, setOnDeleteResponse] = useState(null)

    useEffect(() => {
        async function fetchAppoinments(){
            getAllAppointments(setAppointments)
        }

        fetchAppoinments()
    }, [])

    useEffect(() => {
        if(onDeleteResponse === "Success"){
            window.location.reload()
        }
    }, [onDeleteResponse])

    return (
        <div className={styles.cont}>
            <h1 className={styles.titulo}>Appointment Page</h1>
            <Button><Link to='/create-appointment' style={{color: "white"}}>Crear nueva cita</Link></Button>

            {/* si hay comentarios pasalos y si no retorname 0 */}
            {appointments && appointments.length?
                <AppointmentsTable appointments={appointments} setOnDeleteResponse={setOnDeleteResponse} />
             : <p>0 appointments</p>}
        </div>
    );
}