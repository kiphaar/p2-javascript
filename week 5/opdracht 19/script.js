let favoriten = ["muziek", "vrienden", "duiken", "skateboarden", "slapen"];


let eersteItem = favoriten[0];


let laatsteItem = favoriten[favoriten.length - 1];


let aantalItems = favoriten.length;


document.getElementById("output").innerHTML = ` 
    <h1>Mijn favoriete dingen</h1>
    <p><strong>Eerste item:</strong> ${eersteItem}</p>
    <p><strong>Laatste item:</strong> ${laatsteItem}</p>
    <p><strong>Totaal aantal items:</strong> ${aantalItems}</p>
`;