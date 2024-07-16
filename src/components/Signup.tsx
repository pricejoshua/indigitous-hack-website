import React, { useState } from 'react';
import VolunteerForm from './VolunteerForm';
import ParticipantForm from './ParticipantForm';
import Modal from 'react-modal';


const Signup: React.FC = () => {
  const [showParticipantForm, setShowParticipantForm] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  function toggleParticipantForm() {
    setShowParticipantForm(!showParticipantForm);
  }

  function toggleVolunteerForm() {
    setShowVolunteerForm(!showVolunteerForm);
  }

  return (
    <section className="text-white p-10 text-center">
      <Modal
        isOpen={showParticipantForm}
        onRequestClose={toggleParticipantForm}
        contentLabel="Participant Form"
        shouldCloseOnOverlayClick={true}
      >
        <div className="relative bg-white rounded p-8">
          <ParticipantForm />
        </div>
      </Modal>

      <Modal
        isOpen={showVolunteerForm}
        onRequestClose={toggleVolunteerForm}
        contentLabel="Volunteer Form"
        shouldCloseOnOverlayClick={true}
      >
        <div className="relative bg-white rounded p-8">
          <VolunteerForm />
        </div>
      </Modal>

      <h2 className="text-4xl font-bold">Sign Up</h2>
      <p className="text-xl mt-4">Choose how you would like to participate:</p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={toggleParticipantForm}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
        >
          Sign up as a Participant
        </button>
        <button
          onClick={toggleVolunteerForm}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          I want to Volunteer
        </button>
      </div>
    </section>
  );
};

export default Signup;

