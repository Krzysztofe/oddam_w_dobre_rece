import React, {useState} from 'react';
import {organizationTypeSelection} from "./organizationTypeSelection";
import ReactPaginate from "react-paginate";
import useFetchGET from '../../fetchOperations/useFetchGET'

const Collections = () => {

    const [pageNumber, setPageNumber] = useState(0)

    const {loadingGET, errorGET, data: organizations} =
        useFetchGET(process.env.REACT_APP_URL_COLLECTIONS)


    let content = <h2 className='section4__loading'>no data</h2>

    if (organizations) {
        content = <>
            <h2>
                {organizationTypeSelection(organizations, 3, pageNumber)}
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