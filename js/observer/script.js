import NumberModel from './NumberModel'
import ElementObserver from './ElementObserver'
import ConsoleObserver from './ConsoleObserver'
import HistoryObserver from './HistoryObserver'


export default function setup() {
    
    document.querySelector('#app').innerHTML = `
    <div class="square" id="elementsObserver1"></div>
    <hr>
    <button type="button">Increment</button>
    `
    document.querySelector('button').addEventListener('click', () => model.increment());

    const model = new NumberModel();
    const eObs1 = new ElementObserver('elementsObserver1');
    const cObs1 = new ConsoleObserver();
    const hObs1 = new HistoryObserver();

    model.addObserver(eObs1);
    model.addObserver(cObs1);
    model.addObserver(hObs1);

    model.notifyObservers();

    console.log(eObs1);
}
