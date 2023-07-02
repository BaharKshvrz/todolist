import Logo from './Logo'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-900 text-white">
      <div className="relative flex w-full items-center ml-10">
          <Logo title="Risidio Logo" classes="h-auto w-24 p-2"/>
      </div>
     <div className="absolute flex items-center justify-center px-5 z-40">
           <div className="relative w-full max-w-sm">
           <div className="absolute top-0 -left-4 w-16 h-16 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
           <div className="absolute top-0 -right-4 w-16 h-16 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
           <div className="absolute top-0 left-10 w-16 h-16 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
           <div className="m-2 relative space-y-4"></div>
          </div>
     </div>
     <NavMenu/>
    </nav>
  )
}

export default Navbar
