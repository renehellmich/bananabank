import { useState } from "react";

const Main = ({obj, setObj}) => {

    const amountUp = () => {
        console.log(typeof obj, typeof setObj);
        obj.total = document.querySelector('#geldbetrag').value
        console.log(typeof Number(obj.total), obj.total);
        if (typeof Number(obj.total) === "number") {
            setObj({ ...obj, credit: obj.credit + Math.round(Number(obj.total) * 100) / 100})
            document.querySelector('#geldbetrag').value = ''
        } 
    }

    const amountDown = () => {
        console.log(typeof obj, typeof setObj);
        obj.total = document.querySelector('#geldbetrag').value
        console.log(typeof Number(obj.total), obj.total);
        if (typeof Number(obj.total) === "number") {
            setObj({ ...obj, credit: obj.credit - Math.round(Number(obj.total) * 100) / 100})
        document.querySelector('#geldbetrag').value = ''
        }  
    }

    return ( 
        <>
            <div className="konto">
                <h2>Mein Girokonto</h2>
                <p className="saldo">{obj.credit}</p>
                <input type="number" 
                name="geldbetrag"
                id="geldbetrag"
                className="geldbetrag" 
                placeholder="Betrag in €"
                // value={obj.total}
                />
                <div>
                    <button
                    onClick={amountUp}
                    className="einzahlen"
                    >
                        Einzahlen
                    </button>
                    <button
                    onClick={amountDown}
                    className="auszahlen"
                    >
                        Auszahlen
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Main;