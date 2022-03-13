import React from 'react';
import logo from './logo.png';
import './App.css';
import {type Item, type Link, Card, linkBtn} from './components/Card';

const App: React.FC = () => {
  return (
    <div className="w-4/5 m-auto text-center mt-4">
      <header className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold'>Tanukizzan Apps</h2>
        <img src={logo} className="h-12" alt="logo" />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {
          Card.map((item: Item) => (
            <div key={item.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
              <a href={item.url}>
                <img src={item.image} alt={item.title} className='w-full' />
                <h2 className='font-bold text-xl mb-2 px-6 py-4'>{item.title}</h2>
              </a>
            </div>
          ))
        }
      </div>
      <footer className='my-8'>
        <div>
          <nav className='flex my-8 flex-wrap justify-center'>
            {
              linkBtn.map((link: Link) => (
                <a href={link.url} className='link-btn'>{link.title}</a>
              ))
            }
          </nav>
        </div>
        <p>&copy; 2019-2022 Tanukizzan</p>
      </footer>
    </div>
  );
}

export default App;
