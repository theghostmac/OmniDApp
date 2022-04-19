import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return  (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    return (
        // w-full will preserve the website to full scale
        // search for the meaning of each keyword in the tailwindcss documentation
        <nav className='w-full flex md:justify-center justify-between items-center p-4'> 
            <div className='md:flex-[0.5] flex-iniitial justify-center items-center'>
                <img src={logo} alt='logo' className='w-32 cursor-pointer'></img>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["NFT Marketplace", "Exchange", "Technical Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;