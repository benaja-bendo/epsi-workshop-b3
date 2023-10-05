import React, {useState} from "react";
import {Head, Link} from "@inertiajs/react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import MyMap from "@/Components/MyMap.jsx";
import "../../css/home.css"

export default function ListAssociations(props) {

    const [rechercheTerm, setRechercheTerm] = useState('');
    const {auth, associations, categories} = props;
    const [selectedCategory, setSelectedCategory] = React.useState(0);
    const [filteredAssociations, setFilteredAssociations] = React.useState(associations);

    const [nombreDeResultats, setNombreDeResultats] = useState(6); // By default, show 6 results
    const [startIndex, setStartIndex] = useState(0); // Starting index for slicing
    const handleRechercheChange = (e) => {
        setRechercheTerm(e.target.value);
        setStartIndex(0);
    };
    // Filter the data based on the search term
    const assoBPSearch = associations.filter((item) =>
        item.name.toLowerCase().includes(rechercheTerm.toLowerCase())
    );
    const handleSelectChange = (e) => {
        const selectedValue = parseInt(e.target.value, 10); // Convert to a number
        setNombreDeResultats(selectedValue);
        setStartIndex(0); // Reset the starting index to 0 when changing the number of results
    };

    // Handle the "Next" button click
    const handleNextClick = () => {
        setStartIndex(startIndex + nombreDeResultats);
    };

    // Handle the "Previous" button click
    const handlePreviousClick = () => {
        if (startIndex - nombreDeResultats >= 0) {
            setStartIndex(startIndex - nombreDeResultats);
        }
    };

    // Calculate the current page number
    const currentPage = Math.ceil((startIndex + 1) / nombreDeResultats);
    const totalPages = Math.ceil(associations.length / nombreDeResultats);

    // Determine whether to print the "Next" and "Previous" buttons
    const printNextButton = startIndex + nombreDeResultats < associations.length;
    const printPrevButton = startIndex > 0;


    const filterAssociationsByCategory = (categoryId) => {
        if (categoryId === 0) {
            setFilteredAssociations(associations);
        } else {
            const filtered = associations.filter((association) => association.category_id === categoryId);
            setFilteredAssociations(filtered);
        }
    };

    React.useEffect(() => {
        filterAssociationsByCategory(selectedCategory);
    }, [selectedCategory, associations]);

    return (<>
        <SiteLayout auth={auth}>
            <Head title="Liste des associations"/>
            <div className="flex flex-col justify-center items-center ">
            <input className={"search"}
                        type="text"
                        placeholder="Rechecher un nom"
                        value={rechercheTerm}
                        onChange={handleRechercheChange}
                    />
                <div className="relative">
                    <h1 className="text-3xl font-bold text-center">Liste des associations</h1>
                    <p className="text-lg">Filtrer par catégorie :</p>
                    <div className="filtreDeCategorie">
                        <button
                            onClick={() => setSelectedCategory(0)}>Toutes
                        </button>
                        {categories.map((category) => (
                            <CardCategory
                                key={category.id}
                                setSelectedCategory={setSelectedCategory}
                                category={category}
                            />
                        ))}
                    </div>
                    <div id={'card'} className="">
                        {filteredAssociations.slice(startIndex, startIndex + nombreDeResultats).map((association) => (
                            <CardAssociation key={association.id} association={association}/>
                        ))}
                    </div>
                    <div className={"printPage"}>
              <select onChange={handleSelectChange} value={nombreDeResultats}>
                  <option value={6}>Afficher 6 résultats</option>
                  <option value={12}>Afficher 12 résultats</option>
                  <option value={24}>Afficher 24 résultats</option>
              </select>

              <div className={"changePage"}>

                  <button
                      className={'rotateArrow'}
                      onClick={handlePreviousClick}
                      disabled={startIndex === 0}
                  >
                      { printPrevButton && (
                          <p>precedent</p>
                      )}
                  </button>

                  <p>
                      {currentPage}/{totalPages}
                  </p>

                  <button
                      onClick={handleNextClick}
                      disabled={startIndex + nombreDeResultats >= associations.length}
                  >
                      { printNextButton && (
                          <p>suivant</p>
                      )}
                  </button>
              </div>
          </div>
                </div>
            </div>
        </SiteLayout>
    </>);
}

const CardAssociation = ({association}) => {
    const {name, description, image, logo} = association;
    return (
        <Link href={'/association/show/' + association.id}>
            <div className={"cardCarouselHome"}>
                <img className={"cardCarouselImage"} src={image} alt={`image de fond ${name}`}/>
                <div className={"cardCarouselDescriptionLogo"}>
                    <img className={"cardCarouselLogo"} src={logo} alt={`logo ${name}`}/>
                    <p className={"cardCarouselDescription"}>{description} </p>
                </div>
            </div>
        </Link>
    )
}

const CardCategory = ({category, setSelectedCategory}) => {
    const {name} = category;
    return (<>
        <button
            onClick={() => setSelectedCategory(category.id)}>{name}</button>
    </>);
}
