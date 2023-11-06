import React from 'react';

const EmailInput: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mr-2"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmailInput;