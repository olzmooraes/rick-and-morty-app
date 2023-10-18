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
`
const StyledCharacterDetailPage = Styled.div`
    display: flex;
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
        <StyledCharacterDetailPage>
            <TotaletailLocation>
                <p>Nome: {detailPage.name}</p>
                <p>Tipo: {detailPage.type}</p>
                <p>Dimensão: {detailPage.dimension}</p>
                <p>criado em: {detailPage.created}</p>
                <h3>Residents</h3>
                <ListResident>
                    {
                        totalResidents.map(element => {
                            return <Residents residents={element} event={getUrlResident} />
                        })
                    }
                </ListResident>
            </TotaletailLocation>
        </StyledCharacterDetailPage>
    )
}

export default CharacterDetailPage