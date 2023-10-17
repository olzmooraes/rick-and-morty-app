import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

function Residents(props) {
    const [residents, setResident] = useState([])
    const arrayResidents = props.residents
    try {
        console.log(props.residents)
        arrayResidents.array.forEach(async (element) => {
            await axios.get(element).then((response) => {
                const newResidents = [...residents, response.data]
                setResident(newResidents)
            }
            ).catch(error => console.log(error.message))
        });
    } catch (error) {
        console.log(error.message)
    }

    return (
        <>
            <h3>Residentes</h3>
            <ul>
                {
                    residents.map(e => {
                        <li key={e.id}>
                            <p>Nome: {e.name}</p>
                            <p>Status: {e.status}</p>
                            <p>Espécie: {e.species}</p>
                            <img src={e.image} alt={e.name} />
                        </li>
                    })
                }
            </ul>
        </>
    )
}
export default Residents