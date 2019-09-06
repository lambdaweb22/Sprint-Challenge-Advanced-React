import { useState, useEffect } from 'react';
import axios from 'axios';

const UsePlayerData = () => {
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => setPlayerData(res.data))
            .catch(err => console.log(err))
    }, []);

    return [...playerData, setPlayerData];
}

export default UsePlayerData;