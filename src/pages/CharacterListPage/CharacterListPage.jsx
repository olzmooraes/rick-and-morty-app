import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const ObjectList = Styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding-left: 20px;
    padding-bottom: 20px;
`
function CharacterListPage(props) {
    const [characterList, setCharacterList] = useState([])

    const getCharacterList = async () => {
        await axios.get("https://rickandmortyapi.com/api/location/").then((response) => {
            setCharacterList(response.data.results)
            console.log(characterList)
        }
        ).catch(error => console.log(error.message))
    }
    useEffect(() => {
        getCharacterList()
    }, [])
    return (
        <>
            <ul>
                {
                    characterList.map(list => {
                        return (
                            <ObjectList key={list.id}>
                                <p>Nome : {list.name}</p>
                                <p>Tipo : {list.type}</p>
                                <button onClick={()=>{props.event(list.url,"Detail")}}>Clique aqui para ver detalhes</button>
                            </ObjectList>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CharacterListPage