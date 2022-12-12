import React, { useState} from 'react';
import ReactPaginate from "react-paginate";
import {organizationTypeSelection} from "./organizationTypeSelection";
import useFetchGET from "../../../hooks/useFetchGET";
import {URL_fundations} from '../../../data/URL'

const Fundations = () => {

    const {loadingGET, errorGET, data: fundations} =
        useFetchGET(URL_fundations)

    const [pageNumber, setPageNumber] = useState(0)

    let content = <h2 className='section4__loading'>no data</h2>

    if (fundations) {
        content = <>
            <h2>
                {organizationTypeSelection(fundations, 3, pageNumber)}
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