// Common types used throughout the application

export interface Tyre {
  id: number;
  brand: string;
  model: string;
  size: string;
  price: number;
  season: 'Summer' | 'Winter' | 'All-Season';
  description?: string;
  image?: string;
  stock?: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  duration?: string;
  category?: 'tyres' | 'auto' | 'both';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicle: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
