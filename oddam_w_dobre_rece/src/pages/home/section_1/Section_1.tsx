import React from 'react'
import {useGetSummaryQuery} from '../../../redux/storeFeatures/apiSlice'


const Section_1 = () => {

    const {data: summaryData, isLoading, isError} =
        useGetSummaryQuery(undefined)

    let content =
        <section className="wrapper wrapper--section-1">
            <div className="section-1__column section-1__column--errors">
                no data
            </div>
        </section>

    if (isLoading) {
        content =
            <section className="wrapper wrapper--section-1">
                <div className="section-1__column section-1__column--errors">
                    loading...
                </div>
            </section>
    }

    if (isError) {
        content =
            <section className="wrapper wrapper--section-1">
                <div className="section-1__column section-1__column--errors">
                    Brak połączenia z serwerem
                </div>
            </section>
    }

    if (summaryData) {
        content =
            <section className="wrapper wrapper--section-1">

                <div className="section-1__column">
                    <div className='section-1__number'> {summaryData[0].number}</div>
                    <div className="section-1__subtitle">{summaryData[0].activity}</div>
                    <p className="section-1__p">{summaryData[0].description}</p>
                </div>
                <div className="section-1__column">
                    <div className='section-1__number'> {summaryData[1].number}</div>
                    <div className="section-1__subtitle">{summaryData[1].activity}</div>
                    <p className="section-1__p">{summaryData[1].description}</p>
                </div>
                <div className="section-1__column">
                    <div className='section-1__number'> {summaryData[2].number}</div>
                    <div className="section-1__subtitle">{summaryData[2].activity}</div>
                    <p className="section-1__p">{summaryData[2].description}</p>
                </div>
            </section>
    }

    return (
        <>
            {content}
        </>
    );
};

export default Section_1;