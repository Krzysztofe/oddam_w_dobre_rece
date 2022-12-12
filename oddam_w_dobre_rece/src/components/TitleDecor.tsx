import React, {useEffect} from 'react'
import {FC} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Props{
    text: string[];
    classContainer?: string;
    classH2?:string;
    classUnderline?: string
}

const TitleDecor: FC<Props> = ({
                              text,
                              classContainer,
                              classH2,
                              classUnderline
                          }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className={classContainer}
             data-aos="flip-left"
             data-aos-duration = '1000'>
            <h2 className={`title__h2 ${classH2}`}>{text[0]} <br/>{text[1]}</h2>
            <div className={`title__decoration ${classUnderline}`}> </div>
        </div>
    );
};

export default TitleDecor;