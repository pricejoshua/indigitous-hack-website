import React from 'react';

const About: React.FC = () => {
  return (
    <section className="text-white p-10 text-center">
      <h2 className="text-4xl font-bold font-mono">What is #HACK?</h2>
      <p className="text-xl mt-4">Our hackathon brings together developers, designers, and entrepreneurs to create amazing projects designed to advance the gospel.</p>
      <p className="text-xl mt-4">This year, we want to host an in-persion hackathon in Chicagoland. We are looking for both partcipants and volunteers to make this event a success!</p>
      <p className="text-xl mt-4">Learn more about global #HACK <a className='text-blue-400' href='https://hack.indigitous.org/'>here</a> </p>
    </section>
  );
};

export default About;

