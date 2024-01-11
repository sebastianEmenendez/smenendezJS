
const bandas = ['Black Sabbath', 'Led Zepellin', 'Deep Purple', 'Judas Priest', 'Iron Maiden', 'Metallica', 'Megadeth',
    'Slayer', 'Pantera', 'V8', 'Hermetica', 'Almafuerte', 'Horcas', 'Dream Theater', 'Death', 'Amon Amarth', 'Sepultura',
    'Stratovarius', 'Dragon Force', 'Symphony X', 'Helloween', 'Dark Tranquility'];


let nombre = prompt("¿Cuál es tu nombre?");
let tuBanda = prompt("Ingresa tu banda");

if (bandas.includes(tuBanda)) {
        console.log("¡Bienvenido hermano metalero , " + nombre + " ! Tu banda es de las grandes del metal.");
    } else {
        // Si la banda no está en el array, agrégala
        bandas.push(tuBanda);
        console.log("¡Bienvenido hermano metalero , " + nombre + "! Tu banda favorita ha sido agregada a nuestra lista metalera.");
    }