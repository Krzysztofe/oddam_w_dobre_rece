import PropTypes from "prop-types";
import InputSelect from "./OddajFormInputs/InputSelect";

const OddajFormTop = ({text}) => {
    return (
        <>
            <p className='oddajFormTop__p'>{text[0]}</p>
            <h2 className='oddajFormTop__h2'>{text[1]}</h2>

        </>
    );
};

OddajFormTop.propTypes = {
    text: PropTypes.array.isRequired
}

export default OddajFormTop;