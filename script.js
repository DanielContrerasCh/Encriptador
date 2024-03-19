function encriptar() {
    let string = document.getElementById("encriptar").value;
    string = string.toLowerCase();
    string = string.replace(/[^\w\s]|[\d]/g, '');
    string = string.replace(/\s{2,}/g, ' ');
    let arr = string.split('');

    for(let char in arr) {
        if (arr[char] == 'e') {
            arr[char] = "enter";
        }
        if (arr[char] == 'i') {
            arr[char] = "imes";
        }
        if (arr[char] == 'a') {
            arr[char] = "ai";
        }
        if (arr[char] == 'o') {
            arr[char] = "ober";
        }
        if (arr[char] == 'u') {
            arr[char] = "ufat";
        }
    }
    
    let res = arr.join('');
    document.getElementById("desencriptar").value = res;
}

function desencriptar() {
    let string = document.getElementById("desencriptar").value;
    string = string.toLowerCase();
    string = string.replace(/[^\w\s]|[\d]/g, '');
    string = string.replace(/\s{2,}/g, ' ');
    let res = string.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');

    document.getElementById("encriptar").value = res;
}

function borrar(id) {
    document.getElementById(id).value = "";
}

function copiar(id) {
    let string = document.getElementById(id);

    string.select();
    string.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(string.value);
}