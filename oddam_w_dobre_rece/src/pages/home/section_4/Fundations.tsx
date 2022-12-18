import React, { useState} from 'react';
import ReactPaginate from "react-paginate";
import {organizationTypeSelection} from "../../../utilities/organizationTypeSelection";
import {URL_allData } from '../../../data/URL'
import {useQuery, UseQueryResult} from 'react-query'
import {ModelAllData} from '../../../data/modelsTS'
import fetchGet from "../../../utilities/fetchGET";


const Fundations = () => {
    const [pageNumber, setPageNumber] = useState(0)

    const {isLoading, data, error}
        :UseQueryResult<ModelAllData, Error> =
        useQuery('organizations',
            () => fetchGet(URL_allData))

    let content =
        <h2 className='section4__loading'>no data</h2>

    if (isLoading) {
        content = <h2 className='section4__loading'>loading...</h2>
    }

    if (error) {
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