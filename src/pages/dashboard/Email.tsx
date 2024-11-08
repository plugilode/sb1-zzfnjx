import React, { useState } from 'react';

const Email = () => {
  const [view, setView] = useState<'inbox' | 'send'>('inbox');

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-1/5 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Favorites</h2>
        <ul>
          <li className="mb-2 cursor-pointer" onClick={() => setView('inbox')}>Inbox</li>
          <li className="mb-2 cursor-pointer">Drafts</li>
          <li className="mb-2 cursor-pointer">Archive</li>
        </ul>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <input type="text" placeholder="Search" className="p-2 rounded bg-gray-700 text-white" />
          <button className="bg-blue-500 px-4 py-2 rounded">Settings</button>
        </header>
        <main className="flex-1 p-4 overflow-y-auto">
          {view === 'inbox' ? (
            <InboxView />
          ) : (
            <SendAndAdminView />
          )}
        </main>
      </div>
    </div>
  );
};

const InboxView = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Inbox</h2>
    <ul>
      <li className="p-4 border-b border-gray-700">Email 1</li>
      <li className="p-4 border-b border-gray-700">Email 2</li>
    </ul>
  </div>
);

const SendAndAdminView = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Send and Administration</h2>
    <form>
      <input type="text" placeholder="To" className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white" />
      <input type="text" placeholder="Subject" className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white" />
      <textarea placeholder="Message" className="w-full p-2 mb-2 border border-gray-600 rounded bg-gray-800 text-white h-32"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  </div>
);

export default Email;
