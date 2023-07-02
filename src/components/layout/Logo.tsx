import { FC } from 'react';
import logo from '../../assets/images/logoWhite.svg';

interface LogoProps {
    title: string,
    classes?: string,
}

const Logo: FC<LogoProps> = ({ title, classes }) => {
  return (
    <>
       <img src={logo} alt={title} className={classes} />
    </>
  )
}

export default Logo
