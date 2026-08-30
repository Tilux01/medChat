import ReactMarkdown from 'react-markdown';

function ChatBubble({ message, author, timestamp }) {
    const isUser = author === 'user';

    let thinkContent = null;
    let mainContent = message;

    if (!isUser) {
        const thinkRegex = /(?:<think>|<unused94>thought)[\s\S]*?(?:<\/think>|<\/unused94>|$)/;
        mainContent = message.replace(thinkRegex, '').trim();
    }

    const markdownComponents = {
        ul: ({node, ...props}) => <ul className="list-disc pl-5 my-2" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-2" {...props} />,
        li: ({node, ...props}) => <li className="mb-1" {...props} />,
        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
        strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
        em: ({node, ...props}) => <em className="italic" {...props} />,
        h1: ({node, ...props}) => <h1 className="text-xl font-bold my-2" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-lg font-bold my-2" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-base font-bold my-2" {...props} />,
        code: ({node, inline, ...props}) => inline 
            ? <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-sm" {...props} />
            : <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto my-2 text-sm"><code {...props} /></pre>
    };

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xl rounded-3xl p-4 text-sm shadow-sm ${isUser ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100'}`}>
                <div className="mb-2 font-medium text-slate-800 dark:text-slate-100">{isUser ? 'You' : 'Coach Mary'}</div>

                {mainContent && (
                    <div className="leading-7 break-words">
                        <ReactMarkdown components={markdownComponents}>
                            {mainContent}
                        </ReactMarkdown>
                    </div>
                )}

                <div className="mt-3 text-right text-xs text-slate-500 dark:text-slate-400">{timestamp}</div>
            </div>
        </div>
    );
}

export default ChatBubble;
