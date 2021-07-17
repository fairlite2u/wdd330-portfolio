// The controller needs access to both the model and the view...so let's import them
import Store from './costumeModel.js'; 
import UI from './costumeView.js';

// Costume Class: Represents a Costume
class Costume {
    constructor(character, gender, size, age, pic, notes) {
        this.character = character;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.pic = pic;
        this.notes = notes;
    }
}

// Event: Show/Hide Inventory List
document.querySelector('#show-inventory').addEventListener('click', function() {
    const inventoryBtn = document.querySelector('.inventory-container');
    inventoryBtn.classList.toggle('expand');
    if (inventoryBtn.classList.contains('expand')) {
    document.querySelector('#show-inventory').innerText = "Hide Current Inventory";
    } else {
        document.querySelector('#show-inventory').innerText = "Show Current Inventory";
    }
  });

// Event: Display Costumes
document.addEventListener('DOMContentLoaded', UI.displayCostumes);

// Event: Filter Costume Inventory List
document.querySelector('.filter-list').addEventListener('click', UI.filterCostumes);

// Event: Show Add Costume Form
document.querySelector('#add-inventory').addEventListener('click', function() {
    const showFormBtn= document.querySelector('.form-container');
    showFormBtn.classList.toggle('expand');
    if (showFormBtn.classList.contains('expand')) {
        document.querySelector('#add-inventory').innerText = "Hide Form";
        } else {
            document.querySelector('#add-inventory').innerText = "Add New Costume To Inventory";
        }
  });

// Event: Add a Costume
document.querySelector('#costume-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const character = document.querySelector('#character').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const size = document.querySelector('#size option:checked').value;
    const age = document.querySelector('input[name="age-group"]:checked').value;
    const pic = document.querySelector('#costume-pic').value;
    // addEventListener('change', function () {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => {
    //         localStorage.setItem('costume-pic', reader.result);
    //     });
    //     reader.readAsDataURL(this.files[0]);
    // });
    const notes = document.querySelector('#notes').value;
    console.log(gender);
    // Validate
    if (character === '' | gender === '' | size === '' | age ==='' | pic === '' | notes === '') {
        UI.showAlert('Please fill in all fields', 'danger', 'form');
    } else {
        // Instantiate costume
        const costume = new Costume(character, gender, size, age, pic, notes);

        // Add Costume to UI
        UI.addCostumeToList(costume);

        // Add costume to store
        Store.addCostume(costume);

        // Show success message
        UI.showAlert('Costume Added', 'success', 'form');

        // Clear fields
        UI.clearFields();
    }
});

// Event: Remove a Costume
document.querySelector('#costume-list').addEventListener('click', (e) => {
    // Remove costume from UI
    UI.deleteCostume(e.target);

    // Remove costume from store
    Store.removeCostume(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Costume Removed', 'success', 'inventory');
});

// document.addEventListener("DOMContentLoaded", () => {
//     const recentImageDataUrl = localStorage.getItem('costume-pic');

//     if (recentImageDataUrl) {
//         document.querySelector('#imgPreview').setAttribute("src", recentImageDataUrl);
//     }
// });