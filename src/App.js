
import { useState } from 'react';
import './App.css';
// import FormSignUp from './Components/Form/FormSignUp';
// import FormSignUpFinal from './Components/Form/FormSignUpFinal';
// import FormSignUpSelf from './Components/Form/FormSignUpSelf';
// import FormUsingRHF from './Components/Form/FormUsingRHF';
// import FormUsingRHFYup from './Components/Form/FormUsingRHFYup';
import Modal from './Components/Modal/Modal';
import Tooltip from './Components/Tooltip/Tooltip';
// import DropDownWithHook from './Components/DropDown/DropDownWithHook';
// import Form from './Components/Form/Form';
// import Input from './Components/Form/Form';
// import MovieSearchApp from './Components/MovieSearchApp/MovieSearchApp';

// import SideBarMenuBtn from './Components/SideBarMenu/SideBarMenuBtn';
// import Blog from './Components/Blog';
// import DropDown from './Components/DropDown/DropDown';
// import Input from './Components/Input/Input';
// import TextareaAutoResize from './Components/Input/TextareaAutoResize';
// import HackerNews from './Components/News/HackerNews';
// // import Header from './Components/Header/Header';
// import Photos from './Components/Photo/Photos';
// import PhotosAsync from './Components/Photo/PhotosAsync';
// import TestUseState from './Components/TestUseState/TestUseState';
// import Counter from './Components/Counter';

// import HackerNews from './Components/News/HackerNews';
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
import {ErrorBoundary} from 'react-error-boundary'
import TestUseContext from './Components/TestUseContext/TestUseContext';
import Gallery from './Components/Gallery/Gallery';
// const theme = {
//   colors: { 
//     blue: "#2979ff"
//   }
// }

function App() {
  const [show, setShow] = useState(false);
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
        {/* <MovieSearchApp></MovieSearchApp> */}
        {/* <TestUseState></TestUseState> */}
        {/* <Counter></Counter> */}
        {/* <FormSignUp></FormSignUp> */}
        {/* <HackerNews></HackerNews> */}
        {/* <FormSignUpSelf></FormSignUpSelf> */}
        {/* <FormSignUpFinal></FormSignUpFinal> */}
        {/* <FormUsingRHF></FormUsingRHF> */}
        {/* <FormUsingRHFYup></FormUsingRHFYup> */}
{/* 
        <button className="p-4 border border-purple-500 bg-purple-400" onClick={() => setShow(true) }>Show Modal</button>
        <p>lorem isum dolor sit amet, consectetur adipiscing el lorem isum dolor sit amet, consectetur adipiscing el lorem isum dolor sit amet, consectetur adipiscing el lorem isum dolor sit amet, consectetur adipiscing el</p>
        
        <Modal open={show} handleClose={() => setShow(false)}></Modal> */}
          {/* <Tooltip text="Hover me">This is a tooltip content </Tooltip> */}

        
        {/* <TestUseContext></TestUseContext> */}

        <Gallery></Gallery>
    </div>
      
    // </ThemeProvider>
  );
}


export default App;
