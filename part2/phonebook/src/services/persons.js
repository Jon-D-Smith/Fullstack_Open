import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteOne = (id, target) => {
    const result = window.confirm(`Do you really want to delete ${target}?`)
    if(result){
        const request = axios.delete(`${baseUrl}/${id}`)
        return request.then(response => response.data)
    }
    return
}

export default  {
    getAll,
    create,
    deleteOne
}