import React, {SetStateAction, useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {URL_FUNDATIONS, jsonGetOrganizations} from "../../FetchOperations/FetchOperations";
import {organizationTypeSelection} from "./organizationTypeSelection";

const Fundations = () => {

    const [organizations, setOrganizations] = useState([{
        id: 0,
        type: '',
        name: '',
        goals: '',
        stuff: ''
    }])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        jsonGetOrganizations(setOrganizations, setLoading, setError, URL_FUNDATIONS)
    }, [])

    if (!loading && error) {
        return <h2 className='section4__loading'>{error}</h2>
    }
    if (!loading && organizations.length === 0 && !error) {
        return <h2 className='section4__loading'>brak danych w bazie danych</h2>
    }
    if (loading) {
        return <h2 className='section4__loading'>loading...</h2>
    }


    // const pageCount = organizations.length / organizationPerPage

    const changePage = ({selected}: any) => {
        setPageNumber(selected)
    }

    return (
        <div>
            <p className="section-4__p">
                W naszej bazie znajdziesz listę zweryfikowanych
                fundacji, z którymi współpracujemy. Możesz
                sprawdzić czym się zajmują, komu pomagają i
                czego potrzebują.
            </p>
            {organizationTypeSelection(organizations, 3, pageNumber)}
            <ReactPaginate pageCount={3}
                           onPageChange={changePage}
                           containerClassName={'paginationButtonsContainer'}
                           disabledClassName={'disabledButton'}
                           activeClassName={'paginationButton__active'}
                           previousLinkClassName={'paginationButton__previousNext'}
                           nextLinkClassName={'paginationButton__previousNext'}/>

        </div>
    );
};

export default Fundations;