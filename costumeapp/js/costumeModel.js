  // Store Class: Handles Storage
export default class Store {
    static getCostumes() {
        let costumes;
        if(localStorage.getItem('costumes') === null) {
            costumes = [];
        } else {
            costumes = JSON.parse(localStorage.getItem('costumes'));
        }

        return costumes;
    }

    static addCostume(costume) {
        const costumes = Store.getCostumes();

        costumes.push(costume);

        localStorage.setItem('costumes', JSON.stringify(costumes));
    }

    static removeCostume(character) {
        const costumes = Store.getCostumes();

        costumes.forEach((costume, index) => {
            if(costume.character === character) {
                costumes.splice(index, 1);
            }
        });

        localStorage.setItem('costumes', JSON.stringify(costumes));
    }
}
  