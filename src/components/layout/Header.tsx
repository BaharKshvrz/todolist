import Logo from "./Logo"

const Header = () => {
  return (
    <header className="bg-black relative h-24 flex justify-around p-5 drop-shadow-md">
        <Logo title="Risidio Logo"/>
        <div className="absolute flex items-center justify-center px-5 z-40">
           <div className="relative w-full max-w-sm">
           <div className="absolute top-0 -left-4 w-24 h-24 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
           <div className="absolute top-0 -right-4 w-24 h-24 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
           <div className="absolute top-0 left-10 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
           <div className="m-2 relative space-y-4"></div>
          </div>
        </div>
        <div className="relative font-bold text-white flex justify-center items-center">
           <p className="absolute -top-5 -left-5 italic">innovate</p>
           <p className="absolute top-3 -left-11 italic">involve</p>
           <p className="absolute top-10 -left-20 italic">inspire</p>
        </div>
       </header>
  )
}

export default Header
