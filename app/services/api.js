import axios from 'axios';

export const fetchUserData = async () => {
    try {
        const response = await axios.get(`http://localhost:5566/users/1134948394`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data;
    }
    catch (error) {
        throw new Error('Error al obtener los datos del usuario');
    }
}

export const fetchAccounts = async (id) => {
        try {
        const response = await axios.get(`http://localhost:5566/accounts/${id}`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data;
    }
    catch (error) {
        throw new Error('Error al obtener los datos de la cuenta');
    }
}

export const fetchTransactions = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5566/accounts/${id}/transactions`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data;
    }
    catch (error) {
        throw new Error('Error al obtener el historial de transacciones');
    }
}

export const transferir = async (data) => {
    try {
        const response = await axios.post('http://localhost:5566/transactions', {
            'origin': data.origen,
            'destination': data.cuenta,
            'amount': {
                'currency': 'NIO',
                'value': data.monto
            } 
        })
        console.log(response);
        
        return { success: true }
    }
    catch (error) {
        return { success: false, error}
    }
}