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
padding: 20px 0;
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
//height: 80vh;
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2017/10/astma.jpg");
background-repeat: no-repeat;
background-size: 100%;

${({ theme }) => theme.media.tabletPortrait} {
width: 100%;
height: 65vh;
max-height: 430px;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
height: 48vh;
max-height: 250px;
}

${({ theme }) => theme.media.phone} {
width: 100%;
height: 40vh;
max-height: 200px;
}
`

const Photo2 = styled(Photo)`
background-image: url("https://www.alergologkrosno.pl/wp-content/uploads/2015/11/testy-alergiczne-1.jpg");

${({ theme }) => theme.media.tabletPortrait} {
height: 100vh;
max-height: 600px;
background-position: bottom;
}

${({ theme }) => theme.media.phoneLandscape} {
width: 100%;
height: 100vh;
max-height: 400px;
background-position: bottom;
}

${({ theme }) => theme.media.phone} {
width: 100%;
height: 40vh;
max-height: 300px;
background-position: bottom;
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

const Ul = styled.ul`
padding-left: 20px;
margin: 0;
color: ${({ theme }) => theme.colors.articleColor};
`

const Ul2 = styled(Ul)`
list-style-type: "- ";
margin-top: 5px;
padding-left: 30px;
`

const Background= styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
background-color: #efefef;
`

const Text2 = styled(Text)`
padding-left: 0;
padding-right: 20px;

${({ theme }) => theme.media.tabletPortrait} {
margin-top: 0;
margin-bottom: 20px;
}

${({ theme }) => theme.media.phoneLandscape} {
margin-top: 0;
margin-bottom: 20px;
}

${({ theme }) => theme.media.phone} {
margin-top: 0;
margin-bottom: 20px;
}
`


const PreparationContent = () => (
  <>
    <Header>
      <Content>
        <P>Przygotwanie do badań</P>
      </Content>
    </Header>
    <Content2>
      <Photo/>
      <Text>
        <P2>Zasady przygotowania się do badania spirometrycznego</P2>
        <Line/>
        <P3>Badanie spirometryczne jest podstawowym badaniem czynnościowym w
          diagnostyce układu oddechowego i najprostszą metodą oceny właściwości
          mechanicznych układu oddechowego. W praktyce służy ono rozpoznawaniu
          zaburzeń przepływu powietrza przez drogi oddechowe, czyli rozpoznawaniu
          obturacji, co jest niezbędne do rozpoznania np.  astmy oskrzelowej
          (u dorosłych pacjentów także POChP). Badanie to odgrywa również rolę w
          ocenie efektywności leczenia i postępu choroby.</P3>
        <P3><strong>Przed badaniem należy (zalecenia ogólne, z ujęciem pacjentów dorosłych):</strong></P3>
        <Ul>
          <li>Zaprzestać palenia tytoniu na 24 godziny (min. 2 godz. przed badaniem)</li>
          <li>Nie spożywać alkoholu 4 godziny przed badaniem</li>
          <li>Nie pić kawy i herbaty 4 godziny przed badaniem</li>
          <li>Nie spożywać zbyt obfitych posiłków 2 godziny przed badaniem</li>
          <li>Założyć luźne, niekrępujące ubranie pozwalające na swobodne ruchy
            klatki piersiowej i przepony (unikać krawatów, gorsetów poluzować pasek w spodniach)</li>
          <li>Powiadomić personel o przyjętych lekach</li>
          <li>Nie przyjmować (jeżeli to możliwe) leków wziewnych, a w tym:</li>
        </Ul>
        <Ul2>
          <li>Beta-mimetyków krótko działających <strong>8 godz. </strong>przed badaniem (Ventolin, Salbutamol)</li>
          <li>Beta-mimetyków długo działających <strong>12 godz. </strong>przed badaniem (Formoterol, Salmeterol)</li>
          <li>Leków antycholinergicznych krótko działających (Atrovent) <strong>6 godz. </strong>przed badaniem</li>
          <li>Leków antycholinergicznych długo działających (Spiriva) <strong> 7 dni </strong> przed badaniem</li>
        </Ul2>
      </Text>
    </Content2>
    <Background>
      <Content2>
        <Text2>
          <P2>Zasady przygotowania się do punktowych testów skórnych</P2>
          <Line/>
          <P3>
            Punktowe testy skórne polegają na nałożeniu kropli roztworów kontrolnych i badanych alergenów na wewnętrzną
            stronę przedramienia lub w wybranych przypadkach na plecy. Następnie specjalnym “lancetem” wprowadza się
            alergen pod naskórek. 15 minut po nałożeniu alergeny usuwa się ze skóry za pomocą gazika. Dokonuje się
            odczytu testów. Otrzymane wyniki zawsze porównuje się z wielkością testów z roztworami kontrolnymi –
            tzw. kontrola dodatnia (histamina) oraz kontrola ujemna.</P3>
          <P3><strong>Przed wykonaniem testów należy “odstawić” niektóre wcześniej stosowane leki:</strong></P3>
          <Ul>
            <li>na 7-14 dni leki antyhistaminowe, takie jak hydroksyzyna oraz leki drugiej generacji (cetyryzyna,
              lewocetyryzyna, loratydyna, desloratydyna, feksofenadyna, bilakstyna, rupatydyna)</li>
            <li>na 1-3 dni difenhydraminę wchodzącą w skład wielu preparatów dostępnych bez recepty (
              Apap Noc, Betadrin krople) oraz prometazynę (Diphergan).</li>
            <li>Ketotifen – należy go “odstawić” 5 dni przed badaniem.</li>
            <li>Należy przerwać przyjmowanie leków przeciwbólowych oraz glikokortykosteroidów systemowych,
              jeżeli przekraczają dobową dawkę 10 mg w przeliczeniu na prednizolon.</li>
            <li>Na okolicę skóry, w której będą zakładane testy nie można stosować maści zawierających
              glikokortykosteroidy oraz inhibitory kalcyneuryny (Protopic, Elidel).</li>
            <li>Leki wziewne stosowane w leczeniu astmy można przyjmować, nie wpływają one na reakcję skóry na alergeny.</li>
            <li>Według producenta leku Singulair /montelukst/ – leki antyleukotrienowe należy odstawić tydzień przed
              wykonaniem testów (w dostępnym piśmiennictwie nie ma informacji na temat wpływu leków antyleukotrienowych
              na wyniki testów skórnych). </li>
          </Ul>
        </Text2>
        <Photo2/>
      </Content2>
    </Background>
  </>
)

export default PreparationContent