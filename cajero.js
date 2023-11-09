const users = [
    { username: "Michel", password: "1234", saldo: 400 },
    { username: "Maria", password: "1234", saldo: 300 },
    { username: "Antonia", password: "1234", saldo: 20 },
];
//para indicar que no se le ha asignado valor al user todavía
let actualUser = null; 
function login() {

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = users.find( // busca el elemento en el array, si no los manda a "undefinded"
        (u) => u.username === username && u.password === password
); 

    if (user) {
        actualUser = user;

        usernameInput.value = "";
        passwordInput.value = "";

        document.getElementById("usernameDisplay").textContent =
        actualUser.username;
        document.getElementById("Valordisponible").textContent =
            "$" + actualUser.saldo;
        document.getElementById("cuenta").style.display = "block";
        document.getElementById("inicio").style.display = "none";
    } else {
        alert("Usuario o contraseña incorrectos, por favor intente nuevamente");
    }
}

function ConsultarSaldo() {
    document.getElementById("message").textContent =
        "Saldo actual: $" + actualUser.saldo;
}
// función para deposito
function deposit() {
    const depositoInput = document.getElementById("deposito");
    const deposito = parseInt(depositoInput.value);

    if (deposito >= 10 && deposito <= 990) {
        actualUser.saldo += deposito;
        document.getElementById("Valordisponible").textContent =
            "$" + actualUser.saldo;
        document.getElementById("message").textContent =
            "Acabas de depositar: $ " + deposito + " Tu nuevo saldo es de: $ " + actualUser.saldo;
            alert("Hiciste un deposito por: " + deposito);
    } else {
        alert("Monto inválido, El monto debe ser entre $10 y $990");
    }

    depositoInput.value = "";
}
//funcion para el retiro
function withdraw() {
    const retirarInput = document.getElementById("retirar");
    const retirar = parseInt(retirarInput.value);

    if (retirar >= 10 && retirar <= 990) {
        if (retirar <= actualUser.saldo) {
            actualUser.saldo -= retirar;
            document.getElementById("Valordisponible").textContent = "$" + actualUser.saldo;
            document.getElementById("message").textContent =
            "Acabas de retirar: $" + retirar + " Tu nuevo saldo es de: $ " + actualUser.saldo;
            alert("acabas de retirar:" + retirar);
        } else{
            alert("Monto inválido, el monto debe ser dentro de tu saldo disponible")
        }
    }
    retirarInput.value = "";
}
