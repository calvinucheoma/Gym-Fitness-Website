import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';



function App() {

  return (

      <Box width="400px" m='auto' sx={{width: {xl: '1488px'}}}>

        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/exercise/:id' element={<ExerciseDetail/>} />
        </Routes>

        <Footer/>

      </Box>

  );

};

export default App;
