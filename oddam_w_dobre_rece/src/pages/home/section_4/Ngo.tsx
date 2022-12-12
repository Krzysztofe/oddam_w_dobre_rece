import React, {useState} from 'react';
import {organizationTypeSelection} from "./organizationTypeSelection";
import ReactPaginate from "react-paginate";
import useFetchGET from "../../../hooks/useFetchGET";
import {URL_ngo} from '../../../data/URL'

const Ngo = () => {

    const {loadingGET, errorGET, data: ngo} =
        useFetchGET(URL_ngo)

    const [pageNumber, setPageNumber] = useState(0)

    let content = <h2 className='section4__loading'> no data</h2>

    if (ngo) {
        content = <>
            <h2>
                {organizationTypeSelection(ngo, 3, pageNumber)}
            </h2>
        </>
    }
    if (errorGET) {
        content = <h2 className='section4__loading'>{errorGET}</h2>
    }
    if (loadingGET) {
        content = <h2 className='section4__loading'>loading...</h2>
    }

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