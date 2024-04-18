let produtos = [];

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function editarProduto(id, novaQtd) {
    produtos.forEach((p) => {
        if (p.id === id) {
            p.qtd = novaQtd;
        }
    });
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        return p.id !== id;
    });
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    editarProduto,
    removerProduto
};
