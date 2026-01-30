import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Chatbot from './components/Chatbot';
import { ConfigProvider } from 'antd';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <div className="h-full">
        {!showChat ? (
          <LandingPage onStartChat={() => setShowChat(true)} />
        ) : (
          <Chatbot onBack={() => setShowChat(false)} />
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;
