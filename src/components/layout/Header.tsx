import Logo from "./Logo"

const Header = () => {
  return (
    <header className="bg-black h-24 flex justify-around items-center">
        <Logo title="Risidio Logo"/>
        <p className="text-white text-3xl">
           innovate
           involve
           inspire
        </p>
    </header>
  )
}

export default Header
