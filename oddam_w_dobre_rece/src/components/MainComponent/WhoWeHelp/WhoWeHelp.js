import React, {useEffect, useState} from 'react';
import Underline from "../Underline";
import ReactPaginate from "react-paginate";

const WhoWeHelp = () => {

    const [printCounter, setPrintCounter] = useState(1)
    const [organisations, setOrganisations] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)


    useEffect(() => {
        fetch('http://localhost:3000/organisations')
            .then(resp => resp.json())
            .then(data => setOrganisations(data))
    }, [])

    if (organisations === false) {
        return <h1>loading </h1>
    }
    console.log(organisations)

    const organisationsPerPage = 3
    const visitedPage = pageNumber * organisationsPerPage


    const organisationSelection = (oganisationData, organisationType) => {

        const filteredOrganisations = organisations
            .filter(item => item.type === oganisationData)

        const displayOrganisations = filteredOrganisations
            .slice(visitedPage, visitedPage + organisationsPerPage)
            .map((item, idx) => {
                return <table key={idx} className='table'>
                    <tbody className='tbody'>
                    <tr className='tr'>
                        <td>
                            <p className='td__pBig'> {organisationType} {item.name}</p>
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


    return (
        <section className="whoWeHelp">
            <div className="wrapper wrapper--whoWeHelp" id='whoWeHelp'>
                <h2 className='whoWeHelp__h2'>Komu pomagamy?</h2>
                <Underline/>
                <div className="whoWeHelp__columnsContainer">

                    <div className="whoWeHelp__columnContainer">
                        <button onClick={() => setPrintCounter(1)}
                                className="whoWeHelp__button">
                            Fundacjom
                        </button>
                    </div>

                    <div className="whoWeHelp__columnContainer">
                        <button onClick={() => setPrintCounter(2)}
                                className="whoWeHelp__button">
                            Organizacjom pozarządowym
                        </button>
                    </div>

                    <div className="whoWeHelp__columnContainer">
                        <button onClick={() => setPrintCounter(3)}
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