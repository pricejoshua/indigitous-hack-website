import React from 'react';

const Signup: React.FC = () => {
  return (
    <section className="text-white p-10 text-center">
      <h2 className="text-4xl font-bold">Sign Up</h2>
      <p className="text-xl mt-4">Choose how you would like to participate:</p>
      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7zFQxUEHaP23M4WXAbDhkVu3UH-mAgPs_l5XitPru4fvXDQ/viewform?usp=sf_link" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded button-hover">Sign up as a Participant</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSesuALL4TBXVKIFwf6jAIrLvKxIgsThD9DaG-YR5aGfp-QFag/viewform?usp=sf_link/signup/volunteer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded button-hover">I want to Volunteer</a>
      </div>
    </section>
  );
};

export default Signup;

