import './App.css';
import TodoTemplate from './component/todo/TodoTemplate';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Join from './component/user/Join';
import Login from './component/user/Login';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from './utill/AuthContext';

function App() {
  return (
    //데이터를 전달하고자 하는 자식 컴포넌트들을 Provider로 감쌉니다.
    <AuthContextProvider>
      <div className='wrapper'>
      <Header/>
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' element={ <TodoTemplate/>}/>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/join' element={ <Join/>}/>
          </Routes>
        </div>
      <Footer/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
