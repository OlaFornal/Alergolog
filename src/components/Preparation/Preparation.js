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
        <P>Przygotwanie do bada??</P>
      </Content>
    </Header>
    <Content2>
      <Photo/>
      <Text id='spiro'>
        <P2>Zasady przygotowania si?? do badania spirometrycznego</P2>
        <Line/>
        <P3>Badanie spirometryczne jest podstawowym badaniem czynno??ciowym w
          diagnostyce uk??adu oddechowego i najprostsz?? metod?? oceny w??a??ciwo??ci
          mechanicznych uk??adu oddechowego. W praktyce s??u??y ono rozpoznawaniu
          zaburze?? przep??ywu powietrza przez drogi oddechowe, czyli rozpoznawaniu
          obturacji, co jest niezb??dne do rozpoznania np.  astmy oskrzelowej
          (u doros??ych pacjent??w tak??e POChP). Badanie to odgrywa r??wnie?? rol?? w
          ocenie efektywno??ci leczenia i post??pu choroby.</P3>
        <P3><strong>Przed badaniem nale??y (zalecenia og??lne, z uj??ciem pacjent??w doros??ych):</strong></P3>
        <Ul>
          <li>Zaprzesta?? palenia tytoniu na 24 godziny (min. 2 godz. przed badaniem)</li>
          <li>Nie spo??ywa?? alkoholu 4 godziny przed badaniem</li>
          <li>Nie pi?? kawy i herbaty 4 godziny przed badaniem</li>
          <li>Nie spo??ywa?? zbyt obfitych posi??k??w 2 godziny przed badaniem</li>
          <li>Za??o??y?? lu??ne, niekr??puj??ce ubranie pozwalaj??ce na swobodne ruchy
            klatki piersiowej i przepony (unika?? krawat??w, gorset??w poluzowa?? pasek w spodniach)</li>
          <li>Powiadomi?? personel o przyj??tych lekach</li>
          <li>Nie przyjmowa?? (je??eli to mo??liwe) lek??w wziewnych, a w tym:</li>
        </Ul>
        <Ul2>
          <li>Beta-mimetyk??w kr??tko dzia??aj??cych <strong>8 godz. </strong>przed badaniem (Ventolin, Salbutamol)</li>
          <li>Beta-mimetyk??w d??ugo dzia??aj??cych <strong>12 godz. </strong>przed badaniem (Formoterol, Salmeterol)</li>
          <li>Lek??w antycholinergicznych kr??tko dzia??aj??cych (Atrovent) <strong>6 godz. </strong>przed badaniem</li>
          <li>Lek??w antycholinergicznych d??ugo dzia??aj??cych (Spiriva) <strong> 7 dni </strong> przed badaniem</li>
        </Ul2>
      </Text>
    </Content2>
    <Background>
      <Content2>
        <Text2 id='skin'>
          <P2>Zasady przygotowania si?? do punktowych test??w sk??rnych</P2>
          <Line/>
          <P3>
            Punktowe testy sk??rne polegaj?? na na??o??eniu kropli roztwor??w kontrolnych i badanych alergen??w na wewn??trzn??
            stron?? przedramienia lub w wybranych przypadkach na plecy. Nast??pnie specjalnym ???lancetem??? wprowadza si??
            alergen pod nask??rek. 15 minut po na??o??eniu alergeny usuwa si?? ze sk??ry za pomoc?? gazika. Dokonuje si??
            odczytu test??w. Otrzymane wyniki zawsze por??wnuje si?? z wielko??ci?? test??w z roztworami kontrolnymi ???
            tzw. kontrola dodatnia (histamina) oraz kontrola ujemna.</P3>
          <P3><strong>Przed wykonaniem test??w nale??y ???odstawi????? niekt??re wcze??niej stosowane leki:</strong></P3>
          <Ul>
            <li>na 7-14 dni leki antyhistaminowe, takie jak hydroksyzyna oraz leki drugiej generacji (cetyryzyna,
              lewocetyryzyna, loratydyna, desloratydyna, feksofenadyna, bilakstyna, rupatydyna)</li>
            <li>na 1-3 dni difenhydramin?? wchodz??c?? w sk??ad wielu preparat??w dost??pnych bez recepty (
              Apap Noc, Betadrin krople) oraz prometazyn?? (Diphergan).</li>
            <li>Ketotifen ??? nale??y go ???odstawi????? 5 dni przed badaniem.</li>
            <li>Nale??y przerwa?? przyjmowanie lek??w przeciwb??lowych oraz glikokortykosteroid??w systemowych,
              je??eli przekraczaj?? dobow?? dawk?? 10 mg w przeliczeniu na prednizolon.</li>
            <li>Na okolic?? sk??ry, w kt??rej b??d?? zak??adane testy nie mo??na stosowa?? ma??ci zawieraj??cych
              glikokortykosteroidy oraz inhibitory kalcyneuryny (Protopic, Elidel).</li>
            <li>Leki wziewne stosowane w leczeniu astmy mo??na przyjmowa??, nie wp??ywaj?? one na reakcj?? sk??ry na alergeny.</li>
            <li>Wed??ug producenta leku Singulair /montelukst/ ??? leki antyleukotrienowe nale??y odstawi?? tydzie?? przed
              wykonaniem test??w (w dost??pnym pi??miennictwie nie ma informacji na temat wp??ywu lek??w antyleukotrienowych
              na wyniki test??w sk??rnych). </li>
          </Ul>
        </Text2>
        <Photo2/>
      </Content2>
    </Background>
  </>
)

export default PreparationContent