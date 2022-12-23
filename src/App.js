import './App.css';
import {useEffect, useState} from "react";
import CountDown from "./Component/CountDown/CountDown";

function App() {
    const defaultTraders = [
        {
            name: "Trader",
            qualities: "-",
            time: "80",
            guarantees: "24",
            payment: "30%",
            cost: "3700000",
        },
        {
            name: "Trader 2",
            qualities: "-",
            time: "80",
            guarantees: "24",
            payment: "30%",
            cost: "3700000",
        },
        {
            name: "Trader 3",
            qualities: "-",
            time: "80",
            guarantees: "24",
            payment: "30%",
            cost: "3700000",
        },
        {
            name: "Trader 4",
            qualities: "-",
            time: "80",
            guarantees: "24",
            payment: "30%",
            cost: "3700000",
        },
    ]

    const [traders, setTraders] = useState([]);
    const [activeBlock, setActiveBlock] = useState(0);

    const fetchTraders = async () => {
        setTraders(defaultTraders)
    }

    const onTimerEnd = () => {
        setActiveBlock(( activeBlock + 1 ) % (traders.length || 1));
    }

    useEffect(() => {
        fetchTraders();
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <h1>Ход торгов</h1>
            </header>
            <div>
                <p>Стоимость изготовления предоставляется за вычетом</p>

                <table className={"mainPlate"}>
                    <tbody>
                    <tr>
                        <td className={"descPlate"}>
                            <div>Ход</div>
                            <div>Параметры и требования</div>
                            <div>Наличие комлеса мероприятий, повышающих стандарты качества изготовления</div>
                            <div>Срок изготовления лота, дней</div>
                            <div>Гарантийные обязательства, мес</div>
                            <div>Условия оплаты</div>
                            <div>Стоимость изготовления лота, руб. без НДС</div>
                        </td>
                        {traders.map((trader, index) =>
                            <td key={index} className={`descPlate block block-${activeBlock === index ? 'active' : 'inactive'}`}>
                                <div className={"timer"}>
                                    {activeBlock === index &&
                                        <CountDown seconds={120} handleTimeEnd={onTimerEnd}/>
                                    }
                                </div>
                                <div>Участник №{index + 1}</div>
                                <div>{trader.qualities}</div>
                                <div>{trader.time}</div>
                                <div>{trader.guarantees}</div>
                                <div>{trader.payment}</div>
                                <div>{trader.cost}</div>
                            </td>)}
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"tradeButtons"}>
                <button className={"chatButton"}>Чат</button>
                <button className={"updateButton"}>Обновить</button>
                <button className={"endButton"}>Завершить торги</button>
                <button className={"reportButton"}>Отчет</button>
            </div>
        </div>
    );
}


export default App;
