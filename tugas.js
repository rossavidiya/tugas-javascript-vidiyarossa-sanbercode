const prompt = require("prompt-sync")({sigint: true });

function AkarPangkatDua(x) {
    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        let akarKuadrat = Math.sqrt(x);
        console.log(`Akar pangkat 2 dari ${x} adalah ${akarKuadrat}`);
    }
}

x = prompt("Akar dari angka: ");
AkarPangkatDua(x);