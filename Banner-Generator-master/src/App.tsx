import React, { useState, useContext } from 'react';
import { ContentsProvider, ContentsContext } from './contexts/contents';

import './styles/App.scss';
import 'antd/dist/antd.min.css';
import SizeForm from './components/Tools/SizeForm';
import FontEditor from './components/Tools/FontEditor';
import { Header } from './components/Header';
import EditorViewer from './components/EditorViewer/EditorViewer';
import BGEditor from './components/Tools/BGEditor';
import { Divider } from 'antd';
import Login from './components/Login/Login';

const AppContent: React.FC = () => {
  const { state } = useContext(ContentsContext);

  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <div className='toolWrapper'>
          <SizeForm />
          <div className='paletteWrapper'>
            <FontEditor />
            <Divider type='vertical' style={{ backgroundColor: 'white' }} />
            <BGEditor />
          </div>
        </div>
        <EditorViewer width={state.width} height={state.height} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ContentsProvider>
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <AppContent />}
    </ContentsProvider>
  );
};

export default App;