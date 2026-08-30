import express from 'express';

const router = express.Router();

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434/api/chat';
const MODEL_NAME = 'mindease-ai';

router.post('/', async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array is required.' });
        }

        const response = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: messages,
                stream: true
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Ollama Error:', errorText);
            return res.status(response.status).json({ error: 'Failed to communicate with the AI model.' });
        }

        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        const decoder = new TextDecoder('utf-8');
        
        for await (const chunk of response.body) {
            const text = decoder.decode(chunk, { stream: true });
            const lines = text.split('\n').filter(line => line.trim() !== '');
            for (const line of lines) {
                try {
                    const parsed = JSON.parse(line);
                    if (parsed.message && typeof parsed.message.content === 'string') {
                        res.write(`data: ${JSON.stringify({ content: parsed.message.content })}\n\n`);
                    }
                } catch (e) {
                }
            }
        }

        res.write('data: [DONE]\n\n');
        res.end();

    } catch (error) {
        console.error('Error in chat route:', error);
        res.status(500).json({ error: 'Internal server error while connecting to AI. Ensure Ollama is running locally.' });
    }
});

export default router;
