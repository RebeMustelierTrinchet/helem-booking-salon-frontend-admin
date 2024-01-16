
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {deleteAppointment} from '../../api/appointments-api'
import { Link } from 'react-router-dom';
import styles from './appointmentsTable.module.css'

export default function AppoinmtentsTable({appointments, setOnDeleteResponse}) {

  // Function to delete a appointment
  async function onDeleteAppointment(appointmentID){
    deleteAppointment(appointmentID, setOnDeleteResponse)
}

  return (
    <div>
        <Table striped bordered hover className={styles.tableCont} >
        <thead>
            <tr>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Telefono</th>
            <th>Status</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => {
            return(
              <tr key={index}>
                <td>{appointment.customer}</td>  
                <td>{appointment.service}</td>
                <td>{new Date(appointment.date).toLocaleDateString()}</td>
                <td>{appointment.time}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.status}</td>
                <td><Button size="sm" onClick={(e) => onDeleteAppointment(appointment._id)} variant="danger">Borrar</Button>
                <Link to={`/edit-appointment/${appointment._id}`}><Button size="sm">Editar</Button></Link></td>
              </tr>
            );
          })}
        </tbody>
        </Table>
    </div>
  );
}