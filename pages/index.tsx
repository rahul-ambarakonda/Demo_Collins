import { useEffect, useState } from 'react';
import ApplianceCard from '../src/components/ApplianceCard';

interface Appliance {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const Home: React.FC = () => {
  const [appliances, setAppliances] = useState<Appliance[]>([]);

  useEffect(() => {
    const fetchAppliances = async () => {
      try {
        const response = await fetch('/data/appliances.json');
        const data: Appliance[] = await response.json();
        setAppliances(data);
      } catch (error) {
        console.error("Failed to fetch appliances:", error);
      }
    };

    fetchAppliances();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Appliances</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {appliances.map((appliance) => (
          <ApplianceCard key={appliance.id} {...appliance} />
        ))}
      </div>
    </div>
  );
};

export default Home;
