import React from 'react';

interface TimeProps {
  date: Date;
}

const Time: React.FC<TimeProps> = ({ date }) => {
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return <span>{formatDate(date)}</span>;
};

export default Time;
