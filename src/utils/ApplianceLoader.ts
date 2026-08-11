import { Appliance } from "../types/Appliance";

export async function loadAppliances(): Promise<Appliance[]> {
  try {
    const response = await fetch("/data/appliances.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Appliance[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load appliances:", error);
    return [];
  }
}
