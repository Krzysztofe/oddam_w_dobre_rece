import React, { useState} from 'react';
import ReactPaginate from "react-paginate";
import {organizationTypeSelection} from "../../../hooks/organizationTypeSelection";
import {URL_allOrganizatons } from '../../../data/URL'
import {useQuery, UseQueryResult} from 'react-query'
import {ModelOrganizations} from './modelOrganizations'
import useFetchGET from "../../../hooks/useFetchGET";

const Fundations = () => {
    const [pageNumber, setPageNumber] = useState(0)

    const {fetchGet} = useFetchGET(URL_allOrganizatons)

    const {isError, isLoading, data, error}:UseQueryResult<ModelOrganizations, Error>
        = useQuery('organizations', fetchGet)

    let content =
        <h2 className='section4__loading'>no data</h2>

    if (isLoading) {
        content = <h2 className='section4__loading'>loading...</h2>
    }

    if (isError) {
        content = <h2 className='section4__loading'>
            {error.message === 'Failed to fetch' ?
            'Brak połączenia z serwerem' :
            error.message}</h2>
    }

    if (data) {
        content =
            <h2>
                {organizationTypeSelection(data.fundations, 3, pageNumber)}
            </h2>
    }

    const changePage = ({selected}:any) => {
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
            {content}
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