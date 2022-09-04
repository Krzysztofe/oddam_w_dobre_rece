import Title from "../Title";

const Section_3 = () => {
    return (
        <section className="wrapper wrapper--section-3">
            <aside className="section-3__leftContainer">
                <div className="section-3__mainText">
                    <Title
                        text1={'o nas'}
                        classContainer={''}
                        classH2={''}
                        classUnderline={'section-3__decoration'}
                    />
                    <p className="section-3__p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis minima quia ullam unde?
                        Aliquid blanditiis ea esse hic libero, nobis nostrum quod reiciendis.
                    </p>
                    <div className="section-3__signature"> </div>
                </div>

            </aside>
            <aside className="section-3__rightContainer"></aside>
        </section>
    );
};

export default Section_3;