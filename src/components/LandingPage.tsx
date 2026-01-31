import React from 'react';
import { Layout, Typography, Button, Row, Col, Card, Space } from 'antd';
import { RocketOutlined, MessageOutlined, BulbOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

interface LandingPageProps {
  onStartChat: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartChat }) => {
  return (
    <Layout className="min-h-screen bg-white">
      <Header className="flex items-center justify-between bg-white px-8 border-b">
        <div className="flex items-center">
          <RocketOutlined className="text-blue-600 text-2xl mr-2" />
          <Title level={4} style={{ margin: 0 }}>RICH AI</Title>
        </div>
        <Space>
          <Button type="text">Features</Button>
          <Button type="text">Solutions</Button>
          <Button type="primary" onClick={onStartChat}>Get Started</Button>
        </Space>
      </Header>

      <Content>
        {/* Hero Section */}
        <div className="py-20 px-8 bg-gradient-to-b from-blue-50 to-white text-center">
          <Title level={1} className="text-5xl font-bold mb-6">
            The RICH Paradigm for AI Agents
          </Title>
          <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            The Ant Design team presents the RICH paradigm, crafting superior AI interface solutions
            and pioneering intelligent experiences.
          </Paragraph>
          <Button type="primary" size="large" onClick={onStartChat} icon={<MessageOutlined />}>
            Chat with RICH AI
          </Button>
        </div>

        {/* RICH Features Section */}
        <div className="py-20 px-8 max-w-6xl mx-auto">
          <Title level={2} className="text-center mb-16">The RICH Framework</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={6}>
              <Card hoverable className="h-full border-none bg-blue-50">
                <div className="text-blue-600 text-3xl mb-4"><AppstoreOutlined /></div>
                <Title level={4}>Render</Title>
                <Paragraph>
                  Rich content rendering including Markdown, charts, and interactive components
                  tailored for AI responses.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card hoverable className="h-full border-none bg-indigo-50">
                <div className="text-indigo-600 text-3xl mb-4"><BulbOutlined /></div>
                <Title level={4}>Intelligence</Title>
                <Paragraph>
                  Native support for thought chains, model selection, and intelligent state management.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card hoverable className="h-full border-none bg-purple-50">
                <div className="text-purple-600 text-3xl mb-4"><MessageOutlined /></div>
                <Title level={4}>Chat</Title>
                <Paragraph>
                  Conversational interfaces that feel natural, with support for multi-modal inputs.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card hoverable className="h-full border-none bg-pink-50">
                <div className="text-pink-600 text-3xl mb-4"><RocketOutlined /></div>
                <Title level={4}>Holistic</Title>
                <Paragraph>
                  A complete ecosystem of components designed specifically for the next generation of AI apps.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-8 bg-blue-600 text-white text-center">
          <Title level={2} style={{ color: 'white' }} className="mb-6">
            Ready to experience the future?
          </Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.8)' }} className="mb-10 text-lg">
            Join thousands of developers building superior AI interfaces with Ant Design.
          </Paragraph>
          <Button size="large" onClick={onStartChat} ghost>
            Launch Chatbot Demo
          </Button>
        </div>
      </Content>

      <Footer className="text-center bg-gray-50 py-10">
        <Text type="secondary">RICH Paradigm ©2025 Created by Ant Design Team</Text>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
