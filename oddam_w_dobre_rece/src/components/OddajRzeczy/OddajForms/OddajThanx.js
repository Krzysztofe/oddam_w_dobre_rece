import Title from "../../Title";
import {Link} from 'react-router-dom'

const OddajThanx = () => {

    return (
        <main className='oddajForm__inputs oddajForm__inputs--thnx'>

            <Title text={['dziękujemy za przesłanie formularza',
                'na maila prześlemy wszelkie informacje o odbiorze']}
                   classContainer={'oddajThnx__container'}
                   classH2={'oddajThnx__h2'}
                   classUnderline={'oddajThnx__decoration'}/>

            <Link to='/' className='ddajThanx__link'>
                <button className='ddajThanx__button'>
                    strona główna
                </button>
            </Link>

        </main>
    );
};

export default OddajThanx;