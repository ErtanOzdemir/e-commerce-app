import { ReactElement } from 'react';
import RateStars from '../components/RateStars/RateStars';
import {
  CanceledIcon,
  DeliveredIcon,
  InTransitIcon,
  PreparingIcon,
} from '../assests/icons';

export enum STEPS {
  CART_STEP,
  CHECKOUT_STEP,
}

export enum PAYMENT_METHODS {
  CREDIT_CARD = 'CREDIT_CARD',
  MB_MONEY = 'MB_MONEY',
}

export const rateOptions: { value: number; label: ReactElement }[] = [
  {
    value: 1,
    label: <RateStars rate={1} />,
  },
  {
    value: 2,
    label: <RateStars rate={2} />,
  },
  {
    value: 3,
    label: <RateStars rate={3} />,
  },
  {
    value: 4,
    label: <RateStars rate={4} />,
  },
  {
    value: 5,
    label: <RateStars rate={5} />,
  },
];

export const SHIPMENT_STATUSES: any = {
  PREPARING: {
    secondaryColor: '#fcf5dd',
    primaryColor: '#FFC107',
    description: 'Still Preparing',
    icon: <PreparingIcon />,
  },
  DELIVERED: {
    secondaryColor: '#e0f7e0',
    primaryColor: '#4CAF50',
    description: 'Delivered',
    icon: <DeliveredIcon />,
  },
  IN_TRANSIT: {
    secondaryColor: '#e3eef9',
    primaryColor: '#2196F3',
    description: 'On Route',
    icon: <InTransitIcon />,
  },
  CANCELED: {
    secondaryColor: '#fee1de',
    primaryColor: '#F44336',
    description: 'Canceled',
    icon: <CanceledIcon />,
  },
};
