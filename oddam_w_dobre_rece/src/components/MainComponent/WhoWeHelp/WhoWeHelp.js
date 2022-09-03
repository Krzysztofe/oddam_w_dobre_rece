import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import HeaderUnderline from "../../Title";
// import organisations from '../../../data_json/organisations.json/organisations '

const WhoWeHelp = () => {

    const [printCounter, setPrintCounter] = useState(1)
    const [organisations, setOrganisations] = useState(false)
    const [filteredOrganisations, setFilteredOrganisations] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)


    useEffect(() => {
        // fetch('../data_json/organisations.json')
        fetch('http://localhost:3000/organisations')
            .then(resp => resp.json())
            .then(data => setOrganisations(data))
    }, [])

    if (organisations === false) {
        return <h2>loading </h2>
    }
// console.log(organisations)

    const organisationsPerPage = 3
    const printedPage = pageNumber * organisationsPerPage


    const organisationSelection = (oganisationType, organisationTypePrinted) => {

        const filtered = organisations
            .filter(item => item.type === oganisationType)

        // setFilteredOrganisations(filtered)

        // console.log(filteredOrganisations)

        const displayOrganisations = filtered
            .slice(printedPage, printedPage + organisationsPerPage)
            .map((item) => {
                return <table key={item.id} className='whoWeHelp__table'>
                    <tbody>
                    <tr>
                        <td className='whoWeHelp__td'>
                            <p className='td__pBig'> {organisationTypePrinted} {item.name}</p>
                            <p className='td__pSmall'>cel i misja: {item.goals}</p>
                        </td>
                        <td className='td__right td__pSmall'>{item.stuff}</td>
                    </tr>
                    </tbody>
                </table>

                // return <WhoWeHelp item = {item}/>

            })
        return displayOrganisations
    }


    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
const setPrintCounterPageNumber = (selected) =>{
        setPrintCounter(selected)
        setPageNumber(0)
    }



    return (
        <section className="whoWeHelp">
            <div className="wrapper wrapper--whoWeHelp" id='whoWeHelp'>
                <HeaderUnderline
                    text1={'komu pomagamy?'}
                    classContainer = {''}
                    classH2 = {''}
                    classUnderline={'whoWeHelp__headerUnderline'}
                />
                <div className="whoWeHelp__columnsContainer">

                    <div className="whoWeHelp__columnContainer">
                        <button onClick={()=> setPrintCounterPageNumber(1)}
                                className="whoWeHelp__button">
                            Fundacjom
                        </button>
                    </div>

                    <div className="whoWeHelp__columnContainer">
                        <button onClick={()=> setPrintCounterPageNumber(2)}
                                className="whoWeHelp__button">
                            Organizacjom pozarządowym
                        </button>
                    </div>

                    <div className="whoWeHelp__columnContainer">
                        <button onClick={()=> setPrintCounterPageNumber(3)}
                                className="whoWeHelp__button">
                            Lokalnym zbiórkom
                        </button>
                    </div>
                </div>

                {printCounter === 1 &&
                    <p className="whoWeHelp__paragraph">
                        W naszej bazie znajdziesz listę zweryfikowanych
                        Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i
                        czego potrzebują.
                    </p>}

                {printCounter === 2 &&
                    <p className="whoWeHelp__paragraph">
                        Pomagamy również wszelkim organizacjom
                        pozarządowym i charytatywnym, które nie
                        są Fundacjami. Są to nasi Partnerzy, który
                        zrobią dobry pożytek z rzeczy, które do
                        nich trafią.
                    </p>}


                {printCounter === 3 &&
                    <p className="whoWeHelp__paragraph">
                        Wspieramy lokalne zbiórki organizowane
                        przez indywidualne osoby, którym
                        zależy na dobru społeczności, w której żyją.
                        Sam też możesz zorganizować taką zbiórkę
                        i pomóc tym, którzy są najbliżej.
                    </p>}

                <div className='paginationContainer'>

                    {printCounter === 1 &&
                        <>
                            {organisationSelection(
                                "fundacja", "fundacja")}
                            <ReactPaginate
                                previousLabel={''}
                                nextLabel={''}
                                pageCount={3}
                                onPageChange={changePage}
                                containerClassName={'paginationButtonsContainer'}
                                disabledClassName={'disabledButton'}
                                activeClassName={'paginationButton__active'}
                                previousLinkClassName={'paginationButton__previousNext'}
                                nextLinkClassName={'paginationButton__previousNext'}
                            />
                        </>}

                    {printCounter === 2 &&
                        <>
                            {organisationSelection(
                                "ngo", "organizacja")}
                            <ReactPaginate
                                previousLabel={''}
                                nextLabel={''}
                                pageCount={2}
                                onPageChange={changePage}
                                containerClassName={'paginationButtonsContainer'}
                                disabledClassName={'disabledButton'}
                                activeClassName={'paginationButton__active'}
                                previousLinkClassName={'paginationButton__previousNext'}
                                nextLinkClassName={'paginationButton__previousNext'}
                            />
                        </>}

                    {printCounter === 3 &&
                        <>
                            {organisationSelection(
                                "colection", "zbiórka")}
                            <ReactPaginate
                                previousLabel={''}
                                nextLabel={''}
                                pageCount={1}
                                onPageChange={changePage}
                                containerClassName={'paginationButtonsContainer'}
                                disabledClassName={'disabledButton'}
                                activeClassName={'paginationButton__active'}
                                previousLinkClassName={'paginationButton__previousNext'}
                                nextLinkClassName={'paginationButton__previousNext'}
                            />
                        </>}
                </div>
            </div>

        </section>
    );
};

export default WhoWeHelp;