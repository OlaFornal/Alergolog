import React from "react"
import styled from "styled-components"


const Header = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-image: url('https://www.alergologkrosno.pl/wp-content/uploads/2015/12/bgn-grad-1.png');
background-color: ${({ theme }) => theme.colors.specialColor};
background-position: 50% 70%;
background-size: cover;
padding: 10px 0;
`

const Content = styled.div`
width: 90%;
height: auto;
display: flex;
flex-direction: row;

${({ theme }) => theme.media.phoneLandscape} {
width: 95%;
}

${({ theme }) => theme.media.phone} {
width: 95%;
}
`

const P = styled.p`
font-weight: 700;
line-height: 1.15;
font-size: 35px;
color: ${({ theme }) => theme.colors.white};

${({ theme }) => theme.media.tabletPortrait} {
font-size: 30px;
}

${({ theme }) => theme.media.phoneLandscape} {
font-size: 27px;
}

${({ theme }) => theme.media.phone} {
font-size: 27px;
}
`

const Content2 = styled(Content)`
padding: 50px 0;

${({ theme }) => theme.media.tabletPortrait} {
flex-direction: column;
}

${({ theme }) => theme.media.phoneLandscape} {
flex-direction: column;
padding: 20px 0;
}

${({ theme }) => theme.media.phone} {
flex-direction: column;
padding: 20px 0;
}
`

const Photo = styled.div`
width: 50%;
height: 100vh;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2020/04/diogo-brandao-cUXK9-kQfy4-unsplash.jpg");
background-repeat: no-repeat;
background-position: 50% 90%;
background-size: 100%;

${({ theme }) => theme.media.tabletPortrait} {
width: 100%;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
height: 60vh;

}

${({ theme }) => theme.media.phone} {
width: 100%;
height: 40vh;
}
`

const Text = styled.div`
padding-left: 30px;
width: 50%;

${({ theme }) => theme.media.tabletPortrait} {
padding-left: 0;
width: 100%;
margin-top: 20px;
}

${({ theme }) => theme.media.phoneLandscape} {
padding-left: 0;
width: 100%;
margin-top: 20px;
}

${({ theme }) => theme.media.phone} {
padding-left: 0;
width: 100%;
margin-top: 20px;
}
`

const P2 = styled.p`
color: ${({ theme }) => theme.colors.articleColor};
font-size: 25px;
margin: 0;

${({ theme }) => theme.media.tabletPortrait} {
font-size: 20px;
}

${({ theme }) => theme.media.phoneLandscape} {
font-size: 20px;
}

${({ theme }) => theme.media.phone} {
font-size: 20px;
}
`
const Line = styled.div`
width: 60px;
line-height: 1.15;
height: 3px;
border-bottom: 3px solid ${({ theme }) => theme.colors.articleColor};
margin: 15px 0 20px 0;
`

const P3 = styled.p`
font-size: 14px;
`

const P4 = styled(P3)`
margin: 5px;
`


const VisitsContent = () => (
  <>
    <Header>
      <Content>
        <P>Konsultacje telefoniczne</P>
      </Content>
    </Header>
    <Content2>
      <Photo/>
      <Text>
        <P2>Zasady prowadzonych konsultacji telefonicznych</P2>
        <Line/>
        <P3>Z uwagi na pozytywne opinie i zainteresowanie taką formą konsultacji
          utrzymana zostaje możliwość odpłatnych porad telefonicznych z
          możliwością wystawiania e-recept (podawany jest kod dostępu do
          realizacji w aptece).<strong> Konsultacje telefoniczne dotyczą wyłącznie
            pacjentów już objętych opieką poradni.</strong> Wizyty pierwszorazowe
          (stacjonarne) prosimy rejestrować dzwoniąc pod numer 13 432 40 21.</P3>
        <P3><strong>Koszt konsultacji to 80 zł.</strong></P3>
        <P3>Prośbę o taką e-wizytę zawierającą imię i nazwisko pacjenta proszę wysłać <strong>SMSem</strong> na
          tymczasowy numer: <strong>730 112 818</strong>.
          (proszę nie dzwonić, rejestracja działa wyłącznie przez SMS).</P3>
        <P3><strong>Procedura:</strong></P3>
        <P4>1. Pacjent: zgłasza potrzebę wizyty, w treści SMS podaje imię i nazwisko pacjenta oraz preferowane godziny
          kontaktu</P4>
        <P4>2. Rejestracja: odpowiedź SMS z terminem konsultacji (zostanie wysłana do 24h od wiadomości 1.)</P4>
        <P4>3. Pacjent: wysyła SMS z akceptacją terminu lub z prośbą o ustalenie innego, co prowadzi do kroku 2.</P4>
        <P4>4. Doktor: dzwoni o ustalonej porze na numer z którego wysłano SMS 1.</P4>
        <P4>5. Pacjent dokonuje płatności przelewem na konto: 32 1050 1458 1000 0091 4792 8692</P4>
        <P3>Paragon będzie można odebrać w recepcji na Żółkiewskiego 1A po 2 dniach od zaksięgowaniu przelewu.</P3>
      </Text>
    </Content2>
  </>
)

export default VisitsContent