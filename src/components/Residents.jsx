import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const Resident = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 200px;
    transition: all 0.3s ease-out;

`
const Img = Styled.img`
    width: 150px;
    padding: 10px
`
function Residents(props) {
    const [residents, setResident] = useState([])
    const arrayResidents = props.residents
    const getResident = () => {
        axios.get(arrayResidents).then((response) => {
            setResident(response.data)
        }).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getResident()
    }, [])

    return (

        <Resident key={residents.id}>
            <p>Nome: {residents.name}</p>
            <p>Status: {residents.status}</p>
            <p>Espécie: {residents.species}</p>
            <Img src={residents.image} alt={residents.name} />
        </Resident>
    )
}
export default Residents