import React, { useState } from 'react';
import { Bubble, Sender, ThoughtChain } from '@ant-design/x';
import { Button, Layout, Typography, Space, Card, Avatar } from 'antd';
import { ArrowLeftOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

interface Message {
  id: string | number;
  content: string;
  role: 'user' | 'assistant';
  thought?: string;
}

interface ChatbotProps {
  onBack: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm the RICH AI assistant. How can I help you explore the RICH paradigm today?",
      role: 'assistant',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      content: text,
      role: 'user',
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setContent('');

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await response.json();

      const aiMsg: Message = {
        id: Date.now() + 1,
        content: data.content,
        role: 'assistant',
        thought: data.thought,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Failed to fetch AI response:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          content: "Sorry, I'm having trouble connecting to the brain. Please make sure the backend is running.",
          role: 'assistant',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="h-screen bg-gray-50 flex flex-col">
      <Header className="bg-white border-b px-4 flex items-center justify-between shrink-0">
        <Space>
          <Button icon={<ArrowLeftOutlined />} onClick={onBack} type="text" />
          <Title level={4} style={{ margin: 0 }}>RICH AI Chat</Title>
        </Space>
        <div className="flex items-center text-green-500">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
          Online
        </div>
      </Header>

      <Content className="flex-1 flex flex-col p-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[80%]">
                {msg.thought && (
                  <div className="mb-2">
                    <ThoughtChain
                      items={[{ title: 'Thought Process', status: 'success', description: msg.thought }]}
                    />
                  </div>
                )}
                <Bubble
                  content={msg.content}
                  avatar={
                    <Avatar
                      icon={msg.role === 'user' ? <UserOutlined /> : <RobotOutlined />}
                      style={{ backgroundColor: msg.role === 'user' ? '#1677ff' : '#52c41a' }}
                    />
                  }
                  placement={msg.role === 'user' ? 'end' : 'start'}
                />
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
               <Bubble
                  loading
                  content="..."
                  avatar={
                    <Avatar icon={<RobotOutlined />} style={{ backgroundColor: '#52c41a' }} />
                  }
                />
            </div>
          )}
        </div>

        <Card className="border-t shrink-0">
          <Sender
            value={content}
            onChange={setContent}
            onSubmit={handleSend}
            placeholder="Type your message here..."
            loading={loading}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default Chatbot;
