import {FC} from "react";

const Footer : FC = () => {
    return (
        <footer
            className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
                <a href="https://flowbite.com"
                   className="hover:underline"
                   target="_blank"> Academia Militara™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                <li>
                    <a href="https://academy.army.md/informatii-publice/intrebari-frecvente/"
                       className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Despre</a>
                </li>

                <li>
                    <a href="https://academy.army.md/contacte/" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer ;
