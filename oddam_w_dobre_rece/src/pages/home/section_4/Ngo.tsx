import React, {useState} from 'react';
import {organizationTypeSelection} from "../../../utilities/organizationTypeSelection";
import ReactPaginate from "react-paginate";
import fetchGet from "../../../utilities/fetchGET";
import {URL_allData} from '../../../data/URL'
import {useQuery, UseQueryResult} from "react-query";
import {ModelAllData} from "../../../data/modelsTS";

const Ngo = () => {

    const [pageNumber, setPageNumber] = useState(0)

    const {isLoading, data, error}
        : UseQueryResult<ModelAllData, Error> =
        useQuery(
            'organizations',
            () => fetchGet(URL_allData))

    let content = <h2 className='section4__loading'> no data</h2>

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
        content = <>
            <h2>
                {organizationTypeSelection(data.ngo, 3, pageNumber)}
            </h2>
        </>
    }



    const changePage = ({selected}:any) => {
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
            {content}
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