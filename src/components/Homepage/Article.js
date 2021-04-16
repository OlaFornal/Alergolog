import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"


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
height: 150px;
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


class Article extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    let { isToggleOn } = this.state
    return (
      <>
        <ArticlesBox onClick={this.handleClick}>
          <ArticleName>Nieżyt nosa - najważniejsze fenotypy i endotypy oraz zasady leczenia</ArticleName>
          <Button type='button'>
            {isToggleOn ?
              <FontAwesomeIcon icon={faAngleUp}/>
              :
              <FontAwesomeIcon icon={faAngleDown}/>
            }
          </Button>
        </ArticlesBox>
        {isToggleOn ?
          <Modal>
            <Photo/>
            <TextBox>
              <P>Dr n. med. Rafał Fornal, Prof. dr hab. n. med. Ryszard Kurzawa, Dr n. med. Łukasz Błażowski, Lek Iwona
                Sak.</P>
              <P2>Nieżyt nosa – najważniejsze fenotypy i endotypy oraz zasady leczenia.</P2>
              <P>Alergia Astma Immunologia 2015, 20 (4): str. 242-252.</P>
            </TextBox>
          </Modal>
          : ""}
      </>
    )
  }
}

export default Article