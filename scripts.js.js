const inputname = document.getElementById("inputname");
const formulario = document.getElementById("cadastro");
const inputnumber = document.getElementById("inputnumber");
const inputemail = document.getElementById("inputemail");

const Pacientes = [];
function CadastrarPaciente(){
    const name = inputname.value.trim();
    const email = inputemail.value.trim();
    const number = inputnumber.value.trim();
    if(name ==""){
        alert("Insira um nome válido")
        return;
    }
    const Novopaciente = {
        name,email,number
    };
    Pacientes.push(Novopaciente);
    console.log(Pacientes);
    alert("Cadastrado com Sucesso!");
}
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    CadastrarPaciente();
    formulario.reset();
});
