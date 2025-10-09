import { useState, useEffect } from 'react';
import { PortfolioData } from '../types/portfolio';
import portfolioData from '../data/portfolio.json';

export const usePortfolioData = (): PortfolioData | null => {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    setData(portfolioData as PortfolioData);
  }, []);

  return data;
};
