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
const TotaletailLocation = Styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0
`
const DateCreation = Styled.p`
    margin-top: 0;
    color: #d2d2d2
    font-family: monospace;
`
const DefinitionLocation = Styled.h2`
    font-family: monospace;
`

function CharacterDetailPage(props) {
    const [detailPage, setDetailPage] = useState({})
    const [totalResidents, setTotalResidents] = useState([])
    const [urlResident, setUrlResident] = useState("")
    const getCharacterDetailPage = async () => {
        await axios.get(props.url).then((response) => {
            setDetailPage(response.data)
            setTotalResidents(response.data.residents)
        }
        ).catch(error => console.log(error.message))
    }
    const getDetailResident = async () => {
        await axios.get(urlResident).then((response) => {
            setResidentDetail(response.data)
        }
        ).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getCharacterDetailPage()
    }, [])
    const getUrlResident = (url) => {
        setUrlResident(url)
    }
    useEffect(() => {
        getDetailResident()
    }, [urlResident])
    
    return (
            <TotaletailLocation>
                <DefinitionLocation>{detailPage.type} {detailPage.name} {detailPage.dimension} </DefinitionLocation>
                <DateCreation>criado em: {detailPage.created}</DateCreation>
                <h3 style={{fontFamily: "monospace"}}>Residents</h3>
                <ListResident>
                    {
                        totalResidents.map(element => {
                            return <Residents residents={element} event={getUrlResident} />
                        })
                    }
                </ListResident>
            </TotaletailLocation>   
    )
}

export default CharacterDetailPage