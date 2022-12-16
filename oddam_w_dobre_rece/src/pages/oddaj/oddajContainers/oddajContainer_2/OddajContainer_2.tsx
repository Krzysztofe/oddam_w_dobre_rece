import OddajBelt from "../../oddajBelt/OddajBelt";
import OddajFormTop from "../../oddajFormTop/OddajFormTop";
import OddajFormWrapper from "../../oddajFormWrapper/OddajFormWrapper";
import InputSelect from "../../oddajFormInputs/inputSelect/InputSelect";
import OddajButtons from "../../oddajButtons/OddajButtons";

const OddajContainer_2 = () => {

    return (
        <>
            <OddajBelt text='Wszytie rzeczy do oddania
                        zapakuj w 60l worki. Dokładną
                        instrukcję jak poprawnie spakować
                        rzczy znajdziesz TUTAJ '/>

            <main className="wrapper wrapper--oddajMain">
                <OddajFormTop
                    text={['krok 2/4', 'podaj liczbę 60 l. worków,' +
                    ' w które spkowałeś/aś rzeczy:']}/>
                <OddajFormWrapper>
                    <InputSelect textLabel='Liczba 60 l. worków:'
                                 selectValues={[1, 2, 3, 4, 5, 6]}
                                 inputName='selectBags'/>
                    <OddajButtons/>
                </OddajFormWrapper>
            </main>
        </>
    );
};

export default OddajContainer_2;