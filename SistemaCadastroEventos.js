// busquei na internet a forma de trazer a data atual para uma variável junto ao JS.

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
let dataAtual = dia + '/' + mes + '/' + ano;

console.log("Bem vindo ao cadastro de Eventos")
console.log("Informe a data do evento")

// Pesquisei e tentei implementar (mas sem sucesso) a função Promt, mas vi que ela só 
// é executada em navageadores para solicitar dados ao usuário. Para node, não soube aplicar.
// Então, aqui uso uma data já declarada.

let dataEvento = 20/09/2022
console.log("20/09/2022")


if (dataEvento < dataAtual) { 
        console.log ("Data não permitida")
 }       
        else {
            console.log("Informe o nome do palestrante")
        }

// Pesquisei e tentei implementar (mas sem sucesso) a função Promt, mas vi que ela só 
// é executada em navageadores para solicitar dados ao usuário. Para node, não soube aplicar.
// Então, aqui uso uma palestrante já declarada.

let palestrante = "Maria Augusta"
console.log(palestrante)

let numeroMaximoParticipantes = 100

for (let contador = 0; contador <= numeroMaximoParticipantes; contador++) {
     console.log("Informe o nome do participante")
     console.log("Pedro Silva")
     console.log("Informe a idade do participante")

     let idadeParticipante1 = 22

     console.log(idadeParticipante1)

     if (idadeParticipante1 > 18) {
        console.log("Informe o nome do participante")
        console.log("Informe a idade do participante")
     } else {
        console.log("Idade não permitida, cadastro não será permitido")
        console.log("Informe o nome do participante")
        console.log("Informe a idade do participante")
     }
}

// Não soube como criar corretamente a estrutura for para solicitar o cadastramento dos participantes,
// com validação de idade e limite de 100 participantes. O modelo acima exibe uma prévia e simulação de como
// aconteceria.