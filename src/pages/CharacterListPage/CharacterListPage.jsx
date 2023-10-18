import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";
import ListFormated from "../../components/ListFormated";

const ObjectList = Styled.li`
    12efont-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #0c4b49;
    padding-left: 20px;
    padding-bottom: 20px;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 250px;
    transition: all 0.3s ease-out;
    &:hover{
        opacity: 50%;
        transform: translateY(-1px);
        cursor: pointer;
    }
`
const ListLocation = Styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const Title = Styled.span`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #0c4b49;
  font-weight: bold
`;
function CharacterListPage(props) {
    const [characterList, setCharacterList] = useState([])

    const getCharacterList = async () => {
        await axios.get("https://rickandmortyapi.com/api/location/").then((response) => {
            setCharacterList(response.data.results)   
        }
        ).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getCharacterList()
    }, [])  
    
    const alteredList = ()=>{
        switch(props.inputSearch){
            case "":
                return characterList.map((list) => {
                    return (
                        <ObjectList key={list.id} onClick={() => { props.event(list.url, "Detail") }}>
                            <Title>Nome: {list.name} </Title>
                            <Title>Tipo: {list.type}</Title>
                            <Title>Dimensão: {list.dimension}</Title>
                            <p>Clique aqui para ver detalhes</p>
                        </ObjectList>
                    );
                })
            default:
                return <ListFormated listDefault={characterList} event={props.event} inputSearch={props.inputSearch}/>
        }
    }
    return (
        <ListLocation>
            {   
                alteredList()
            }
        </ListLocation>
    )
}

export default CharacterListPage