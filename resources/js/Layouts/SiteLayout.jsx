import React, {useState} from "react";
import {Link} from "@inertiajs/react";
import logoSite from "../../image/LOGO AG.png"
//import { CgProfile } from 'react-icons/cg';
import logo from '../Pages/logo.png';

export default function SiteLayout(props) {

    const [stateOfProfil,setStateOfProfil]=useState('hideNavProfil')
    const profileMenu=()=>{
        setStateOfProfil(stateOfProfil==='hideNavProfil' ? '':'hideNavProfil')
    }
    const {auth, children} = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (<>
        <div className="min-h-screen flex flex-col">
        <header className={`${stateOfProfil}`}>
          <nav>
              <Link href={`/`}>
                  <img className={"logoSite"} src={logoSite} alt={"logo du site Assos & Goodies"}/>
              </Link>
              <div className="lg:flex gap-5 items-center">
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
          </nav>
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
