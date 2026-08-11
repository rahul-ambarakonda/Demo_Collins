import React from 'react';

interface ApplianceCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const ApplianceCard: React.FC<ApplianceCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <img
        src={imageUrl}
        alt={name}
        className="w-40 h-40 object-cover rounded-full mb-6 mx-auto border-4 border-white shadow-md"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
        {name}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed px-2">
        {description}
      </p>
    </div>
  );
};

export default ApplianceCard;
