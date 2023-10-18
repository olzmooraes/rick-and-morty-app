import React from "react";
import { useState, useEffect } from "react";
import Styled from "styled-components";


const ObjectList = Styled.li`
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding-left: 20px;
    padding-bottom: 20px;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 250px;
    transition: all 0.3s ease-out;
    button:hover{
        transform: translateY(-1px);
        cursor: pointer;
    }
`
const Title = Styled.span`
    font-family: monospace;
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #0c4b49;
    font-weight: bold
`;

function ListFormated(props) {
    const listDefault = props.listDefault
    const [newList, setNewList] = useState([])

    const list = () => {
        const listFiltred = listDefault.filter(element => element.name.toLowerCase().includes(props.inputSearch.toLowerCase()) || element.type.toLowerCase().includes(props.inputSearch.toLowerCase()) )
        setNewList(listFiltred)
    }
    useEffect(() => {
        list()
    }, [props.inputSearch])

    return (
        <>
            {
                newList.map((list) => {
                    return (
                        <ObjectList key={list.id} onClick={() => { props.event(list.url, "Detail") }}>
                            <Title>Nome: {list.name}</Title>
                            <Title>Tipo: {list.type}</Title>
                            <Title>Dimensão: {list.dimension}</Title>
                            <p>Clique aqui para ver detalhes</p>
                        </ObjectList>
                    );
                })
            }
        </>
    )
}

export default ListFormated