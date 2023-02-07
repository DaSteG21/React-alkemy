import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function MoviesList() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    useEffect(() => {
        if(token === null){
            navigate('/')
        }
        
    }, []);
    

    return <h1>Aqui deben ir las Pelis</h1>
    
};
