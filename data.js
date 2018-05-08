const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];
function o1() {
    let div1 = document.createElement("div");
    div1.className = "justify flex-container";
    for(let i=0; i<=4; i++){


    let div2 = document.createElement("div");
    div2.className = "item";
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    h2.innerHTML = countries[i].name;
    document.body.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(h2);
    div2.appendChild(p1);
    p1.innerHTML = countries[i].continent;
    let p2 = document.createElement("div");
    p2.className = "inner-box";
    let h3 = document.createElement("h3");
    div2.appendChild(p2);
    p2.appendChild(h3);
    h3.innerHTML = "Cities";
    let ul = document.createElement("ul");
    for(let j=0; j<countries[i].cities.length; j++){
        let li1 = document.createElement("li");
        ul.appendChild(li1);
        li1.innerHTML = countries[i].cities[j];
    }
    p2.appendChild(ul);
    let p3 = document.createElement("div");
    p3.className = "inner-box";
    let h4 = document.createElement("h3");
    div2.appendChild(p3);
    p3.appendChild(h4);
    h4.innerHTML = "Popular Photos" ;
    for(let k=0; k < countries[i].photos.length; k++){
        let img1 = document.createElement("img");
        img1.className = "photo";
        img1.src = "images/" + countries[i].photos[k];
        p3.appendChild(img1);
    }

    let button = document.createElement("button");
    div2.appendChild(button);
    button.innerHTML = "Visit";

}
}
o1();