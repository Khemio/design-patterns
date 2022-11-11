export default class HistoryObserver {
    constructor() {
        this.colorHistory = [];
    }

    update(model) {
        this.colorHistory.unshift(model.color[0].toUpperCase());
        if (this.colorHistory.length > 5) this.colorHistory.pop();

        let msg = 'The most recent 5 color were: ';

        this.colorHistory.forEach(c => msg += `${c} `);

        console.log(msg);
    }
}