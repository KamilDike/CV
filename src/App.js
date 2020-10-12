import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Profile from './components/Profile';
import Skills from './components/Skills';
import CV from './components/CV';
import Footer from './components/Footer';
import { useStateValue } from './StateProvider';
import Login from './components/Login';
import Portfolio from './components/Portfolio';

function App() {
  const [{access}, dispatch] = useStateValue();

  useEffect(() => {
    console.log(access)
  }, [access])

  return (
    <div className="app">
      {!access ? (
        <Login/>
      ) : 
      (
        <div className="app_body">
          {/* <Header/> */}
          <Presentation/>
          {access === 'business' ? (
              <div className="elements">
                <Profile/>
                <Portfolio/>
              </div>
            ) :
            access === 'cooperation' ? (
              <div className="elements">
                <Profile/>
                <Skills/>
                <CV activate/>
              </div>
            ) : null
          }
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
