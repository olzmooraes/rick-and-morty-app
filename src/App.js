import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [currentPage, setPage] = useState("")

  const selectPage = ()=>{
    switch(currentPage){
      case "list":
        return <CharacterListPage/>
      case "Detail":
        return <CharacterDetailPage/>
      default:
        return <CharacterListPage/>
    }
  }

  return (
    <div>
      <h1>
        RICK AND MORTY
      </h1>
        {selectPage()}
    </div>
  );
}

export default App;












