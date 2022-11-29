import React from 'react';

export const PopOfCard = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  return (
    <div className='w-full h-screen flex justify-center items-center  bg-slate-100 bg-opacity-0 backdrop-blur-sm rounded-lg fixed inset-0 '>
      <div className='w-9/12 h-3/6 flex bg-slate-200 rounded-lg relative'>
        <div className='absolute right-5 top-3 cursor-pointer text-4xl hover:text-6xl' onClick={handleOnClose}>
          &times;
        </div>
      </div>
    </div>
  );
};
