import React from 'react';

export interface PricingPlan {
  duration: string;
  price: number;
  originalPrice?: number;
  features: string[];
  isPopular?: boolean;
  saveText?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
}

export enum DeviceCount {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4
}