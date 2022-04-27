
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
import Card2 from './Components/Card/Card2';
import CardList from './Components/Card/CardList';
import CardTailwind from './Components/Card/CardTailwind';

import DoubleCounter from './Components/DoubleCounter/DoubleCounter';
import Game from './Components/tictactoe/Game';
import Toggle from './Components/Toggle/Toggle';

import YoutubeList from './Components/Youtube/YoutubeList';
// import { GlobalStyles } from './GlobalStyles';
// import { ThemeProvider } from 'styled-components'

// const theme = {
//   colors: { 
//     blue: "#2979ff"
//   }
// }

function App() {
  return (
    // <ThemeProvider theme = {theme}> comment themeprovider lai de dung tailwind
    <div>
      {/* comment lai GlobalStyle vi su dung tailwind khong can */}
      {/* <GlobalStyles></GlobalStyles> */} 
      {/* <Game></Game> */}
      {/* <Button >Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <Card></Card> */}
      {/* <CardList> */}
        {/* <Card secondary={true}></Card>
        <Card number={300}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
        {/* <Card2 secondary={true}></Card2>
        <Card2 number={300}></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2> */}
      {/* </CardList> */}
        <CardTailwind></CardTailwind>

    </div>
      
    // </ThemeProvider>
  );
}

export default App;
