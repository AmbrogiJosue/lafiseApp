
export const fetchUserData = async () => {
    try {
        const response = await fetch(`http://localhost:5566/users/1134948394`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error('Error al obtener los datos del usuario');
    }
}

export const fetchAccounts = async (id) => {
        try {
        const response = await fetch(`http://localhost:5566/accounts/${id}`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error('Error al obtener los datos de la cuenta');
    }
}

export const fetchTransactions = async (id) => {
    try {
        const response = await fetch(`http://localhost:5566/accounts/${id}/transactions`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error('Error al obtener el historial de transacciones');
    }
}