import React, {useState} from 'react';
import {organizationTypeSelection} from "../../../utilities/organizationTypeSelection";
import ReactPaginate from "react-paginate";
import {URL_allData} from "../../../data/URL"
import {useQuery, UseQueryResult} from "react-query";
import {ModelAllData} from "../../../data/modelsTS";
import fetchGet from "../../../utilities/fetchGET";
const Collections = () => {

    const [pageNumber, setPageNumber] = useState(0)

    const {isLoading, data, error}: UseQueryResult<ModelAllData, Error> =
        useQuery(
            'organizations',
            () => fetchGet(URL_allData))


    let content = <h2 className='section4__loading'>no data</h2>

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
                {organizationTypeSelection(data.collections, 3, pageNumber)}
            </h2>
    }


    const changePage = ({selected}: any) => {
        setPageNumber(selected)
    }

    return (
        <div>
            <p className="section-4__p">
                Wspieramy lokalne zbiórki organizowane
                przez indywidualne osoby, którym
                zależy na dobru społeczności, w której żyją.
                Sam też możesz zorganizować taką zbiórkę
                i pomóc tym, którzy są najbliżej.
            </p>
            {content}
            <ReactPaginate pageCount={1}
                           onPageChange={changePage}
                           containerClassName={'paginationButtonsContainer'}
                           disabledClassName={'disabledButton'}
                           activeClassName={'paginationButton__active'}
                           previousLinkClassName={'paginationButton__previousNext'}
                           nextLinkClassName={'paginationButton__previousNext'}/>

        </div>
    );
};


export default Collections;