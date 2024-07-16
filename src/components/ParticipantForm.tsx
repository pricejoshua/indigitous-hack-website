import React from 'react';

const ParticipantForm: React.FC = () => {
  return (
    <div className="bg-white p-10 text-center min-w-fit">
      <h2 className="text-4xl font-bold">Participant Form</h2>
      <p className="text-xl mt-4">Please fill out the form below to participate:</p>
      <iframe title="Participant Form" src="https://docs.google.com/forms/d/e/1FAIpQLSf7zFQxUEHaP23M4WXAbDhkVu3UH-mAgPs_l5XitPru4fvXDQ/viewform?embedded=true" width="100%" height="1600" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
    </div>
  );
};

export default ParticipantForm;