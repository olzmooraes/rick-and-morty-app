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
const DetailResident = Styled.div`
    left: 66vw;
    position: fixed;
    width: 34vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SectionDetailResident = Styled.section`
    width: 34vw;
`
const TotaletailLocation = Styled.div`
    width: 100vw;
`
const PartialDetailLocation = Styled.div`
    width: 66vw;
`
const StyledCharacterDetailPage = Styled.div`
    display: flex;
`
function CharacterDetailPage(props) {
    const [detailPage, setDetailPage] = useState({})
    const [totalResidents, setTotalResidents] = useState([])
    const [urlResident, setUrlResident] = useState("")
    const [residentDetail, setResidentDetail] = useState([])
    const [appearDetailsSection, setAppearDetailsSection] = useState("")
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
    const getUrlResident = (url, e) => {
        setUrlResident(url)
        setAppearDetailsSection(e)
    }
    useEffect(() => {
        getDetailResident()
    }, [urlResident])
    const displayDetails = () => {
        switch (appearDetailsSection) {
            case "1": return (
                <>
                    <PartialDetailLocation>
                        <p>Nome: {detailPage.name}</p>
                        <p>Tipo: {detailPage.type}</p>
                        <p>Dimensão: {detailPage.dimension}</p>
                        <p>criado em: {detailPage.created}</p>
                        <h3>Residents</h3>
                        <ListResident>
                            {
                                totalResidents.map(element => {
                                    return <Residents residents={element} event={getUrlResident}/>
                                })
                            }
                        </ListResident>
                    </PartialDetailLocation>
                    <SectionDetailResident>
                        <DetailResident>
                            <p>Nome: {residentDetail.name}</p>
                            <p>Status: {residentDetail.status}</p>
                            <p>Espécie: {residentDetail.species}</p>
                            <p>gênero: {residentDetail.gender}</p>
                            <img src={residentDetail.image} alt={residentDetail.name} />
                        </DetailResident>
                    </SectionDetailResident>
                </>
            )
            default: return (
                <TotaletailLocation>
                    <p>Nome: {detailPage.name}</p>
                    <p>Tipo: {detailPage.type}</p>
                    <p>Dimensão: {detailPage.dimension}</p>
                    <p>criado em: {detailPage.created}</p>
                    <h3>Residents</h3>
                    <ListResident>
                        {
                            totalResidents.map(element => {
                                return <Residents residents={element} event={getUrlResident}/>
                            })
                        }
                    </ListResident>
                </TotaletailLocation>
            )
        }
    }
    
    return (
        <StyledCharacterDetailPage>
            {displayDetails()}
        </StyledCharacterDetailPage>
    )
}

export default CharacterDetailPage