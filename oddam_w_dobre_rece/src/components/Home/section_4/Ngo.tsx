import React, {useEffect, useState} from 'react';
import {fetchGetOrganizations} from "../../fetchOperations/fetchOperations";
import {organizationTypeSelection} from "./organizationTypeSelection";
import ReactPaginate from "react-paginate";

const URL_FUNDATIONS = 'https://my-json-server.typicode.com/Krzysztofe/oddam_api/fundations'

const Ngo = () => {

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
        fetchGetOrganizations(setOrganizations,
            setLoading,
            setError,
            process.env.REACT_APP_URL_NGO
        )
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
                Pomagamy również wszelkim organizacjom
                pozarządowym i charytatywnym, które nie
                są Fundacjami. Są to nasi Partnerzy, który
                zrobią dobry pożytek z rzeczy, które do
                nich trafią.
            </p>
            {organizationTypeSelection(organizations, 3, pageNumber)}
            <ReactPaginate pageCount={2}
                           onPageChange={changePage}
                           containerClassName={'paginationButtonsContainer'}
                           disabledClassName={'disabledButton'}
                           activeClassName={'paginationButton__active'}
                           previousLinkClassName={'paginationButton__previousNext'}
                           nextLinkClassName={'paginationButton__previousNext'}/>

        </div>
    );
};


export default Ngo;