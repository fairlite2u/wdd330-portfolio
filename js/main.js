const weekLinks = [
    {label: "Week 1", url: "week1/index.html"},
    {label: "Week 2", url: "week2/index.html"},
    {label: "Week 3", url: "week3/index.html"}, 
    {label: "Week 4", url: "week4/index.html"},
    {label: "Week 5", url: "week5/index.html"},
    {label: "Midterm: Todo App", url: "todo/index.html"},
    {label: "Week 7", url: "week7/index.html"},
    {label: "Week 8", url: "week8/index.html"},
    {label: "Week 9", url: "week9/index.html"}
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