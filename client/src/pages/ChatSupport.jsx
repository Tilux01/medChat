import { useState } from 'react';
import { MessageCircle, Activity, HeartHandshake } from 'lucide-react';
import ChatBubble from '../components/ChatBubble.jsx';
import { suggestedPrompts } from '../data/dummyData.js';

const initialMessages = [
    { id: 1, author: 'bot', message: 'Hello! I’m here to support you. How are you feeling today?', timestamp: '09:12 AM' },
];

function ChatSupport() {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (text) => {
        if (!text.trim() || isLoading) return;
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const userMessage = { id: Date.now(), author: 'user', message: text, timestamp: formattedTime };
        setMessages((current) => [...current, userMessage]);
        setInput('');
        setIsLoading(true);

        const chatHistory = [...messages, userMessage].map(msg => {
            let cleanContent = msg.message;
            if (msg.author === 'bot') {
                const thinkRegex = /(?:<think>|<unused94>thought)[\s\S]*?(?:<\/think>|<\/unused94>|$)/;
                cleanContent = cleanContent.replace(thinkRegex, '').trim();
            }
            return {
                role: msg.author === 'bot' ? 'assistant' : 'user',
                content: cleanContent
            };
        });

        try {
            const response = await fetch('http://localhost:4000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: chatHistory })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                setMessages((current) => [...current, { id: Date.now(), author: 'bot', message: `Error: ${errorData.error || 'Failed to connect.'}`, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
                setIsLoading(false);
                return;
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let aiMessage = '';
            const botMessageId = Date.now();
            
            setMessages((current) => [...current, { id: botMessageId, author: 'bot', message: '', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
            
            setIsLoading(false);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n');
                
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const dataStr = line.replace('data: ', '').trim();
                        if (dataStr === '[DONE]') break;
                        if (!dataStr) continue;
                        
                        try {
                            const data = JSON.parse(dataStr);
                            aiMessage += data.content;
                            
                            setMessages((current) => 
                                current.map(msg => 
                                    msg.id === botMessageId ? { ...msg, message: aiMessage } : msg
                                )
                            );
                        } catch (e) {
                        }
                    }
                }
            }
        } catch (error) {
            setMessages((current) => [...current, { id: Date.now(), author: 'bot', message: 'Network error.', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
            setIsLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                <section className="flex min-h-[70vh] flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">AI Support</p>
                            <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Talk to a calm companion</h1>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-100">
                            <Activity className="h-4 w-4" /> Typing indicator
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 overflow-y-auto overflow-x-hidden rounded-[1.25rem] border border-slate-200/70 bg-slate-50/60 p-4 pr-3 dark:border-slate-700 dark:bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent dark:scrollbar-thumb-slate-700">
                        {messages.map((message) => (
                            <ChatBubble key={message.id} author={message.author} message={message.message} timestamp={message.timestamp} />
                        ))}
                        {isLoading && (
                            <div className="flex gap-2 p-2 text-sm text-slate-500 animate-pulse">
                                AI is typing...
                            </div>
                        )}
                    </div>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            sendMessage(input);
                        }}
                        className="mt-6 flex flex-col gap-3"
                    >
                        <textarea
                            rows="3"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Share a feeling, ask a question, or try a prompt..."
                            className="min-h-[120px] resize-none rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        />
                        <button type="submit" disabled={isLoading} className="self-end rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50">
                            {isLoading ? 'Sending...' : 'Send message'}
                        </button>
                    </form>
                </section>

                <aside className="flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950 lg:sticky lg:top-24">
                    <div className="self-start w-full">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Suggested prompts</p>
                        <div className="mt-4 grid gap-3">
                            {suggestedPrompts.map((prompt, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => sendMessage(prompt)}
                                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-left text-sm text-slate-900 shadow-sm transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <div className="mb-4 flex items-center gap-3 text-slate-900 dark:text-slate-100">
                            <HeartHandshake className="h-5 w-5 text-sky-600" />
                            <p className="font-semibold">Friendly and supportive design</p>
                        </div>
                        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">The chat interface is designed to feel calm while keeping your conversation easy to follow with timestamps and clear message bubbles.</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default ChatSupport;
