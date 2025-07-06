'use client';

import React from 'react';
import { FiMapPin, FiExternalLink } from 'react-icons/fi';

const Address: React.FC = () => {
  const handleViewLargerMap = () => {
    const address = "Nishindara Fakir Uddin School & College, Near At, Bogura 5800, Bangladesh";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left side - Address info */}
        <div className="space-y-6 bg-gray-300 flex flex-col items-center justify-center rounded-xl h-3/4 w-full ">
          <div className="flex items-center flex-col space-x-4">
            <div className="bg-teal-700 rounded-full p-4">
              <FiMapPin className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Address
            </h1>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg text-center text-gray-800 font-medium">
              Nishindara Fakir Uddin School & College,
            </p>
            <p className="text-lg text-center text-gray-800">
              Near At, Bogura 5800, Bangladesh
            </p>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="relative col-span-2">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps Embed */}
            <div className="relative h-80">
              <iframe
                src="https://maps.google.com/maps?q=Nishindara+Fakir+Uddin+School+College+Bogura+5800+Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-lg"
                title="Google Maps - Nishindara Fakir Uddin School & College Location"
              />
            </div>
            
            {/* View larger map link */}
            <div className="bg-white p-3 border-t">
              <button
                onClick={handleViewLargerMap}
                className="text-blue-600 cursor-pointer hover:text-blue-800 text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <span>View larger map</span>
                <FiExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;