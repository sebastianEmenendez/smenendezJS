
const bandas = ['Black Sabbath', 'Led Zepellin', 'Deep Purple', 'Judas Priest', 'Iron Maiden', 'Metallica', 'Megadeth',
    'Slayer', 'Pantera', 'V8', 'Hermetica', 'Almafuerte', 'Horcas', 'Dream Theater', 'Death', 'Amon Amarth', 'Sepultura',
    'Stratovarius', 'Dragon Force', 'Symphony X', 'Helloween', 'Dark Tranquility'];


let tuEstilo = prompt("Cual es tu estilo de musica favorito")
let nombre, tuBanda; 


if (tuEstilo === 'metal') {
    nombre = prompt("Cual es tu nombre?")
    tuBanda =prompt("Cual es tu banda de metal favorita?")


if (bandas.includes(tuBanda)) {
        console.log("¡Bienvenido hermano metalero , " + nombre + " ! Tu banda es de las grandes del metal.");
    } else {
        // Si la banda no está en el array, agrégala
        bandas.push(tuBanda);
        console.log("¡Bienvenido hermano metalero , " + nombre + "! Tu banda favorita ha sido agregada a nuestra lista metalera.");
    }

    console.log(bandas);    
}