import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


function CharacterListPage() {
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
                            <li key={list.id}>
                                <p>Nome : {list.name}</p>
                                <p>Tipo : {list.type}</p>
                                <p>Dimensão : {list.dimension}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CharacterListPage