const Title = ({
                   text,
                   classContainer,
                   classH2,
                   classUnderline
               }) => {
    return (
        <div className={classContainer}>
            <h2 className={`title__h2 ${classH2}`}>{text[0]} <br/>{text[1]}</h2>
            <div className={`title__decoration ${classUnderline}`}> </div>
        </div>
    );
};

export default Title;