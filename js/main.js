const weekLinks = [
    {label: "Week 1", url: "week1/index.html"},
    {label: "Week 2", url: "week2/index.html"}
]

const notesLinks = [
    {label: "Notes", url: "notes.html"}
]

let weekList = document.getElementById('weeks');

for (let i = 0; i < weekLinks.length; i++) {
    let week = document.createElement('li');
    let a = document.createElement('a');
    let weekLink = document.createTextNode(weekLinks[i].label);
    a.appendChild(weekLink);
    a.href = weekLinks[i].url;
    week.appendChild(a);
    weekList.appendChild(week);  
}