import axios from "axios";


const API_DOMAIN = process.env.REACT_APP_API_DOMAIN


export const getComments = async(setComments) => {


    const URL = `${API_DOMAIN}/comments/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.get(URL, headerConfig).then(async(response) => {
        const result = await response.data
        setComments(result.data)
    }).catch((error) => {
        console.log("Error fetching the comments: ", error)
    })

}

export const createComment = async(body, setAPIResult) => {


    const URL = `${API_DOMAIN}/comments/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.post(URL, body, headerConfig).then(async(response) => {
        const result = await response.data
        setAPIResult("Success")
    }).catch((error) => {
        console.log("Error creating a comment: ", error)
        setAPIResult("Error")
    })

}

export const deleteComment = async(commentID, setAPIResult) => {


    const URL = `${API_DOMAIN}/comments/${commentID}/`

    const headerConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.delete(URL, headerConfig).then(async(response) => {
        const result = await response.data
        setAPIResult("Success")
    }).catch((error) => {
        console.log("Error deleting a comment: ", error)
        setAPIResult("Error")
    })

}