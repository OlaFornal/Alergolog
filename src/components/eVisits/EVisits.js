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
align-items: flex-start;

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
max-height: 650px;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2020/04/diogo-brandao-cUXK9-kQfy4-unsplash.jpg");
background-repeat: no-repeat;
background-position: 50% 90%;
background-size: 100%;

${({ theme }) => theme.media.tabletPortrait} {
width: 100%;
height: 60vh;
max-height: 560px;
min-height: 480px;

}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
height: 60vh;
max-height: 350px;
min-height: 300px;
}

${({ theme }) => theme.media.phone} {
width: 100%;
height: 40vh;
max-height: 200px;
min-height: 190px;
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
        <P3>Z uwagi na pozytywne opinie i zainteresowanie tak?? form?? konsultacji
          utrzymana zostaje mo??liwo???? odp??atnych porad telefonicznych z
          mo??liwo??ci?? wystawiania e-recept (podawany jest kod dost??pu do
          realizacji w aptece).<strong> Konsultacje telefoniczne dotycz?? wy????cznie
            pacjent??w ju?? obj??tych opiek?? poradni.</strong> Wizyty pierwszorazowe
          (stacjonarne) prosimy rejestrowa?? dzwoni??c pod numer 13 432 40 21.</P3>
        <P3><strong>Koszt konsultacji to 80 z??.</strong></P3>
        <P3>Pro??b?? o tak?? e-wizyt?? zawieraj??c?? imi?? i nazwisko pacjenta prosz?? wys??a?? <strong>SMSem</strong> na
          tymczasowy numer: <strong>730 112 818</strong>.
          (prosz?? nie dzwoni??, rejestracja dzia??a wy????cznie przez SMS).</P3>
        <P3><strong>Procedura:</strong></P3>
        <P4>1. Pacjent: zg??asza potrzeb?? wizyty, w tre??ci SMS podaje imi?? i nazwisko pacjenta oraz preferowane godziny
          kontaktu</P4>
        <P4>2. Rejestracja: odpowied?? SMS z terminem konsultacji (zostanie wys??ana do 24h od wiadomo??ci 1.)</P4>
        <P4>3. Pacjent: wysy??a SMS z akceptacj?? terminu lub z pro??b?? o ustalenie innego, co prowadzi do kroku 2.</P4>
        <P4>4. Doktor: dzwoni o ustalonej porze na numer z kt??rego wys??ano SMS 1.</P4>
        <P4>5. Pacjent dokonuje p??atno??ci przelewem na konto: 32 1050 1458 1000 0091 4792 8692</P4>
        <P3>Paragon b??dzie mo??na odebra?? w recepcji na ??????kiewskiego 1A po 2 dniach od zaksi??gowaniu przelewu.</P3>
      </Text>
    </Content2>
  </>
)

export default VisitsContent