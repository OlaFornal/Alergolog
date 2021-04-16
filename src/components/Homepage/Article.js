import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"


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
`

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let {isToggleOn} = this.state
    return (
      <>
        <ArticlesBox>
          <ArticleName  onClick={this.handleClick}>Nieżyt nosa - najważniejsze fenotypy i endotypy oraz zasady leczenia</ArticleName>
          <Button type='button' onClick={this.handleClick}><FontAwesomeIcon icon={faAngleDown}/></Button>
        </ArticlesBox>
        {isToggleOn ?
          <Modal>Dr n. med. Rafał Fornal, Prof. dr hab. n. med. Ryszard Kurzawa, Dr n. med. Łukasz Błażowski, Lek Iwona
            Sak.
            Nieżyt nosa – najważniejsze fenotypy i endotypy oraz zasady leczenia.
            Alergia Astma Immunologia 2015, 20 (4): str. 242-252. </Modal>
          : ''}
      </>
    )
  }
}

export default Article