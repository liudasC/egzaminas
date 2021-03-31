const requestOptions = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
};

// susiet portą su .env nepavyko
const domain = `http://localhost:5000`;

export const getUsers = async (success, failure) => {
    try {
        const response = await fetch(`${domain}/users`, requestOptions)
        const data = await response.json();
        if (!response.ok) throw new Error(data.message)
        success(data);
    } catch (error) {
        failure(error.message)
    }
}

export const createUser = async (body, success, failure) => {
    try {
        const response = await fetch(`${domain}/users`, {
            ...requestOptions,
            method: 'POST',
            body: JSON.stringify(body),
          })
        const data = await response.json();
        if (!response.ok) throw new Error(data.message)
        success(data);
    } catch (error) {
        failure(error.message)
    }
}

export const updateUser = async (id, body, success, failure) => {
    try {
        const response = await fetch(`${domain}/users/${id}`, {
            ...requestOptions,
            method: 'PATCH',
            body: JSON.stringify(body),
          })
        const data = await response.json();
        if (!response.ok) throw new Error(data.message)
        success(data);
    } catch (error) {
        failure(error.message)
    }
}

export const deleteUser = async (id, success, failure) => {
    try {
        const response = await fetch(`${domain}/users/${id}`, {
            ...requestOptions,
            method: 'DELETE',
          })
        const data = await response.json();
        if (!response.ok) throw new Error(data.message)
        success(data);
    } catch (error) {
        failure(error.message)
    }
}



const API = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};

export default API;