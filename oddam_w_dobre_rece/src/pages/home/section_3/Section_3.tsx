import React, {FC, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SignatureSmall = require('../../../asets/Signature.png')
const SignatureLarge = require('../../../asets/Signature@2x.png')
const PeopleSmall = require('../../../asets/People.png')
const PeopleLarge = require('../../../asets/People@2x.png')


interface Props {
    children: React.ReactNode
}

const Section_3: FC<Props> = ({children}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section className="wrapper wrapper--section-3">

            <aside className="section-3__leftContainer"
                   data-aos-duration='1000'
                   data-aos-delay = '500'
                   data-aos="flip-up">

                <div className="section-3__mainText">

                    {children}

                    <p className="section-3__p" id='whoWeHelp'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis minima quia ullam unde?
                        Aliquid blanditiis ea esse hic libero, nobis nostrum quod reiciendis.
                    </p>
                    <img src={SignatureSmall}
                         alt='Podpis'
                         className="section-3__signatureSmall"/>
                    <img src={SignatureLarge}
                         alt='Podpis'
                         className="section-3__signatureLarge"/>
                </div>
            </aside>

            <img src={PeopleSmall}
                alt='Grupa ludzi'
                className='section-3__peopleSmall'
                data-aos-duration='1000'
                 data-aos-delay = '500'
                data-aos="flip-down"/>
            <img src={PeopleLarge}
                alt='Grupa ludzi'
                className='section-3__peopleLarge'
                data-aos-duration='1000'
                data-aos="flip-down"/>
        </section>
    );
};

export default Section_3;