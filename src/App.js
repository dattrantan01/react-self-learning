
import './App.css';
import DropDownWithHook from './Components/DropDown/DropDownWithHook';
import Form from './Components/Form/Form';
import Input from './Components/Form/Form';
import MovieSearchApp from './Components/MovieSearchApp/MovieSearchApp';

import SideBarMenuBtn from './Components/SideBarMenu/SideBarMenuBtn';
// import Blog from './Components/Blog';
// import DropDown from './Components/DropDown/DropDown';
// import Input from './Components/Input/Input';
// import TextareaAutoResize from './Components/Input/TextareaAutoResize';
// import HackerNews from './Components/News/HackerNews';
// // import Header from './Components/Header/Header';
import Photos from './Components/Photo/Photos';
import PhotosAsync from './Components/Photo/PhotosAsync';
import TestUseState from './Components/TestUseState/TestUseState';
// import TestUseEffect from './Components/TestUseEffect/TestUseEffect';
// import TestUseEffect from './Components/TestUseEffect/TestUseEffect';
// import Button from './Components/Button/Button';
// import Card from './Components/Card/Card';
// import Card2 from './Components/Card/Card2';
// import Cardgist from './Components/Card/CardList';
// import CardTailwind from './Components/Card/CardTailwind';

// import DoubleCounter from './Components/DoubleCounter/DoubleCounter';
// import Game from './Components/tictactoe/Game';
// import Toggle from './Components/Toggle/Toggle';


// import YoutubeList from './Components/Youtube/YoutubeList';
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
        {/* <CardTailwind CardBotNumber></CardTailwind> */}
        {/* <Photos></Photos> */}
        {/* <Header></Header> */}
        {/* <PhotosAsync></PhotosAsync> */}
        {/* <HackerNews></HackerNews> */}
        {/* <TestUseEffect></TestUseEffect> */}
        {/* <Input></Input> */}
        {/* <TextareaAutoResize></TextareaAutoResize> */}

        {/* <DropDown></DropDown> */}
        {/* <Blog></Blog> */}
        {/* <DropDownWithHook></DropDownWithHook> */}
        {/* <SideBarMenuBtn></SideBarMenuBtn> */}
        {/* <Form></Form> */}
        <MovieSearchApp></MovieSearchApp>
        {/* <TestUseState></TestUseState> */}
    </div>
      
    // </ThemeProvider>
  );
}

export default App;
