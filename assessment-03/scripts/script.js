const nation1 = {
    name: "United Sates",
    continent: "Continent: North America",
    image: "images/us_flag.jpg",
    capitol: "Capitol: Washington D.C.",
    population: "Population: 331.9 million",
    gunRate: "120.5 guns per 100 people",
};
const nation2 = {
    name: "Finland",
    continent: "Continent: Europe",
    image: "images/finland_flag.jpg",
    capitol: "Capitol: Helsinki",
    population: "Population: 5.541 million",
    gunRate: "32.4 guns per 100 people",
};
const nation3 = {
    name: "Saudi Arabia",
    continent: "Continent: Asia",
    image: "images/sa_flag.jpg",
    capitol: "Capitol: Riyadh",
    population: "Population: 35.95 million",
    gunRate: "16.7 guns per 100 people",
};
const nation4 = {
    name: "Brazil",
    continent: "Continent: South America",
    image: "images/brazil_flag.jpg",
    capitol: "Capitol: Brasilia",
    population: "Population: 214.3 million",
    gunRate: "8.3 guns per 100 people",
};
const nation5 = {
    name: "China",
    continent: "Continent: Asia",
    image: "images/china_flag.jpg",
    capitol: "Capitol: Beijing",
    population: "Population: 1.412 billion",
    gunRate: "3.6 guns per 100 people",
};
function display() {
    
    let html1 = `<img src = ${nation1.image}>` +
        `<h3>${nation1.name}</h3>` +
        `<p>${nation1.capitol}<p>` +
        `<p>${nation1.continent}</p>` +
        `<p>${nation1.population}</p>` +
        `<p>${nation1.gunRate}</p>`;
    document.getElementById('item1').innerHTML = html1;

    let html2 = `<img src = ${nation2.image}>` +
        `<h3>${nation2.name}</h3>` +
        `<p>${nation2.capitol}<p>` +
        `<p>${nation2.continent}</p>` +
        `<p>${nation2.population}</p>` +
        `<p>${nation2.gunRate}</p>`;
    document.getElementById('item2').innerHTML = html2;

    let html3 = `<img src = ${nation3.image}>` +
        `<h3>${nation3.name}</h3>` +
        `<p>${nation3.capitol}<p>` +
        `<p>${nation3.continent}</p>` +
        `<p>${nation3.population}</p>` +
        `<p>${nation3.gunRate}</p>`;
    document.getElementById('item3').innerHTML = html3;

    let html4 = `<img src = ${nation4.image}>` +
        `<h3>${nation4.name}</h3>` +
        `<p>${nation4.capitol}<p>` +
        `<p>${nation4.continent}</p>` +
        `<p>${nation4.population}</p>` +
        `<p>${nation4.gunRate}</p>`;
    document.getElementById('item4').innerHTML = html4;

    let html5 = `<img src = ${nation5.image}>` +
        `<h3>${nation5.name}</h3>` +
        `<p>${nation5.capitol}<p>` +
        `<p>${nation5.continent}</p>` +
        `<p>${nation5.population}</p>` +
        `<p>${nation5.gunRate}</p>`;
    document.getElementById('item5').innerHTML = html5;
}