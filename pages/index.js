import styled from 'styled-components'
import db from '../db.json'
import Widget from '../pages/src/components/Widget'
import Footer from '../pages/src/components/Footer'
import GitHubCorner from '../pages/src/components/GitHubCorner'
import QuizBackground from '../pages/src/components/QuizBackground'
// teste

// function Title(props) { // propriedades ou propscidades 
//   return (
//   <h1>
//     {props.children}
//   </h1>
//   )
// }

// const BackgroundImage = styled.div`
//       background-image: url(${db.bg});
//       flex: 1;
//       background-size: cover;
//       background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top:450px;
  margin: auto 10%;
  @media screen and (max-width:500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
   <QuizBackground backgroundImage={db.bg}>
     <QuizContainer>
        <Widget>
            <Widget.Header>
              <h1>The Legends Of Coffe</h1>
            </Widget.Header>


          <Widget.Content>
          <p>Lorem ipsum sit amet</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>

          <h1>The Legends Of Coffe</h1>

          <p>Lorem ipsum sit amet</p>

          </Widget.Content>
        </Widget>
        <Footer />
     </QuizContainer>
     <GitHubCorner projectUrl=""/>
   </QuizBackground>

    )
}
