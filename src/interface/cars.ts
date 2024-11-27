export type TCar = {
  _id: string;
  name: string;
  image: string;
  description: string;
  color: string;
  isElectric: boolean;
  status?: 'available' | 'unavailable';
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
};
