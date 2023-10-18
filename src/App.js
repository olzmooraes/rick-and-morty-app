import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"
import Styled from "styled-components";
import { useEffect, useState } from "react";

const Logo = Styled.img`
  width: 25vw;
  &:hover{
    scale: 1.02;
    cursor: pointer;
  }
`
const GlobalStyle = Styled.div`
  padding: 0px;
  margin: 0px;
  width: 100vw;
`

const Header = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 80vw;
`
const Input = Styled.input`
  width: 30vw;
  height: 5vh;
  border-radius: 10px;
  border: 1px solid #048091;
  padding-left: 10px;
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
        return <CharacterListPage event={searchUrlLink} inputSearch={inputSearch} />
      case "Detail":
        return <CharacterDetailPage url={urlList} event={searchUrlLink} />
      default:
        return <CharacterListPage event={searchUrlLink} inputSearch={inputSearch} />
    }

  }
  useEffect(() => {
    selectPage()
  }, [currentPage])
  const clearInputSetPage = () => {
    document.querySelector(".inputSearch").value = "";
    setInput("")
    setPage("list")
  }
  return (
    <GlobalStyle>
      <Header>
        <Logo src="logo.png" alt="Logo" onClick={() => { clearInputSetPage() }} />
        <Input type="text" className="inputSearch" placeholder="Pesquisar" onChange={(e) => { setInput(e.target.value) }}></Input>
      </Header>
      {selectPage()}
    </GlobalStyle>
  );
}

export default App;












