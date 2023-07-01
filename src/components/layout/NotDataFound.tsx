import { FC, ReactNode } from 'react';

interface NoDataFoundProps {
    children: ReactNode
  }
  
const NoDataFound: FC<NoDataFoundProps> = ({children}) => {
  return  <>{children}</>;
};

export default NoDataFound;