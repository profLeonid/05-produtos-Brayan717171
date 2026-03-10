'use strict'


// 1. Nossa "Biblioteca" de preços variáveis
const PRECOS_BASE = {

    // --- LINHA IPHONE 16 (LANÇAMENTO) ---
    "IPHONE 16 PRO MAX": 10999.00,
    "IPHONE 16 PRO": 9299.00,
    "IPHONE 16 PLUS": 7799.00,
    "IPHONE 16": 7099.00,

    // --- LINHA IPHONE 15 ---
    "IPHONE 15 PRO MAX": 8500.00,
    "IPHONE 15 PRO": 7200.00,
    "IPHONE 15 PLUS": 5800.00,
    "IPHONE 15": 4900.00,

    // --- LINHA IPHONE 14 ---
    "IPHONE 14 PLUS": 4600.00,
    "IPHONE 14": 3999.00,

    // --- LINHA IPHONE 13 ---
    "IPHONE 13": 3499.00,
    "IPHONE 13 MINI": 3100.00,

    // --- LINHA IPHONE 12 E ANTERIORES ---
    "IPHONE 12": 2800.00,
    "IPHONE 11": 2100.00,

    // --- PERIFÉRICOS MAIS VENDIDOS ---
    "MOUSE LOGITECH G PRO": 650.00,
    "MOUSE LOGITECH G502": 350.00,
    "TECLADO MECHANICAL RGB": 280.00,
    "TECLADO LOGITECH MX KEYS": 600.00,
    "MOUSEPAD GAMER EXTRA GRANDE": 90.00,
    "HEADSET HYPERX CLOUD II": 450.00,
    "WEBCAM LOGITECH C920": 380.00,
    "MICROFONE HYPERX QUADCAST": 850.00,

    // --- ÁUDIO E WEARABLES ---
    "AIRPODS PRO 2": 1800.00,
    "GALAXY BUDS 2 PRO": 800.00,
    "FONE SONY WH-1000XM5": 2100.00,
    "APPLE WATCH SERIES 9": 3500.00,
    "GALAXY WATCH 6": 1600.00,
    "CAIXA JBL FLIP 6": 650.00,
    "CAIXA JBL BOOMBOX 3": 2400.00,

    // --- INFORMÁTICA E HARDWARE ---
    "NOTEBOOK MACBOOK AIR M3": 9500.00,
    "NOTEBOOK DELL INSPIRON": 3200.00,
    "NOTEBOOK GAMER ACER NITRO": 4500.00,
    "MONITOR LG ULTRAWIDE 29": 1100.00,
    "MONITOR AOC VIPER 144HZ": 950.00,
    "SSD KINGSTON 480GB": 220.00,
    "SSD NVME SAMSUNG 1TB": 550.00,
    "PLACA DE VIDEO RTX 4060": 2100.00,
    "PROCESSADOR RYZEN 5 5600G": 850.00,
    "MEMORIA RAM DDR4 8GB": 180.00,

    // --- GAMES E CONSOLES ---
    "PLAYSTATION 5": 3700.00,
    "XBOX SERIES S": 2300.00,
    "NINTENDO SWITCH": 2200.00,
    "CONTROLE PS5 DUALSENSE": 400.00,
    "CONTROLE XBOX SERIES": 350.00,

};
const lerBc = () => JSON.parse(localStorage.getItem('db_produtos')) ?? []
const salvarBc = (dados) => localStorage.setItem('db_produtos', JSON.stringify(dados))

const deletarItem = (index) => {
    const db = lerBc();
    db.splice(index, 1)
    salvarBc(db)
    atualizarTela()
}

const criarLinha = (produto, index) => {
    const corpoTabela = document.getElementById('corpoTabela')
    const tr = document.createElement('tr')
    tr.className = "hover:bg-gray-50/80 transition-colors group"

    // Função interna para formatar números como R$ 0,00
    const formatarBRL = (valor) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    // Cálculo do Total da Linha
    // Quantidade * ValorUnitário (que pegamos da biblioteca)
    const valorTotalLinha = produto.quantidade * (produto.valorUnitario || 0);

    // Coluna Ref
    const tdRef = document.createElement('td')
    tdRef.className = "px-4 py-3 text-gray-400 font-mono text-xs"
    tdRef.textContent = produto.codigo

    // Coluna Nome
    const tdNome = document.createElement('td')
    tdNome.className = "px-6 py-4 text-slate-700 font-medium text-sm"
    tdNome.textContent = produto.nome

    // Coluna Quantidade
    const tdQuant = document.createElement('td')
    tdQuant.className = "px-6 py-4 text-center text-slate-500 text-sm font-mono"
    tdQuant.textContent = produto.quantidade

    // Coluna Valor Unitário (da biblioteca)
    const tdPrecoUn = document.createElement('td')
    tdPrecoUn.className = "px-6 py-4 text-right text-slate-500 text-sm"
    tdPrecoUn.textContent = formatarBRL(produto.valorUnitario || 0)

    // Coluna Valor Total (Multiplicação)
    const tdTotal = document.createElement('td')
    tdTotal.className = "px-6 py-4 text-right text-slate-900 font-bold text-sm"
    tdTotal.textContent = formatarBRL(valorTotalLinha)

    // Botão Deletar
    const tdAcao = document.createElement('td')
    tdAcao.className = "px-6 py-4 text-right"
    const btnExcluir = document.createElement('button')
    btnExcluir.textContent = "Remover"
    btnExcluir.className = "text-slate-400 hover:text-red-500 text-xs font-semibold uppercase pointer-cursor"
    btnExcluir.onclick = () => deletarItem(index) 
    tdAcao.appendChild(btnExcluir)

    // Montando a linha com as novas colunas
    tr.append(tdRef, tdNome, tdQuant, tdPrecoUn, tdTotal, tdAcao)
    corpoTabela.appendChild(tr)
}

const limparTabela = () => {
    const corpoTabela = document.getElementById('corpoTabela')
    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.lastChild)
    }
}

const atualizarTela = () => {
    limparTabela()
    const db = lerBc()
    db.forEach((item, i) => criarLinha(item, i))
}

const adicionarProduto = () => {
    const inputNome = document.getElementById('produtoNome')
    const inputQuantidade = document.getElementById('quantidadeProduto')
    
    if (!inputNome.value.trim() || !inputQuantidade.value) {
        alert("Preencha todos os campos!")
        return
    }

    const nomeBusca = inputNome.value.toUpperCase().trim();
    // Puxa o valor daquela lista de 200 produtos que criamos
    const valorEncontrado = PRECOS_BASE[nomeBusca] || 0;
    
    const novoProduto = {
        codigo: `#${Math.floor(Math.random() * 1000000)}`,
        nome: inputNome.value,
        quantidade: Number(inputQuantidade.value), // Garante que é número
        valorUnitario: valorEncontrado // Guarda o valor fixo aqui
    }
    
    const db = lerBc()
    db.push(novoProduto)
    salvarBc(db) 
    
    atualizarTela()
    
    inputNome.value = ""
    inputQuantidade.value = ""
    inputNome.focus()
}

atualizarTela()