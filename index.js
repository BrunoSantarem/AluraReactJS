import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 =  new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 =  new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11122288809;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo._saldo = 400;
contaCorrenteRicardo.depositar(600);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = cliente2;
contaCorrenteAlice.agencia = 102;

contaCorrenteRicardo.transferir(333, contaCorrenteAlice);

console.log(contaCorrenteRicardo, contaCorrenteAlice);