import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const { messages } = req.body;
  const lastMessage = messages[messages.length - 1];

  // Simple mock AI response
  let aiResponse = "I am a RICH paradigm AI agent. How can I help you today?";

  if (lastMessage.content.toLowerCase().includes('rich')) {
    aiResponse = "The RICH paradigm stands for Render, Intelligence, Chat, and Holistic. It's designed to create superior AI experiences.";
  } else if (lastMessage.content.toLowerCase().includes('hello')) {
    aiResponse = "Hello! I'm your Ant Design powered AI assistant.";
  }

  // Simulate a delay
  setTimeout(() => {
    res.json({
      content: aiResponse,
      role: 'assistant',
      // Include some mock "thought" for Ant Design X ThoughtChain
      thought: "The user is asking about " + (lastMessage.content.includes('rich') ? "the RICH paradigm" : "general information") + ". I should provide a helpful response based on the Ant Design X principles."
    });
  }, 1000);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
