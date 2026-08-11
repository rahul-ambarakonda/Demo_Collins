import React from 'react';

interface ApplianceCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const ApplianceCard: React.FC<ApplianceCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img src={imageUrl} alt={name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ApplianceCard;
