import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [currentPage, setPage] = useState("")
  const [urlList, setUrl] = useState("")
  const searchUrlLink = (url, newCurrentPage)=>{
      setUrl(url);
      setPage(newCurrentPage)
  }
  const selectPage = ()=>{
    switch(currentPage){
      case "list":
        return <CharacterListPage event={searchUrlLink}/>
      case "Detail":
        return <CharacterDetailPage url={urlList} event={searchUrlLink}/>
      default:
        return <CharacterListPage event={searchUrlLink}/>
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












