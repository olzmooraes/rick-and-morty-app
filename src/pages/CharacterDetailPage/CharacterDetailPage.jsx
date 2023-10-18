import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";
import Residents from "../../components/Residents";


const ListResident = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

function CharacterDetailPage(props) {
    const [detailPage, setDetailPage] = useState({})
    const [totalResidents, setTotalResidents] = useState([])
    const getCharacterDetailPage = async () => {
        await axios.get(props.url).then((response) => {
            setDetailPage(response.data)
            setTotalResidents(response.data.residents)
        }
        ).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getCharacterDetailPage()
    }, [])
    return (
        <>
            {/* <button onClick={()=>{props.event("", "list")}} >Voltar</button> */}
            <p>Nome: {detailPage.name}</p>
            <p>Tipo: {detailPage.type}</p>
            <p>Dimensão: {detailPage.dimension}</p>
            <p>criado em: {detailPage.created}</p>
            <h3>Residents</h3>
            <ListResident>
                {
                    totalResidents.map(element =>{
                        return <Residents residents={element} />
                    })
                }
            </ListResident>
        </>
    )
}

export default CharacterDetailPage