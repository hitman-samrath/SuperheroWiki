import '../App.css'
import logo from '../Assets/logo.png'

const Header = () => {
    return (
        <header className='flex justify-center mt-[-40px] h-52'>
            <img className="pb-8 w-80 h-80" src={logo} alt='Logo'/>
        </header>
    );
}

export default Header
