# 📦 EstoqueDigital

> Painel simples e rápido para controle de estoque de produtos tech — direto no navegador, sem servidor, sem banco de dados.

---

## 🖥️ Preview

![EstoqueDigital Preview](./Captura%20de%20tela%202026-03-19%20111733.png)

> Interface limpa com tabela de produtos, cálculo automático de totais e remoção de itens.

---

## ✨ Funcionalidades

- **Cadastro rápido** — adicione produtos pelo nome e quantidade com um clique
- **Precificação automática** — busca o valor unitário em uma biblioteca com +50 produtos cadastrados
- **Cálculo em tempo real** — total da linha calculado automaticamente (Qtd × Unitário)
- **Remoção de itens** — remova qualquer produto da lista instantaneamente
- **Persistência local** — os dados ficam salvos no `localStorage` do navegador (sem perda ao recarregar)
- **Código de referência gerado automaticamente** — cada item recebe um `#ID` único

---

## 📁 Estrutura do Projeto

```
estoque-digital/
├── index.html   # Estrutura e layout (Tailwind CSS via CDN)
└── app.js       # Lógica da aplicação (CRUD + biblioteca de preços)
```

---

## 🚀 Como usar

1. **Clone ou baixe** os arquivos do repositório
2. **Abra o `index.html`** diretamente no navegador (sem necessidade de servidor)
3. **Digite o nome do produto** no campo de descrição (ex: `iPhone 16 Pro Max`)
4. **Informe a quantidade**
5. Clique em **Adicionar Item** — o preço é preenchido automaticamente!

> **Dica:** Os nomes dos produtos devem corresponder à biblioteca interna (case-insensitive). Exemplos válidos: `iPhone 16`, `AirPods Pro 2`, `PlayStation 5`, `Mouse Logitech G502`.

---

## 💰 Biblioteca de Preços

O sistema possui preços pré-cadastrados para as seguintes categorias:

| Categoria             | Exemplos                                      |
|-----------------------|-----------------------------------------------|
| 📱 iPhones            | iPhone 11 ao iPhone 16 Pro Max                |
| 🎧 Áudio & Wearables  | AirPods, Galaxy Buds, Sony WH-1000XM5         |
| 💻 Notebooks & Monitores | MacBook Air M3, Dell Inspiron, Acer Nitro  |
| 🖱️ Periféricos        | Logitech G Pro, HyperX Cloud II, Webcams      |
| 🎮 Games & Consoles   | PS5, Xbox Series S, Nintendo Switch           |
| 🔧 Hardware           | RTX 4060, Ryzen 5 5600G, SSD NVMe Samsung     |

> Produtos não encontrados na biblioteca recebem valor unitário `R$ 0,00`.

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **Tailwind CSS v4** (via CDN) — estilização utilitária
- **JavaScript puro (ES6+)** — sem frameworks, sem dependências
- **localStorage** — persistência de dados no navegador

---

## 📌 Observações

- Os dados **não sincronizam entre dispositivos** — são locais ao navegador usado
- Para **limpar o estoque**, abra o DevTools → Application → localStorage → delete `db_produtos`
- O projeto é **100% frontend** — pode ser hospedado em qualquer CDN estático (GitHub Pages, Netlify, Vercel)

---

## 📄 Licença

Projeto acadêmico — uso livre para fins educacionais.