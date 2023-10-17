import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";
import Residents from "../../components/Residents";

function CharacterDetailPage(props) {
    const [detailPage, setDetailPage] = useState({})
    const getCharacterDetailPage = async () => {
        await axios.get(props.url).then((response) => {
            setDetailPage(response.data)
        }
        ).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getCharacterDetailPage()
    }, [])
    return (
        <>
            <button onClick={()=>{props.event("", "list")}} >Voltar</button>
            <p>Nome: {detailPage.name}</p>
            <p>Tipo: {detailPage.type}</p>
            <p>Dimensão: {detailPage.dimension}</p>
            <p>criado em: {detailPage.created}</p>
            <Residents elements={detailPage.residents}/>
        </>
    )
}

export default CharacterDetailPage