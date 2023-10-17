import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"
import Styled from "styled-components";
import { useEffect, useState } from "react";

const Logo = Styled.img`
  width: 25vw;
  margin: 20px;
`
const Header = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`
const Input = Styled.input`
  width: 30vw;
  height: 5vh;
`

function App() {
  const [currentPage, setPage] = useState("")
  const [urlList, setUrl] = useState("")
  const [inputSearch, setInput] = useState("")

  const searchUrlLink = (url, newCurrentPage) => {
    setUrl(url);
    setPage(newCurrentPage)
  }
    const selectPage = () => {
      switch (currentPage) {
        case "list":
          return <CharacterListPage event={searchUrlLink} />
        case "Detail":
          return <CharacterDetailPage url={urlList} event={searchUrlLink} />
        default:
          return <CharacterListPage event={searchUrlLink} />
      }

    }

  return (
    <>
      <Header>
        <Logo src="logo.png" alt="Logo" onClick={() => { setPage("list") }} />
        <Input type="text" placeholder="Pesquisar" onChange={(e) => { setInput(e.target.value) }}></Input>
      </Header>
      {selectPage()}
    </>
  );
}

export default App;












