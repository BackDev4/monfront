import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api'

//////////////// GET //////////////////////

export function setDataToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function getDataFromLS(key) {
    const data = localStorage.getItem(key)

    return data !== 'undefined' ? JSON.parse(data) : null
}

export async function getContacts() {
    return await getAsync(`/contact`);
}

export async function getServices() {
    return await getAsync(`/services`);
}

export async function getReviews() {
    return await getAsync(`/reviews`);
}

export async function getGallery() {
    return await getAsync(`/gallery`);
}

//////////////// POST //////////////////////

export async function postReviews(formData) {
    return await postAsync('/reviews', formData)
}


export async function postAsync(url, data, checkError = true) {

    const config = {
        headers: {
            // "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

    try {
        let response = await axios.post(BASE_URL + url, data, config)

        if (response.status === 200 || response.status === 201) {
            return response.data
        }
        if (response.status === 204) {
            return true
        }
    } catch (error) {
        if (checkError && error.response) {
            return error.response
        }
        console.error(error)
    }

    return undefined
}


export async function getAsync(url) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

    try {
        let response = await axios.get(BASE_URL + url, config)
        if (response.status === 200) {
            return response.data
        }
        if (response.status === 302) {
            return response.headers
        }
    } catch (error) {
        if (error?.response?.status === 401) {
            localStorage.removeItem('token')
            return error?.response
        }
        console.error(error)
    }
}
