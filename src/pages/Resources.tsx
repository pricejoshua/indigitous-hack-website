import React, { useState } from 'react';

interface Link {
    name: string;
    url: string;
  }
  
  interface CategoryProps {
    title: string;
    links: Link[];
  }
  
// categories and links data
const data = {
  digitalMissions: [
    { name: 'faith.tools', url: 'https://faith.tools/' },
    { name: 'indigitous', url: 'https://indigitous.org/' },
    { name: 'renew outreach', url: 'https://renewoutreach.org/' },
    { name: 'faithtech', url: 'https://faithtech.com/' },
    { name: 'faithtech playbook', url: 'https://faithtech.com/the-faithtech-playbook/' },
    { name: 'faithtech workbook', url: 'https://workbook.faithtech.com/' },
    { name: 'gloo', url: 'https://www.gloo.us/' },
  ],
  frameworks: [
    { name: 'builder.io', url: 'https://www.builder.io/' },
    { name: 'dittofi', url: 'https://www.dittofi.com/' },
    { name: 'vercel', url: 'https://vercel.com/' },
    { name: 'streamlit', url: 'https://streamlit.io/' },
    { name: 'gradio', url: 'https://www.gradio.app/' },
    { name: 'mesop', url: 'https://google.github.io/mesop/' },
    { name: 'freedom stack', url: 'https://freedom.faith.tools/' },
  ],
  apis: [
    { name: 'fastapi', url: 'https://fastapi.tiangolo.com/' },
    { name: 'publicapis', url: 'https://publicapis.io/' },
    { name: 'rapidapi collection', url: 'https://rapidapi.com/collection/list-of-free-apis' },
    { name: 'postman explore', url: 'https://www.postman.com/explore' },
  ],
  designTools: [
    { name: 'canva', url: 'https://www.canva.com/' },
    { name: 'figma', url: 'https://www.figma.com/' },
    { name: 'notion', url: 'https://www.notion.so/' },
    { name: 'replit', url: 'https://replit.com/' },
  ],
  aiTools: [
    { name: 'openai', url: 'https://openai.com/' },
    { name: 'ai.google', url: 'https://ai.google.dev/' },
    { name: 'llama by meta', url: 'https://llama.meta.com/' },
    { name: 'langchain', url: 'https://www.langchain.com/' },
    { name: 'groq', url: 'https://groq.com/' },
  ],
};

// collapsible category component
const Category = ({ title, links }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-1'>
      <h3 onClick={() => setIsOpen(!isOpen)} className='text-gray-300 cursor-pointer'>
        {title}
        {isOpen ? '▾' : '▸'}
      </h3>
      {isOpen && (
        <ul style={{ listStyle: 'none' }}>
          {links.map((link, idx) => (
            <li key={idx} className='mb-2'>
              <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0066cc' }}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Resources = () => {
    return (
        <div className="text-white p-10 text-center text-3xl">
            <h1 className="mb-8">Hackathon Resources</h1>
            <Category title="Digital / Missions" links={data.digitalMissions} />
            <Category title="Frameworks / Fast Building" links={data.frameworks} />
            <Category title="APIs" links={data.apis} />
            <Category title="Design / Dev Tools" links={data.designTools} />
            <Category title="AI / LLM / Model Infra" links={data.aiTools} />
        </div>
    );
};

export default Resources;
