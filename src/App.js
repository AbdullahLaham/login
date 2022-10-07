import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { AccountBox } from './componenets/accountBox';
import Dashboard from './componenets/Dashboard'
import styled from 'styled-components';
import store from './Redux/store';
import { Provider } from 'react-redux';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Routes>
            <Route path='/' element={<AccountBox />}></Route>
            <Route path='Dashboard' element={<Dashboard />}></Route>
        </Routes>
        {/* <AccountBox /> */}
    </AppContainer>
    </Provider>
  );
}

export default App;
