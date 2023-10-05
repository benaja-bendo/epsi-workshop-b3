import React, { useState } from "react";
import logoSite from "../../image/LOGO AG.png"
import { CgProfile } from 'react-icons/cg';
import "../../css/header.css"
import { Link } from 'react-router-dom'
//note a sois meme bare de recheche dans les pages récup code github projrtlimber pagination/recherche
export const Header = () => {
    const [stateOfProfil,setStateOfProfil]=useState('hideNavProfil')
    const profileMenu=()=>{
        setStateOfProfil(stateOfProfil==='hideNavProfil' ? '':'hideNavProfil')
    }
  return (
      <header className={`${stateOfProfil}`}>
          <nav>
              <Link to={`/`}>
                  <img className={"logoSite"} src={logoSite} alt={"logo du site Assos & Goodies"}/>
              </Link>
              <p className={"activationProfil"} onClick={profileMenu}> <CgProfile /> </p>
          </nav>

          <div className={`profil ${stateOfProfil}`}>
              <Link to={`/connexion`}>
                  <p className={"cacheeSiConnecte"}>Connexion</p>
              </Link>
              <Link to={`/inscritpion`}>
                  <p className={"cacheeSiConnecte"}>Créer un compte</p>
              </Link>
              <Link to={`/setting`}>
                  <p className={"afficherSiConnecte"}>Paramètre</p>
              </Link>
              <Link to={`/add`}>
                  <p className={"afficherSiConnecte"}>Faire une demande d'ajout</p>
              </Link>
              <Link to={`/jsp`}>
                  <p className={"afficherSiConnecte"}>Déconnexion</p>
              </Link>
          </div>
          <div onClick={profileMenu} className={"supprMenu"}></div>
      </header>
  );
};
