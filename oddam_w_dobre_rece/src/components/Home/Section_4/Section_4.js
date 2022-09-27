import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import Title from "../../Title";
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
                return <table key={item.id} className='section-4__table'>
                    <tbody>
                    <tr>
                        <td className='section-4__td'>
                            <p className='section-4__pLarge'> {organisationTypePrinted} {item.name}</p>
                            <p className='section-4__pSmall'>Cel i misja: {item.goals}</p>
                        </td>
                        <td className='td__right'>{item.stuff}</td>
                    </tr>
                    </tbody>
                </table>


            })
        return displayOrganisations
    }


    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const setPrintCounterPageNumber = (selected) => {
        setPrintCounter(selected)
        setPageNumber(0)
    }


    return (

        <section className="wrapper wrapper--section-4">
                <Title
                    text1={'komu pomagamy?'}
                    classContainer={''}
                    classH2={''}
                    classUnderline={'section-4__decoration'}
                />
                <div className="section-4__btns">

                     <button onClick={() => setPrintCounterPageNumber(1)}
                                className="section-4__btn">
                            Fundacjom
                        </button>

                    <button onClick={() => setPrintCounterPageNumber(2)}
                                className="section-4__btn">
                            Organizacjom pozarządowym
                        </button>

                        <button onClick={() => setPrintCounterPageNumber(3)}
                                className="section-4__btn">
                            Lokalnym zbiórkom
                        </button>
                </div>

                {printCounter === 1 &&
                    <p className="section-4__p">
                        W naszej bazie znajdziesz listę zweryfikowanych
                        fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i
                        czego potrzebują.
                    </p>}

                {printCounter === 2 &&
                    <p className="section-4__p">
                        Pomagamy również wszelkim organizacjom
                        pozarządowym i charytatywnym, które nie
                        są Fundacjami. Są to nasi Partnerzy, który
                        zrobią dobry pożytek z rzeczy, które do
                        nich trafią.
                    </p>}

                {printCounter === 3 &&
                    <p className="section-4__p">
                        Wspieramy lokalne zbiórki organizowane
                        przez indywidualne osoby, którym
                        zależy na dobru społeczności, w której żyją.
                        Sam też możesz zorganizować taką zbiórkę
                        i pomóc tym, którzy są najbliżej.
                    </p>}

                <div className='paginationContainer'  id='contact'>

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
                                "collection", "zbiórka")}
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
        </section>
    );
}

export default WhoWeHelp;