import React, {FC} from 'react'
import TitleDecor from "../../../components/titleDecor/TitleDecor";

interface Props{
    children: React.ReactNode
}
const Section_5:FC <Props> = ({children}) => {
    return (
        <section className="wrapper wrapper--section-5" id='contact'>
            <div className="section-5__opacity">
                <aside className="section-5__right">
                    {children}
                </aside>
            </div>
        </section>
    );
};

export default Section_5;
