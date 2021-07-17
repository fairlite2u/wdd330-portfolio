import Store from './costumeModel.js';

// UI Class: Handle UI Tasks
export default class UI {
    static displayCostumes() {
        const costumes = Store.getCostumes();

        costumes.forEach(costume => UI.addCostumeToList(costume));
    }

    static addCostumeToList(costume) {
        const list = document.querySelector('#costume-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${costume.character}</td>
            <td>${costume.gender}</td>
            <td>${costume.age} ${costume.size}</td>
            <td><a href="#" class="btn-lg fas fa-info-circle btn-info"></td>
            <td><a href="#" class="btn btn-lg fas fa-edit btn-edit"></td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;
        row.classList = `costume-row ${costume.gender} ${costume.age}`
        list.appendChild(row);
    }

    static filterCostumes(e) {
        const list = document.querySelector('#costume-list');
        const costumes = list.childNodes;
        const row = document.querySelector('.costume-row');
        console.log(costumes);
        console.log(e.target.value);
        costumes.forEach(function (costume) {
            switch (e.target.value) {
                case "male":
                    if (costume.classList.contains("Male")) {
                        costume.classList.remove("hidden");
                    } else {
                        costume.classList.add("hidden");
                    }
                    break;
                case "female":
                    if (costume.classList.contains("Female")) {
                        costume.classList.remove("hidden");
                    } else {
                        costume.classList.add("hidden");
                    }
                    break;
                case "unisex":
                    if (costume.classList.contains("Unisex")) {
                        costume.classList.remove("hidden");
                    } else {
                        costume.classList.add("hidden");
                    }
                    break;
                case "adult":
                    if (costume.classList.contains("Adult")) {
                        costume.classList.remove("hidden");
                    } else {
                        costume.classList.add("hidden");
                    }
                    break;
                case "child":
                    if (costume.classList.contains("Child")) {
                        costume.classList.remove("hidden");
                    } else {
                        costume.classList.add("hidden");
                    }
                    break;
                case "infant":
                    if (costume.classList.contains("Infant")) {
                        costume.classList.remove("hidden");
                    } else {
                        costume.classList.add("hidden");
                    }
                    break;
                default:
                    costume.classList.remove("hidden");

            }
        });
    }


    static deleteCostume(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showCostumeDetails(costume) {
        const costumeDetails = document.querySelector('#costume-details');

        const costumeEl = document.createElement('li');
        costumeEl.classList = 'costume-details';
        costumeEl.innerHTML = `<h3>${costume.character}</h3>
        <ul>
        <li>Gender: ${costume.gender}</li>
        <li>Size: ${costume.age} ${costume.size}</li>
        <li>Picture: ${costume.pic}</li>
        <li>Notes: ${costume.notes}</li>
        </ul>`;
        return costumeEl;
    }

    static showAlert(message, className, divClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(`.${divClass}-container`);
        const form = document.querySelector('#costume-form');
        const table = document.querySelector('#inventory-table');
        const button = document.querySelector('#show-inventory');
        if (divClass === 'form') {
            container.insertBefore(div, form);
        } else if (divClass === 'inventory') {
            container.insertBefore(div, table);
        } else {
            container.insertBefore(div, button);
        }
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2500);
    }

    static clearFields() {
        document.querySelector('#costume-form').reset();
    }
}