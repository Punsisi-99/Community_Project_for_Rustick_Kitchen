import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-[#C586A5] border-dashed rounded-full animate-spin"></div>
      {/* Loading Text */}
      <p className="mt-4 text-3xl font-medium text-gray-800">Loading...</p>
    </div>
  );
};

export default Loader;

// Add a Loader component to your React app to display a loading spinner during route transitions. The Loader component will be displayed whenever the isLoading state is true, and it will be hidden when the isLoading state is false. This will provide a visual indication to users that the app is loading new content.