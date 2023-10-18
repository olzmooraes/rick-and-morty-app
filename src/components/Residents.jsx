import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const Resident = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    margin: 20px;
    width: 200px;
    transition: all 0.3s ease-out;
    &:hover{
        transform: translateY(-1px);
        cursor: pointer;
    }
`
const Img = Styled.img`
    width: 100%;
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
                <div onClick={() => { props.event(residents.url, "1") }} onMouseOver={()=>{setDetails(true)}} onMouseOut={()=>{setDetails(false)}} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                    <p>Nome: {residents.name}</p>
                    <p>Status: {residents.status}</p>
                    <p>Espécie: {residents.species}</p>
                    <p>gênero: {residents.gender}</p>
                </div>
            )
            default: return (
                <div onClick={() => { props.event(residents.url) }} onMouseOver={()=>{setDetails(true)}} onMouseOut={()=>{setDetails(false)}} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <Img src={residents.image} alt={residents.name} />
                </div>
            )
        }
    }
    return (
        <Resident key={residents.id}>
            {
                detailResidents()
            }
        </Resident>
    )
}
export default Residents