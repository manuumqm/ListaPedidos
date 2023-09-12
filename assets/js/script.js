class Pedidos {
    constructor(cliente, mesa, descricao) {
        this.id = this.gerarId();
        this.cliente = cliente;
        this.mesa = mesa;
        this.descricao = descricao;
    }

    gerarId() {
        return Math.floor(Math.random() * 1000);
    }
}

class PedidosServico {
    constructor() {
        this.pedidos = [];
    }

    adicionarPedido(parametro) {
        this.pedidos.push(parametro);
    }

    listarPedidos() {
        return this.pedidos;
    }

    listarPedidosPorId(parametro) {
        return this.pedidos.find((pedido) => pedido.id == parametro);
    }

    atualizarPedido(id, cliente, mesa, descricao) {
        const pedido = this.listarPedidosPorId(id);

        pedido.cliente = cliente;
        pedido.mesa = mesa;
        pedido.descricao = descricao;

        return pedido;
    }

    deletarPedido(parametro) {
        return (this.pedidos.find((pedido) => pedido.id != parametro
        ));
    }
}

const pedidosServico = new PedidosServico();

function criarPedido() {
    const cliente = document.getElementById("cliente").value;
    const mesa = document.getElementById("mesa").value;
    const descricao = document.getElementById("descricao").value;


    const novoPedido = new Pedidos(cliente, mesa, descricao);

    pedidosServico.adicionarPedido(novoPedido);

    listarPedidos();
    limparInputs();
}


function listarPedidos() {
    const pedidos = pedidosServico.listarPedidos();

    const elementoLista = document.getElementById("listarPedidos");
    elementoLista.innerHTML = "";

    let = content = "";

    pedidos.forEach((pedido) => {
        content += `
        <div onclick="listarPedidosPorId(${pedido.id})">
       <p>Cliente: ${pedido.cliente}</p>
        </div>
        `;
    });

function listarPedidosPorId(id) {
    const pedido = PedidosServico.listarPedidosPorId(id);

    const elementoLista = document.getElementById("listarPedidoUnico");
    document.getElementById("listarPedidoUnica").classList.remove("hidden");
    elementoLista.innerHTML = "";

    let content = `
    <div>
    <p> Id: ${pedido.id}</p>
    <p> Cliente: ${pedido.cliente}</p>
    <p> Mesa: ${pedido.mesa}</p>
    <p> Descrição: ${pedido.descricao}</p>
    <button onclick="atualizarPedido(${pedido.id})">Editar</button>
    <button onclick="deletarPedido(${pedido.id})">Deletar</button>
    </div>
    `;
    elementoLista.innerHTML = content;
}

let aux = null;

function atualizarPedido(id) {
    const pedido = pedidosServico.listarPedidosPorId(id);

    document.getElementById("cliente").value = pedido.cliente;
    document.getElementById("mesa").value = pedido.mesa;
    document.getElementById("descricao").value = pedido.descricao;


    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    aux = id;
}

function editarPedido() {
    const clientes = document.getElementById("clientes").value;
    const mesa = document.getElementById("mesa").value;
    const descricao = document.getElementById("descricao").value;

    pedidosServico.atualizarPedido(aux, clientes, mesa, descricao);

    listarPedidos();

    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    document.getElementById("listarPedidoUnico").classList.add("hidden");
    limparInputs();

    aux = null;
}
}

function limparInputs() {
    document.getElementById("cliente").value = "";
    document.getElementById("mesa").value = "";
    document.getElementById("descricao").value = "";

}

function deletarPedido(id) {
    pedidosServico.deletarPedido(id);

    listarPedidos();

    document.getElementById("listarPedidoUnico").classList.add("hidden");
}

function verificarInputs() {
    let cliente = document.getElementById("cliente").value;
    let mesa = document.getElementById("mesa").value;
    let descricao = document.getElementById("descricao").value;

    console.log(cliente);
    console.log(mesa);
    console.log(descricao);

    if (cliente == "" || mesa == "" || descricao == "") {
        envieMsg('Preencha todos os campos, por favor!', 'erro');
        return true;
    } else {
        envieMsg("Os dados não estão em branco e foram coletados.");
        return false;
    }
} 