let nombre = prompt("Ingresa tu nombre");
console.log(nombre);
alert("Bienvenido, " + nombre + "! a Office Lord, la batalla por la oficina moderna");

let caracteristicasGerente = [7, 4, 6, 7];
let caracteristicasVendedor = [9, 4, 7, 4];
let caracteristicasContador = [3, 7, 5, 9];
let caracteristicasPasante = [6, 5, 9, 4];
/* Características de los personajes: carisma, conocimiento, ética, excel. */

let seleccionUsuario;
let caracteristicas;

while (true) {
    seleccionUsuario = prompt("Ahora, elige tu tipo de personaje:\n1. Gerente (Carisma 7, Ética 4, Motivación 6, Excel 7)\n2. Vendedor (Carisma 9, Ética 4, Motivación 7, Excel 4)\n3. Contador (Carisma 3, Ética 7, Motivación 5, Excel 9)\n4. Pasante (Carisma 6, Ética 5, Motivación 9, Excel 4)");

    switch (parseInt(seleccionUsuario)) {
        case 1:
            caracteristicas = caracteristicasGerente;
            tipoPersonaje = "Gerente";
            break;
        case 2:
            caracteristicas = caracteristicasVendedor;
            tipoPersonaje = "Vendedor";
            break;
        case 3:
            caracteristicas = caracteristicasContador;
            tipoPersonaje = "Contador";
            break;
        case 4:
            caracteristicas = caracteristicasPasante;
            tipoPersonaje = "Pasante";
            break;
        default:
            alert("Selección no válida. Por favor, selecciona un número válido del 1 al 4.");
            continue;
    }

    break;
}

console.log(nombre, tipoPersonaje);

alert(`Has elegido ser ${tipoPersonaje}. ¡A trabajar!\nTus características son:\nCarisma: ${caracteristicas[0]}\nÉtica: ${caracteristicas[1]}\nMotivación: ${caracteristicas[2]}\nExcel: ${caracteristicas[3]}`);
