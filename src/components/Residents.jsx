import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const Img = Styled.img`
    width: 100%;
    border-radius: 10px;
`
const StyleResident = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: monospace;
    width: 10vw;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    transition: all 0.3s ease-out;
    border-radius: 10px;
    margin: 1rem;
    font-size: 90%;
    &:hover{
        cursor: pointer;
    }
`
function Residents(props) {
    const [residents, setResident] = useState([])
    const arrayResidents = props.residents
    const [details, setDetails] = useState(false)
    const getResident = () => {
        axios.get(arrayResidents).then((response) => {
            setResident(response.data)
        }).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getResident()
    }, [])
    const detailResidents = () => {
        switch (details) {
            case true: return (
                <StyleResident 
                key={residents.id} 
                onClick={() => { props.event(residents.url) }} 
                onMouseOver={() => { setDetails(true) }} 
                onMouseOut={() => { setDetails(false) }} >
                    <p>Nome: {residents.name}</p>
                    <p>Status: {residents.status}</p>
                    <p>Espécie: {residents.species}</p>
                    <p>gênero: {residents.gender}</p>
                </StyleResident>
            )
            default: return (
                <StyleResident 
                key={residents.id} 
                onClick={() => { props.event(residents.url) }} 
                onMouseOver={() => { setDetails(true) }} 
                onMouseOut={() => { setDetails(false) }}>
                    <Img src={residents.image} alt={residents.name} />
                </StyleResident>
            )
        }
    }
    return (
        <>
            {detailResidents()}
        </>
    )
}
export default Residents