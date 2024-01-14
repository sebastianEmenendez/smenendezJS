
// Array de las bandas, se puede ampliar
const bandas = ['Black Sabbath', 'Led Zepellin', 'Deep Purple', 'Judas Priest', 'Iron Maiden', 'Metallica', 'Megadeth',
    'Slayer', 'Pantera', 'V8', 'Hermetica', 'Almafuerte', 'Horcas', 'Dream Theater', 'Death', 'Amon Amarth', 'Sepultura',
    'Stratovarius', 'Dragon Force', 'Symphony X', 'Helloween', 'Dark Tranquility'];


    //Variables iniciales
let tuEstilo = prompt("Cual es tu estilo de musica favorito")
let nombre, tuBanda; 

// Ingreso de datos, segun el estilo
if (tuEstilo === 'metal') {
    nombre = prompt("Cual es tu nombre?")
    tuBanda =prompt("Cual es tu banda de metal favorita?")

// Si el estilo es metal y la banda ok
if (bandas.includes(tuBanda)) {
        console.log("¡Bienvenido hermano metalero , " + nombre + " ! Tu banda es de las grandes del metal.");
    } else {
        // Si la banda no está en el array
        bandas.push(tuBanda);
        console.log("¡Bienvenido hermano metalero , " + nombre + "! Tu banda favorita ha sido agregada a nuestra lista metalera.");
    }
// Alert de no tuEstilo
    console.log(bandas);    
}else{
    alert("Tu estilo favorito, no es el metal, gracias por visitarnos")
}