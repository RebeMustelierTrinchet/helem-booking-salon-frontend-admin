import axios from "axios";


const API_DOMAIN = process.env.REACT_APP_API_DOMAIN

export const getAllAppointments = async(setAppointments) => {


    const URL = `${API_DOMAIN}/appointments/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.get(URL, headerConfig).then(async(response) => {
        const result = await response.data
        setAppointments(result.data)
    }).catch((error) => {
        console.log("Error fetching the appointments: ", error)
    })

}

export const createAppointment = async(body, setAPIAppointments) => {


    const URL = `${API_DOMAIN}/appointments/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post(URL, body, headerConfig).then(async(response) => {
        const result = await response.data
        setAPIAppointments("Success")
    }).catch((error) => {
        console.log("Error creating a appointment: ", error)
        setAPIAppointments("Error")
    })

}

export const deleteAppointment = async(appointmentID, setAPIResult) => {


    const URL = `${API_DOMAIN}/appointments/${appointmentID}/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.delete(URL, headerConfig).then(async(response) => {
        const result = await response.data   
        setAPIResult("Success")
    }).catch((error) => {
        console.log("Error deleting an appointment: ", error)
        setAPIResult("Error")
    })

}

export const updateAppointment = async(appointmentID, body, setAPIResult) => {


    const URL = `${API_DOMAIN}/appointments/${appointmentID}/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.patch(URL, body, headerConfig).then(async(response) => {
        const result = await response.data   
        setAPIResult("Success")
    }).catch((error) => {
        console.log("Error updating an appointment: ", error)
        setAPIResult("Error")
    })

}

export const getAppointmentByID = async(appointmentID, setAppointmentInfo) => {


    const URL = `${API_DOMAIN}/appointments/${appointmentID}/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.get(URL, headerConfig).then(async(response) => {
        const result = await response.data   
        setAppointmentInfo(result.data)
    }).catch((error) => {
        console.log("Error getting an appointment: ", error)
    })

}