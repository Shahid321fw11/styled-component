import { ThemeProvider } from 'styled-components';
import Card from './Components/Card';
import StyledHeader from './Components/Header';
import { Container } from './Components/Styled/Container.styled';
import GlobalStyles from './Components/Styled/Global.styled';
import content from './Content';

// theme provider 
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {

  return <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledHeader />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}        </Container>
      </>
    </ThemeProvider>
  </>
}

export default App;
