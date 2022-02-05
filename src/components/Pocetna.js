import Proceed from "./Proceed";

function Pocetna() {

    const mainNaslov = 'Hello Guest...'

    return (
        <div className="pocetni_div">
            <Proceed mainNaslov={mainNaslov} />
        </div>
    );
}

export default Pocetna;
