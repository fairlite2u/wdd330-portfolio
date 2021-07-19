  // Store Class: Handles Storage
  export default class Store {
      static getCostumes() {
          let costumes;
          if (localStorage.getItem('costumes') === null) {
              costumes = [];
          } else {
              costumes = JSON.parse(localStorage.getItem('costumes'));
          }
          console.log(costumes);
          return costumes;
      }

      static getCostumeByTarget(index) {
          const costumes = this.getCostumes();
          console.log(index);
          const costume = costumes[index];
          console.log(costumes[index]);
      }

      static addCostume(costume) {
          const costumes = this.getCostumes();

          costumes.push(costume);

          localStorage.setItem('costumes', JSON.stringify(costumes));
      }

      static removeCostume(index) {
          const costumes = this.getCostumes();
          costumes.splice(index, 1);
          localStorage.setItem('costumes', JSON.stringify(costumes));
      }
  }
  