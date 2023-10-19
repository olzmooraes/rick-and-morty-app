import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";
import Residents from "../../components/Residents";


const ListResident = Styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    
`
const TotaletailLocation = Styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        font-family: monospace;
    }
`
const DateCreation = Styled.p`
    margin-top: 0;
    color: #d2d2d2
    font-family: monospace;
`
const DefinitionLocation = Styled.h2`
    font-family: monospace;
`
const Loanding = Styled.h1`
    color: rgba(178,223,40,255);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 30px;
    font-size: 5rem;
`
function CharacterDetailPage(props) {
    const [detailPage, setDetailPage] = useState({})
    const [totalResidents, setTotalResidents] = useState([])
    const [urlResident, setUrlResident] = useState("")
    const [loandingEnable, setBooleanLoading] = useState(true)
    const getCharacterDetailPage = async () => {
        await axios.get(props.url).then((response) => {
            setDetailPage(response.data)
            setTotalResidents(response.data.residents)
            setBooleanLoading(false)
        }
        ).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getCharacterDetailPage()
    }, [])
    const getUrlResident = (url) => {
        setUrlResident(url)
    }
    const loading = ()=>{
        switch(loandingEnable){
            case true: return <Loanding>Carregando</Loanding>
            default: return(
                <TotaletailLocation>
                    <DefinitionLocation>{detailPage.type} {detailPage.name} {detailPage.dimension} </DefinitionLocation>
                    <DateCreation>criado em: {detailPage.created}</DateCreation>
                    <h3>Residents</h3>
                    <ListResident>
                        {
                            totalResidents.map(element => {
                                return <Residents key={element} residents={element} event={getUrlResident} />
                            })
                        }
                    </ListResident>
                </TotaletailLocation>
            )
        }
    }
    return (
        <>
            {loading()}
        </>
    )
}

export default CharacterDetailPage