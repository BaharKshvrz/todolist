import React from 'react';

interface TimeProps {
  date: Date;
}

export const Time: React.FC<TimeProps> = ({ date }) => {
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return <span>{formatDate(date)}</span>;
};

export const RemainingDays: React.FC<TimeProps> = ({ date }) => {
  const calculateRemainingDays = (date: Date): number => {
    const currentDate = new Date();
    const timeDifference = date.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return remainingDays;
  };

  const remainingDays = calculateRemainingDays(date);

  return <> { remainingDays ? `${remainingDays} day(s)` : "" }</>;
};



