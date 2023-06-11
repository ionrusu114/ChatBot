import {FC} from "react";

const Header : FC = () => {
    return (
        <nav className="absolute inset-x-0 top-0 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline md:container md:mx-auto rounded-md mt-6">
            <div className="mb-2 sm:mb-0">
                <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Academia Militara</a>
            </div>
            <div>

                <a href="https://academy.army.md/contacte/" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Contact</a>
            </div>
            <img
                src="https://academy.army.md/wp-content/uploads/academy.png"
                width={125}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block'
                alt=""/>
        </nav>
    );
};

export default Header ;
