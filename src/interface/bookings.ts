import { TUser } from '../pages/Register/Register';
import { TCar } from './cars';

export type TBooking = {
  _id: string;
  car: TCar;
  user: TUser;
  date: string;
  totalCost: number;
  startTime: string;
  endTime: string;
  payStatus: string;
  status: string;
  tranjactionId: string;
};
