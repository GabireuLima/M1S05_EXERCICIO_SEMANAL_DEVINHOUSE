class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;
    
    constructor(nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}



class Pedidos {
    numeroPedido;
    dataPedido = new Date().toLocaleDateString();
    estaPago = false;
    listaProdutos = [];
    nomeCliente;
    
    constructor(numeroPedido, nomeCliente) {
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;

    };
    
    adicionaProduto(produto) {
        if (produto instanceof Produto) {
            this.listaProdutos.push(produto);
        }
    }

    calcularTotal() {
        let valorTotal = 0
        this.listaProdutos.forEach(produto => {
            valorTotal += produto.quantidade * produto.preco;
        })
        return valorTotal;
    }
}

let mouse = new Produto('Mouse', 50, true, 1);
let mousePad = new Produto('Mouse Pad', 20, true, 2);
let teclado = new Produto('Teclado', 120, false, 1);
let monitor = new Produto('Monitor', 800, true, 3);
let headset = new Produto('Headset', 250, false, 1);

let primeiroPedido = new Pedidos(20220001, 'Gabriel');
let segundoPedido = new Pedidos(20220002, 'Nadi')

primeiroPedido.adicionaProduto(mouse);
primeiroPedido.adicionaProduto(headset);
primeiroPedido.adicionaProduto(monitor);
segundoPedido.adicionaProduto(teclado);
segundoPedido.adicionaProduto(mousePad);

primeiroPedido.listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome} | Valor un R$ ${produto.preco} | Quantidade: ${produto.quantidade} || Total: ${produto.preco * produto.quantidade}`)
})
console.log(`Cliente: ${primeiroPedido.nomeCliente}, Numero do pedido: ${primeiroPedido.numeroPedido}`)
console.log(`Valor total do pedido: ${primeiroPedido.calcularTotal()}`)

console.log('----------------------------------------------------------')

segundoPedido.listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome} | Valor un R$ ${produto.preco} | Quantidade: ${produto.quantidade} || Total: ${produto.preco * produto.quantidade}`)
})
console.log(`Cliente: ${segundoPedido.nomeCliente}, Numero do pedido: ${segundoPedido.numeroPedido}`)

console.log(`Valor total do pedido: ${segundoPedido.calcularTotal()}`)





