import { FC } from 'react';
import logo from '../../assets/images/logoWhite.svg';

interface LogoProps {
    title: string
}

const Logo: FC<LogoProps> = ({ title }) => {
  return (
    <>
       <img src={logo} alt={title}/>,
    </>
  )
}

export default Logo
