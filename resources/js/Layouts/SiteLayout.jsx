import React, {useState} from "react";
import {Link} from "@inertiajs/react";
import logo from '../Pages/logo.png';

export default function SiteLayout(props) {
    const {auth, children} = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (<>
        <div className="min-h-screen flex flex-col">
            <header>
                <div className="flex w-full lg:p-6 p-6 justify-between lg:justify-center gap-10 items-center">
                    <div className="block lg:hidden">
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 16 10"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Account menu icon"
                            onClick={hamburgerMenu}
                        >
                            <g
                                fill="none"
                                stroke="#071F45"
                                strokeLinecap="round"
                                strokeWidth="2"
                            >
                                <path d="M15 9H1M15 5.25H1M15 1.25H1"></path>
                            </g>
                        </svg>
                    </div>
                    <Link
                        href="/"
                        className="text-purple-600 text-center lg:text-start flex items-center">
                        <img src={logo} alt="logo_app" width={50} height={50}/>
                        {/*<span>*/}
                        {/*    ASSO & GOODIES*/}
                        {/*</span>*/}
                    </Link>

                    <Link
                        href={route('search')}
                        className="flex sm:bg-white justify-end lg:justify-start lg:w-5/12 lg:bg-slate-100 rounded lg:py-2 lg:px-4 lg:gap-2 items-center ">
                        <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Search Icon"
                        >
                            <g
                                strokeWidth="2"
                                transform="translate(1 1)"
                                stroke="#071F45"
                                fill="none"
                                fillRule="evenodd"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="7.5" cy="7.5" r="7.5"></circle>
                                <path d="M18 18l-5.2-5.2"></path>
                            </g>
                        </svg>
                        <span className="opacity-90 text-sm	hidden lg:block">
              Catégories...
            </span>
                    </Link>
                    <div className="hidden lg:flex gap-5 items-center">
                        {/*<a href="/" className="hover:text-purple-600">*/}
                        {/*    Connexion*/}
                        {/*</a>*/}
                        {/*<a href="/" className="text-white bg-purple-600 px-5 py-1 rounded">*/}
                        {/*    S'inscrire*/}
                        {/*</a>*/}
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="hover:text-purple-600"
                                // className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    // className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    className="text-white bg-purple-600 px-5 py-1 rounded"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="text-white bg-purple-600 px-5 py-1 rounded"
                                    // className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
            <div className="flex-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>

            <footer className="h-16 bg-white shadow">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <p>
                            © 2023 <Link href="/" className="hover:text-purple-600">ASSO &
                            GOODIES</Link>
                        </p>
                        <p className="mt-2 sm:mt-0">
                            <Link href="/" className="hover:text-purple-600">Mentions légales</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </>);
}
