import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import JSONData from "../../../content/publications"


const ArticlesBox = styled.div`
width: 100%;
background-color: rgba(255,255,255,.075);
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 20px;
margin-top: 20px;
`

const ArticleName = styled.div`
color: ${({ theme }) => theme.colors.white};
font-weight: 400;
font-size: 16px;
padding: 20px 0;
`

const Button = styled.button`
width: 60px;
height: 100%;
outline: none;
border: none;
background-color: transparent;
color: ${({ theme }) => theme.colors.specialColor};
font-size: 30px;
`

const Modal = styled.div`
width: 100%;
background-color: rgba(255,255,255,.075);
padding: 0 20px 20px 20px;
color: ${({ theme }) => theme.colors.white};
display: flex;
flex-direction: row;

${({ theme }) => theme.media.phone} {
flex-direction: column;
}
`

const Photo = styled.div`
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2015/11/okladka_1-17.png");
min-height: 150px;
width: 105px;
background-repeat: no-repeat;
background-size: cover;
`

const TextBox = styled.div`
width: calc(100% - 105px);
height: 100%;
padding-left: 20px;

${({ theme }) => theme.media.phone} {
width: 100%;
padding-left: 0;
}
`

const P = styled.p`
font-weight: 400;
color: ${({ theme }) => theme.colors.white};
font-size: 14px;
`

const P2 = styled(P)`
font-weight: 700;
`
const MainDiv = styled.div`
width:100%;
`

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = { activeElement: null }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState(prevState => ({
      activeElement: prevState.activeElement === id ? null : id
    }))
  }

  render() {
    let { activeElement } = this.state
    return (
      <>
        {JSONData.main.map((data) => {
          return <MainDiv key={data.id}>
            <ArticlesBox onClick={() => this.handleClick(data.id)}>
              <ArticleName>{data.title}</ArticleName>
              <Button type='button'>
                {activeElement === data.id ?
                  <FontAwesomeIcon icon={faAngleUp}/>
                  :
                  <FontAwesomeIcon icon={faAngleDown}/>
                }
              </Button>
            </ArticlesBox>
            <Modal style={{ display: activeElement === data.id ? "flex" : "none" }}>
              <Photo/>
              <TextBox>
                <P>{data.author}</P>
                <P2>{data.title}</P2>
                <P>{data.info}</P>
              </TextBox>
            </Modal>
          </MainDiv>
        })}
      </>
    )
  }
}

export default Article