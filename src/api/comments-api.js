import axios from "axios";

export const getComments = async(setComments) => {


    const URL = "http://localhost:8000/comments/"

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


    const URL = "http://localhost:8000/comments/"

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