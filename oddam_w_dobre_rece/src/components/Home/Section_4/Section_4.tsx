import React, {useState, FC} from 'react';
import Fundations from "./Fundations";
import Ngo from './Ngo'
import Collections from "./Collections";

interface Props{
    children: React.ReactNode
}

const Section_4:FC <Props> = ({children}) => {

    const [printCounter, setPrintCounter] = useState<number>(1)
    const [pageNumber, setPageNumber] = useState<number>(0)

    const setPrintCounterPageNumber = (selected: number): void => {
        setPrintCounter(selected)
        setPageNumber(0)
    }

    return (
        <section className="wrapper wrapper--section-4">
            {children}
            <div className="section-4__btns">

                <button onClick={() => setPrintCounterPageNumber(1)}
                        className="section-4__btn">
                    Fundacjom
                </button>

                <button onClick={() => setPrintCounterPageNumber(2)}
                        className="section-4__btn">
                    Organizacjom pozarządowym
                </button>

                <button onClick={() => setPrintCounterPageNumber(3)}
                        className="section-4__btn">
                    Lokalnym zbiórkom
                </button>
            </div>

            {printCounter === 1 && <Fundations/>}
            {printCounter === 2 && <Ngo/>}
            {printCounter === 3 && <Collections/>}

        </section>

    );
};

export default Section_4;