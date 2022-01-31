let Hora = 22;

if (Hora >= 6 && Hora <= 11) {
    console.log("Buenos dias");
}
else if (Hora >= 12 && Hora <= 18) {
    console.log("Buenas Tardes");
}
else if (Hora >= 19 && Hora <= 24) {
    console.log("Buenas Noches");
}
else if (Hora >= 0 && Hora <= 6) {
    console.log("Durmiendo");
}
else {
    console.log("La hora es incorrecta");
}