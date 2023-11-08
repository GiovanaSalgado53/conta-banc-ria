document.addEventListener ("DOMContentLoaded", function (){
    
function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const saldo = []

  function recebeEventoForm(evento){
    evento.preventDefault()

    const deposito = form.querySelector('.deposito')
    const saque = form.querySelector('.saque')
    const saldoAtual = 1000

    depositoArray.push(parseFloat(deposito.value))
    saqueArray.push(parseFloat(saque.value))

    atualizarGrafico()
    atualizarGraficoDois()

    saldo.push({
        deposito: deposito.ariaValueMax,
        saque: saque.value
    })

    console.log(saldo)

    resultado.innerHTML += `<p>Depósito de R$${deposito.value}. </p>`
    
    resultado.innerHTML += `<p>Saque de R$${saque.value}. </p>`

  }

  form.addEventListener('submit', recebeEventoForm)
  

  plots = document.getElementById("plots");

  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
  const depositoArray = [] 
  const saqueArray = []

 

  function atualizarGrafico(){
    const plots1 = document.getElementById("plots")
    const chart1 = new Chart(plots1, {
        type:'line',
        data:{
            labels: months, 
            datasets: [{
                data: depositoArray, 
                backgroundColor: 'yellow',
                borderColor: 'white',
                fill: false,
            }]
        }
    })
  }

  function atualizarGraficoDois(){
    const plots2 = document.getElementById("outroGrafico")
    const chart = new Chart(plots2, {
        type:'line',
        data:{
            labels: months, 
            datasets: [{
                data: saqueArray, 
                backgroundColor: 'yellow',
                borderColor: 'white',
                fill: false,
            }]
        }
    })   
  }

  atualizarGrafico()
  atualizarGraficoDois()
};


meuEscopo()

})

/*import { Menu } from "./Menu.js"

export class ContaBancaria extends Menu{

    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia,
        this.numero = numero, 
        this.tipo = tipo,
        this.saldo = saldo
    }

    saldoValido(value){
        return this.saldo.test(value)
    }

    get saldoAtual(){
        return this.saldo
    }

    set alterarSaldo(novoSaldo){
        this.saldo = novoSaldo 
    }
    
    set depositar(dinheiroDepositar){
        let novoSaldo = this.saldo + dinheiroDepositar
        this.alterarSaldo(novoSaldo) 
    }

    set sacar(dinheiroSacar){
        dinheiroSacar = parseInt(prompt("Quanto deseja sacar?"))
        if(dinheiroSacar>this.saldo){
            console.log("Saldo insuficiente")
        }else{
            let novoSaldo = this.saldo - dinheiroSacar
            this.alterarSaldo(novoSaldo)
        }
        console.log(`Saque de R${dinheiroSacar} realizado. Saldo atual: R$${this.novoSaldo}`)
    } 

}
*/
