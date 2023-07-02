import { useState } from 'react'
import IconNotification4Line from '../../assets/icons/Notification'
import IconSearch from '../../assets/icons/Search'
import IconProfile from '../../assets/icons/Profile';
import IconHeart from '../../assets/icons/Heart';
import IconSettingsOutline from '../../assets/icons/Setting';

const TopMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex">
       <div className="ml-4 flex items-center space-x-4">
       <div>
        <IconNotification4Line/>
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500">
        </span>
        </span>
       </div>
       <div><IconSearch/></div>
       <div><IconHeart/></div>
       <div><IconSettingsOutline/></div>
       <button
         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
         onClick={toggleMenu}
       >
         <IconProfile/>
       </button>
        {isMenuOpen && (
        <div className="origin-top-right absolute right-0 top-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
         <ul>
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Account</li>
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Working Status</li>
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Log Out</li>
         </ul>
        </div>
       )}
       </div>
   </div>
  )
}

export default TopMenu
