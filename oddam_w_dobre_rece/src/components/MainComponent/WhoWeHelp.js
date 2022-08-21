import React from 'react';
import Underline from "./Underline";

const WhoWeHelp = () => {
    return (
        <section className="whoWeHelp">
            <div className="wrapper wrapper--whoWeHelp" id = 'whoWeHelp'>
                <h2 className='whoWeHelp__h2'>Komu pomagamy?</h2>
                <Underline/>
                <div className="whoWeHelp__columnsContainer">
                    <div className="whoWeHelp__columnContainer">
                        <div className="whoWeHelp__header">Fundacjom</div>
                        <p className="whoWeHelp__paragraph">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują. </p>
                    </div>
                    <div className ="whoWeHelp__columnContainer">
                        <div className ="whoWeHelp__header">Organizacjom pozarządowym</div>
                        <p className="whoWeHelp__paragraph">Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią. </p>
                    </div>
                    <div className="whoWeHelp__columnContainer">
                        <div className="whoWeHelp__header">Lokalnym zbiórkom</div>
                        <p className="whoWeHelp__paragraph">Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;