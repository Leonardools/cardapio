         
/* === CONTROLE DE VERSÃO / CACHE === */
const VERSAO_ATUAL = '1.0.6'; // Atualize este número a cada mudança significativa no catálogo ou código
const versaoSalva = localStorage.getItem('versao_site');
const precisaAtualizarCatalogo = versaoSalva !== VERSAO_ATUAL;

/* ===========================
        Dados iniciais
=========================== */
const sampleProducts = [

    /*  HOME INICIAL */
    { id: 'p1', type:'bebida', title:'Monster Energy Juice Mango Loco', price:12.00, img:'img/mango loco tradiconal.jpg', desc:'Monster Mongo Loco 473ml'},
    { id: 'p2',  type:'bebida', title:'Monster Energy Juice Tradicional', price:12.00, img:'img/tradicionalaa.jpg', desc:'Monster Tradiconal 473ml'},
    { id: 'p3', type:'bebida', title:'Monster Energy Ultra White', price:12.00, img:'img/zero branco.jpg', desc:'Monster Energy Ultra White 473ml'},
    { id: 'p4', type:'bebida', title:'Monster Energy Zero Açúcar', price:12.00, img:'img/Captura de tela 2026-05-13 134105.png', desc:'Monster Tradicional Zero 473ml'},
    { id: 'p5',  type:'refrigerante', title:'Água com gás', price:4.00, img:'img/com g\u00e1s.jpg', desc:'Água com gás 500ml'},

    /* COMIDA */
    { id: 'c1', type:'comida', title:'Bala Halls Morango 28g', price:2.50 , img:'img/halls morango.png', desc:'Bala Halls Morango 28g'},       
    { id: 'c2', type:'comida', title:'Bala Halls Extra Forte', price: 2.50 , img:'img/Captura de tela 2026-05-13 105339.png',desc:'Bala Halls Extra-Forte 28g'},
    { id: 'c3', type:'comida', title:'Chocolate Snickers 45g', price:0.00, img:'img/SNICKERES 1.jpg', desc:'Chocolate barrinha Snickers 45g'},
    { id: 'c4', type:'comida', title:'Chocolate KitKat 41,5g', price:0.00, img:'img/KITKAT.jpg', desc:'Chocolate Kitkat 4 Fingers Ao Leite 41,5g'},
    { id: 'c5', type:'comida', title:'Chocolate M&M ao leite 40g', price:0.00, img:'img/M&M.jpg', desc:'Chocolate M&amp;m Ao Leite 40g'},
    { id: 'c6', type:'comida', title:'Chocolate Chokito 32g', price:0.00, img:'img/CHOKITO.jpg', desc:'Chocolate Chokito Nestle 32g'},
    { id: 'c7', type:'comida', title:'Biscoito Look Sabores 55g', price:0.00, img:'img/LOOK SABORES.jpg', desc:'Caixa De Biscoito Look Sabores 55g'},
    { id: 'c8', type:'comida', title:'Chocolate Prestigio 33g', price:0.00, img:'img/prestigio.png', desc:'Chocolate Prestigio Nestle 33g'},
    { id: 'c9', type:'comida', title:'Chocolate Bis Xtra 45g', price:0.00, img:'img/bis extra.jpg' , desc:'Lacta Chocolate ao Leite Bis Xtra 45g'},
    { id: 'c10', type:'comida', title:'Chocolate Bis Xtra Branco 45g', price:0.00, img:'img/1116041-1200-auto.webp', desc:'Lacta Chocolate Bis Xtra branco 45g'},
                
    
    /* Monster */
    { id: 'b1', type:'bebida', title:'Energy Juice Khaotic', price:12.00, img:'img/laranja.jpg', desc:'Sobre o Sabor: Suco de laranja com energetico. 473ml'},
    { id: 'b2', type:'bebida', title:'Ultra Fiesta Mango', price:12.00, img:'img/mango loco zero.jpg', desc:'Monster Sabor:: tropical de manga 473ml'},
    { id: 'b3', type:'bebida', title:'Energy Absolutely Zero', price:12.00, img:'img/ABSOLUTYY.jpg', desc:'Sobre o Sabor: Monster Energy com um leve toque citrico'},
    { id: 'b4', type:'bebida', title:' Monster Energy Juice Pipeline Punch', price:12.00, img:'img/goiaba.jpg', desc:' Monster Pipeline Punch 473ml'},
    { id: 'b5', type:'bebida', title:'Ultra Watermelon', price:12.00, img:'img/download.jpg', desc:' Monster Ultra Watermelon.'}, 
    { id: 'b6', type:'bebida', title:' VR|46 Valentino Rossi', price:12.00, img:'img/docter.jpg', desc:'Sobre o SaborGrape Fruit "Toranja" 473ml'},
    { id: 'b7', type:'bebida', title:'Juice Pacific Punch', price:12.00, img:'img/juice pacific punch.png', desc:'Sabor tropical leve, suave e doce.'},
    { id: 'b8', type:'bebida', title:'Ultra Strawberry Dreams', price:12.00, img:'img/dreams.jpg', desc:'Sobre o Sabor: Morango '}, 
    { id: 'b9', type:'bebida', title:'Energy Ultra Violet', price:12.00, img:'img/violet uva.jpg', desc:'Sobre o Sabor: uva citrica sem acucar 473ml'},   
    { id: 'b10', type:'bebida', title:'Energy Ultra Peachy Keen', price:12.00, img:'img/p\u00eassego.jpg', desc:'Sobre o Sabor: pessego com o blend secreto Monster Energy'},
    { id: 'b11', type:'bebida', title:'Energy Dragon Ice Tea Limao', price:12.00, img:'img/limao.jpg', desc:'Sobre o Sabor: Cha gelado de limao com energetico 473ml'},

           /*refrigente */ 
       { id: 'r1', type:'refrigerante', title:'Sprite Zero açúcar', price:6.00, img:'img/zero sprite.jpg', desc:'Sprite Lata Zero açúcar 350ml'},
       { id: 'r2', type:'refrigerante', title:'Sprite', price:6.00, img:'img/sprite.jpg', desc:' Sprite Lata 310ml.'}, 
       { id: 'r3', type:'refrigerante', title:'Coca-Cola Zero Açúcar', price:6.00, img:'img/coca cola zero.jpg', desc:'Coca-Cola Zero 310ml'},
       { id: 'r4', type:'refrigerante', title:'Coca-Cola', price:6.00, img:'img/refrigerante-coca-cola-lata-350ml_jpg.webp', desc:'Coca-Cola 310ml'},
       { id: 'r5', type:'refrigerante', title:'Fanta Uva', price:6.00, img:'img/R.jpg', desc:'Fanta Uva 310ml'},   
       {id:  'r6', type:'refrigerante', title:'Fanta Laranja', price:6.00, img:'img/laranja fanta.jpg', desc:'Fanta Laranja 310ml'},
       { id: 'r7', type:'refrigerante', title:'Coca-Cola 2L', price:14.00, img:'img/images.jpg', desc:'Coca-Cola 2L'},  
       {id: 'r8', type:'refrigerante', title:'Coca-Cola Zero 2L', price:14.00, img:'img/Captura de tela 2026-06-12 132222.png', desc:'Coca-Cola Zero 2L'},
       
   
               
];

const sampleCombos = [
    { id:'c1', title:'Em breve !!!!', price:15.00, desc:'', img:' '}
];

const galleryImgs = [
    'https://www.vivaespetos.com.br/wp-content/uploads/2019/05/carne.jpgs',
    'https://www.vivaespetos.com.br/wp-content/uploads/2019/05/medfrango.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_5v6wfwAzAj7gI7dJ0FTZUlVgOfHeX7mfw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKfJRsNu438OsjiJDGgbVx9p45wJKgIpZOw&s',
    'https://www.vivaespetos.com.br/wp-content/uploads/2021/04/linguica.jpg',

    /* refrigernates */
    'https://superrissul.vtexassets.com/arquivos/ids/934006/Refrigerante-CocaCola-Lata-310ml.png?v=638951389750830000',

    /*cervejas*/
    'https://superprix.vteximg.com.br/arquivos/ids/217066-600-600/558184_1.jpg?v=63828309988470000',

    /*pingas*/
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoMxWTcnMNIr5reLwlCFO_QUo1wGJlzw3Tw&s'
];
function catalogoSalvoQuebrado(){
    try {
        const produtos = JSON.parse(localStorage.getItem('products') || '[]');
        if(!Array.isArray(produtos) || produtos.length < sampleProducts.length) return true;
        const primeirasImagens = produtos.slice(0, 5).map(p => (p.img || '').trim()).filter(Boolean);
        return new Set(primeirasImagens).size <= 1;
    } catch(e) {
        return true;
    }
}

const deveRecriarCatalogo = precisaAtualizarCatalogo || catalogoSalvoQuebrado();
if(deveRecriarCatalogo || !localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify(sampleProducts));
if(precisaAtualizarCatalogo || !localStorage.getItem('combos')) localStorage.setItem('combos', JSON.stringify(sampleCombos));
if(precisaAtualizarCatalogo || !localStorage.getItem('gallery')) localStorage.setItem('gallery', JSON.stringify(galleryImgs));
if(precisaAtualizarCatalogo) localStorage.setItem('versao_site', VERSAO_ATUAL);
if(!localStorage.getItem('reviews')) localStorage.setItem('reviews', JSON.stringify({})); // reviews by product id
if(!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));


/* ===========================
   Estado e utilitários               variaveis 
   =========================== */
let currentSection = 'home';
let selectedProduct = null;
let currentStar = 5;
let isAdmin = false;
const whatsNumber = '5561998710947'; // número real do dono do restaurante

function qs(id){ return document.getElementById(id) }
function money(v){ return 'R$ ' + Number(v).toFixed(2).replace('.',',') }

/* ===========================
   Render inicial
   =========================== */
function renderInitial(){
    renderQuickGrid();
    renderProducts();
    renderRefrigerantes(); 
    renderDrinks();
    renderPromos();
    renderCombos();
    renderGallery();
    renderCartCount();
    // A chamada para renderAdminPanel() foi removida daqui.
}
renderInitial();

/* ===========================
   Seções e Navegação
   =========================== */
function showSection(sec){
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    switch(sec){
        case 'home': qs('homeSection').classList.remove('hidden'); break;
        case 'cardapio': qs('cardapioSection').classList.remove('hidden'); break;
        case 'bebidas': qs('bebidasSection').classList.remove('hidden'); break;
        case 'refrigerantes': qs('refrigerantesSection').classList.remove('hidden'); break;
        case 'galeria': qs('galeriaSection').classList.remove('hidden'); break;
        case 'sobre': qs('sobreSection').classList.remove('hidden'); break;
        case 'eventos': qs('eventosSection').classList.remove('hidden'); break;
        case 'contato': qs('contatoSection').classList.remove('hidden'); break;
    }
    // highlight side nav
    document.querySelectorAll('nav.side button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('nav.desktop-nav button').forEach(b => b.classList.remove('active'));

   const mapping = {home:'btn-home', cardapio:'btn-cardapio', bebidas:'btn-bebidas', refrigerantes:'btn-refrigerantes', sobre:'btn-sobre', contato:'btn-contato'};
    const desktopMapping = {home:'d-btn-home', cardapio:'d-btn-cardapio', bebidas:'d-btn-bebidas', refrigerantes:'d-btn-refrigerantes', sobre:'d-btn-sobre', contato:'d-btn-contato'};
    
    if(mapping[sec]) qs(mapping[sec])?.classList.add('active');
    if(desktopMapping[sec]) qs(desktopMapping[sec])?.classList.add('active');
    
    // Fecha o menu lateral após a navegação em mobile
    if (window.innerWidth <= 1024) closeMenu();
}

function openMenu(){
    document.querySelector("nav.side").classList.add("open");
    document.getElementById("menuBackdrop").style.display="block";
}
function closeMenu(){
    document.querySelector("nav.side").classList.remove("open");
    document.getElementById("menuBackdrop").style.display="none";
}

/* ===========================
   Produtos / Render
   =========================== */
function getProducts(){ return JSON.parse(localStorage.getItem('products') || '[]'); }
function getCombos(){ return JSON.parse(localStorage.getItem('combos') || '[]'); }

function renderQuickGrid(){
    const grid = qs('quickGrid');
    grid.innerHTML = '';
    const prods = getProducts() .slice(0,5);    // quantidade de produto mostrado na tela inical 
    prods.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<img src="${p.img}" alt="${p.title}"><div class="body"><h3>${p.title}</h3><p class="muted">${p.desc}</p><div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px"><div class="price">${money(p.price)}</div><div><button class="btn" onclick="openProduct('${p.id}')">Ver</button><button class="btn secondary" onclick="addToCart('${p.id}',1)">+Carrinho</button></div></div></div>`;
        grid.appendChild(div);
    });
}

function renderProducts(){
   const q = qs('search').value.toLowerCase();
    const prods = getProducts().filter(p => 
        p.type === 'comida' && 
        (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
        );
    const grid = qs('productsGrid');
    grid.innerHTML = '';
    if(prods.length === 0){
        grid.innerHTML = '<p class="muted">Nenhum produto encontrado...</p>';
        return;
    }
    prods.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div class="body">
            <h3>${p.title}</h3>
            <p class="muted">${p.desc}</p>

            <div class="actions">
                <div class="price">${money(p.price)}</div>
                <div style="margin-left:auto">
                    <button class="btn" onclick="openProduct('${p.id}')">Detalhes</button>
                    <button class="btn secondary" onclick="addToCart('${p.id}',1)">Adicionar</button>
                </div>
            </div>
        </div>
        `;
        grid.appendChild(div);
    });
}

function renderDrinks(){
    const q = qs('search').value.toLowerCase();
    const drinks = getProducts().filter(p => p.type === 'bebida' && (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
    const grid = qs('drinksGrid'); grid.innerHTML = '';
    drinks.forEach(p => {
        const div = document.createElement('div'); div.className='card';
        div.innerHTML = `<img src="${p.img}" alt="${p.title}"><div class="body"><h3>${p.title}</h3><p class="muted">${p.desc}</p><div style="display:flex;justify-content:space-between;align-items:center"><div class="price">${money(p.price)}</div><div><button class="btn" onclick="openProduct('${p.id}')">Detalhes</button> <button class="btn secondary" onclick="addToCart('${p.id}',1)">Adicionar</button></div></div></div>`;
        grid.appendChild(div);
    });
}

    function renderRefrigerantes(){
    const q = qs('search').value.toLowerCase();
    const refris = getProducts().filter(p => 
        p.type === 'refrigerante' &&
        (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
    );

    const grid = qs('refrigerantesGrid');
    grid.innerHTML = '';

    if(refris.length === 0){
        grid.innerHTML = '<p class="muted">Nenhum refrigerante encontrado...</p>';
        return;
    }

    refris.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <div class="body">
                <h3>${p.title}</h3>
                <p class="muted">${p.desc}</p>
                <div class="actions">
                    <div class="price">${money(p.price)}</div>
                    <div style="margin-left:auto">
                        <button class="btn" onclick="openProduct('${p.id}')">Detalhes</button>
                        <button class="btn secondary" onclick="addToCart('${p.id}',1)">Adicionar</button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(div);
    });
}


/* ===========================
   Produto Modal + Reviews (mantido)
   =========================== */
function openProduct(id){
    const p = getProducts().find(x => x.id===id);
    if(!p) return alert('Produto nao encontrado');
    selectedProduct = p;
    qs('modalImg').src = p.img;
    qs('modalTitle').innerText = p.title;
    qs('modalDesc').innerText = p.desc;
    qs('modalPrice').innerText = money(p.price);
    qs('modalQty').value = 1;
    renderReviews(p.id);
    qs('productModalBackdrop').style.display = 'flex';
    playSizzle();
}

function closeProductModal(){ qs('productModalBackdrop').style.display = 'none'; selectedProduct = null; }

function playSizzle(){
    const audio = new Audio('https://actions.google.com/sounds/v1/food/roasting_grill.ogg'); // hosted sfx
    audio.play().catch(()=>{ /* ignore autoplay block */ });
}

/* Reviews */
function renderReviews(pid){
    const all = JSON.parse(localStorage.getItem('reviews') || '{}');
    const list = all[pid] || [];
    const container = qs('reviewsList'); container.innerHTML = '';
    if(list.length===0) container.innerHTML = '<div class="muted">Seja o primeiro a avaliar!</div>';
    list.forEach(r => {
        const d = document.createElement('div');
        d.style.borderTop='1px dashed rgba(0,0,0,0.06)';
        d.style.padding='8px 0';
        d.innerHTML = `<div style="display:flex;justify-content:space-between"><strong>${r.name}</strong><div>${'*'.repeat(r.star)}</div></div><div class="muted">${r.text}</div>`;
        container.appendChild(d);
    });
}

function setStar(n){ currentStar = n; Array.from(qs('starInput').children).forEach((c,i)=> c.style.background = i< n ? 'rgba(255,200,0,0.18)' : ''); }
function submitReview(){
    if(!selectedProduct) return alert('Abra um produto antes');
    const name = qs('reviewName').value || 'Anonimo';
    const text = qs('reviewText').value || '';
    const star = currentStar || 5;
    const all = JSON.parse(localStorage.getItem('reviews') || '{}');
    all[selectedProduct.id] = all[selectedProduct.id] || [];
    all[selectedProduct.id].unshift({name,text,star,when:Date.now()});
    localStorage.setItem('reviews', JSON.stringify(all));
    qs('reviewName').value=''; qs('reviewText').value='';
    renderReviews(selectedProduct.id);
    alert('Avaliacao enviada. Obrigado!');
}

/* ===========================
   Carrinho (mantido)
   =========================== */
function getCart(){ return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(c){ localStorage.setItem('cart', JSON.stringify(c)); renderCartCount(); }

function addToCart(id,qty=1){
    const p = getProducts().find(x=>x.id===id);
    if(!p) return;
    const cart = getCart();
    const existing = cart.find(i=>i.id===id);
    if(existing) existing.qty += qty; else cart.push({id: p.id, title:p.title, price:p.price, qty:qty});
    saveCart(cart);
    alert(`${p.title} adicionado ao carrinho`);
}

function addModalToCart(){
    if(!selectedProduct) return;
    const q = Number(qs('modalQty').value) || 1;
    addToCart(selectedProduct.id, q);
    closeProductModal();
}

function renderCartCount(){
    const c = getCart();
    const totalItems = c.reduce((s,i)=>s+i.qty,0);
    qs('cartCount').innerText = totalItems;
}

function openCart(){ qs('cartModal').style.display = 'flex'; renderCart(); }
function closeCart(){ qs('cartModal').style.display = 'none'; }

function renderCart(){
    const c = getCart();
    const cont = qs('cartItems'); cont.innerHTML = '';
    if(c.length===0){ cont.innerHTML = '<div class="muted">Seu carrinho esta vazio</div>'; qs('cartTotal').innerText = money(0); return; }
    c.forEach(item=>{
        const row = document.createElement('div'); row.style.display='flex'; row.style.justifyContent='space-between'; row.style.alignItems='center'; row.style.padding='8px 0'; 
        row.innerHTML = `<div><strong>${item.title}</strong><div class="muted">Qtd: ${item.qty} x ${money(item.price)}</div></div><div><button class="btn" onclick="changeQty('${item.id}',1)">+</button> <button class="btn secondary" onclick="changeQty('${item.id}',-1)">-</button> <button class="btn secondary" onclick="removeFromCart('${item.id}')">Remover</button></div>`;
        cont.appendChild(row);
    });
    const total = c.reduce((s,i)=>s+i.price*i.qty,0);
    qs('cartTotal').innerText = money(total);
}

function changeQty(id,delta){
    const c = getCart();
    const item = c.find(i=>i.id===id);
    if(!item) return;
    item.qty += delta;
    if(item.qty<=0) {
        const idx = c.findIndex(i=>i.id===id); c.splice(idx,1);
    }
    saveCart(c); renderCart();
}

function removeFromCart(id){
    const c = getCart().filter(i=>i.id!==id);
    saveCart(c); renderCart();
}

function clearCart(){
    if(!confirm('Limpar todo o carrinho?')) return;
    saveCart([]); renderCart();
}

/* ===========================
   Checkout via WhatsApp (mantido)
   =========================== */
function checkoutWhatsApp(){
    const c = getCart();
    if(c.length === 0){
        alert('Carrinho vazio');
        return;
    }
    const total = c.reduce((s,i)=>s + (i.price * i.qty), 0);
    const clientName = localStorage.getItem('clientName') || 'Cliente';

    let text = 
` *NOVO PEDIDO - Mercearia do Lucas - Conveniencia* 
 *Cliente:* ${clientName}

 *Itens do pedido:*`;

    c.forEach(i => {
        text += `\n- ${i.qty}x ${i.title} - ${money(i.price * i.qty)}`;
    });
    text += `

 *Total:* ${money(total)}
 *Digite sua sala para entregar:* 
 *Observacoes:* 

 Aguardando confirmacao do pedido. Obrigado!`;

    openWhatsApp(text);
}


/* ===========================
   WhatsApp helper (mantido)
   =========================== */
function openWhatsApp(text){
    const url = `https://wa.me/${whatsNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

/* ===========================
   Promoções & Combos (mantido)
   =========================== */
function renderPromos(){
    const end = new Date(); end.setHours(23,59,59,999);
    startPromoTimer(end);
    const prods = getProducts();
    qs('promoName').innerText = 'Espeto + Refrigerante';
    qs('promoBadge')?.classList.remove('hidden');
    renderCombos();
}

function startPromoTimer(endDate){
    function update(){
        const now = new Date();
        let diff = Math.max(0, endDate - now);
        const h = String(Math.floor(diff/3600000)).padStart(2,'0');
        const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
        const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
        qs('promoTimer').innerText = `${h}:${m}:${s}`;
        if(diff<=0) clearInterval(timer);
    }
    update();
    const timer = setInterval(update,1000);
}

function addPromoToCart(){
    const combo = getCombos()[0];
    if(!combo) return alert('Nenhum combo');
    const id = combo.id;
    const cart = getCart();
    const existing = cart.find(i=>i.id===id);
    if(existing) existing.qty += 1; else cart.push({id:combo.id,title:combo.title,price:combo.price,qty:1});
    saveCart(cart);
    alert('Promocao adicionada ao carrinho');
}

function renderCombos(){
    const grid = qs('combosGrid'); grid.innerHTML = '';
    const combos = getCombos();
    combos.forEach(c=>{
        const card = document.createElement('div'); card.className='card';
        card.innerHTML = `<img src="${c.img}" alt="${c.title}"><div class="body"><h3>${c.title}</h3><p class="muted">${c.desc}</p><div style="display:flex;justify-content:space-between;align-items:center"><div class="price">${money(c.price)}</div><div><button class="btn" onclick="addCombo('${c.id}')">Adicionar</button></div></div></div>`;
        grid.appendChild(card);
    });
}

function addCombo(id){
    const c = getCombos().find(x=>x.id===id);
    if(!c) return;
    const cart = getCart();
    const existing = cart.find(i=>i.id===id);
    if(existing) existing.qty += 1; else cart.push({id:c.id,title:c.title,price:c.price,qty:1});
    saveCart(cart);
}

/* ===========================
   GALERIA (mantido)
   =========================== */
function renderGallery(){
    const imgs = JSON.parse(localStorage.getItem('gallery') || '[]');
    const container = qs('gallery'); container.innerHTML = '';
    imgs.forEach(src=>{
        const img = document.createElement('img'); img.src=src;
        img.onclick = ()=> openLightbox(src);
        container.appendChild(img);
    });
}
function openLightbox(src){
    const lb = document.createElement('div');
    lb.style.position='fixed'; lb.style.inset=0; lb.style.background='rgba(0,0,0,0.8)'; lb.style.display='flex'; lb.style.alignItems='center'; lb.style.justifyContent='center'; lb.style.zIndex=120;
    const img = document.createElement('img'); img.src=src; img.style.maxWidth='90%'; img.style.maxHeight='90%'; img.style.borderRadius='12px';
    lb.appendChild(img);
    lb.onclick = ()=> lb.remove();
    document.body.appendChild(lb);
}

/* ===========================
   Contato form (abre WhatsApp) (mantido)
   =========================== */
function sendContact(e){
    e.preventDefault();

    const name = qs('cName').value || 'Cliente';
    const phone = qs('cPhone').value || '';
    const msg = qs('cMsg').value || '';
    // Salva nome do cliente
    localStorage.setItem('clientName', name);

    const text = `Ola! Meu nome e *${name}*. Telefone: ${phone} Mensagem: ${msg}`;
    openWhatsApp(text);
}

/* ===========================
   QR Code PIX (gera via Google Chart API) (mantido)
   =========================== */
function generateQR(){
    const v = Number(qs('pixValue').value || 0);
    if(v<=0) return alert('Informe um valor valido');
    const pixPayload = `Copia e Cola PIX - Sip & Snack - Conveniencia - Valor R$${v.toFixed(2)}`;
    const url = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(pixPayload)}&chs=200x200&chld=L|1`;
    qs('qrcode').innerHTML = `<img src="${url}" alt="QR Code">`;
}

/* ===========================
   Admin (simples) (mantido)
   =========================== */
function openAdmin(){
    const panel = qs('adminPanel');
    // Esta função alterna entre 'none' e 'block' (esconde/mostra)
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function unlockAdmin(){
    const pass = qs('adminPass').value;

    if(pass === 'admin321'){
        isAdmin = true; // libera acesso
        alert('Acesso liberado!');
        openAdminModal();
    } else {
        alert('Senha incorreta');
    }
}

function openAdminModal(){
        if(!isAdmin){
            alert('Acesso negado! Faca login como admin.');
            return;
        }
    const modalRoot = document.createElement('div');
    modalRoot.style.position='fixed'; modalRoot.style.inset=0; modalRoot.style.background='rgba(0,0,0,0.45)'; modalRoot.style.display='flex'; modalRoot.style.alignItems='center'; modalRoot.style.justifyContent='center'; modalRoot.style.zIndex=200;
    const box = document.createElement('div'); box.style.background = getComputedStyle(document.body).getPropertyValue('--card'); box.style.padding='18px'; box.style.borderRadius='12px'; box.style.width='600px'; box.style.maxHeight='90vh'; box.style.overflow='auto';
    box.innerHTML = `<h3>Painel Admin - Adicionar Produto</h3>
        <label>Titulo</label><input id="adm_title" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-top:6px">
        <label>Tipo (Doces|bebida)</label><input id="adm_type" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-top:6px" value="espetinho">
        <label>Preco</label><input id="adm_price" type="number" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-top:6px">
        <label>Imagem URL</label><input id="adm_img" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-top:6px">
        <label>Descricao</label><textarea id="adm_desc" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;margin-top:6px"></textarea>
        <div style="display:flex;gap:8px;margin-top:8px"><button class="btn" id="admAdd">Adicionar</button><button class="btn secondary" id="admClose">Fechar</button></div>
        <hr><h4>Produtos Existentes</h4><div id="admList"></div>
    `;
    modalRoot.appendChild(box);
    document.body.appendChild(modalRoot);
    qs('admClose').onclick = ()=> modalRoot.remove();
    qs('admAdd').onclick = ()=> {
        const title = qs('adm_title').value.trim(); const type = qs('adm_type').value.trim(); const price = Number(qs('adm_price').value); const img = qs('adm_img').value.trim(); const desc = qs('adm_desc').value.trim();
        if(!title || !type || !price) return alert('Preencha titulo, tipo e preco');
        const prods = getProducts();
        const id = 'p' + Math.floor(Math.random()*100000);
        prods.push({id,title,type,price,img: img || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60',desc});
        localStorage.setItem('products', JSON.stringify(prods));
        alert('Produto adicionado');
        renderProducts(); renderDrinks(); renderQuickGrid();
        renderAdminList();
    }
    // list existing
    function renderAdminList(){
        const list = getProducts();
        qs('admList').innerHTML = '';
        list.forEach(p=>{
            const row = document.createElement('div'); row.style.display='flex'; row.style.justifyContent='space-between'; row.style.alignItems='center'; row.style.padding='6px 0';
            row.innerHTML = `<div><strong>${p.title}</strong> <span class="muted">(${p.type})</span><div class="muted">${money(p.price)}</div></div><div><button class="btn secondary" onclick="deleteProduct('${p.id}', this)">Remover</button></div>`;
            qs('admList').appendChild(row);
        });
    }
    renderAdminList();
}

/* delete product (exposed globally) */
function deleteProduct(id, el){
    if(!confirm('Remover produto?')) return;
    let prods = getProducts();
    prods = prods.filter(p=>p.id!==id);
    localStorage.setItem('products', JSON.stringify(prods));
    renderProducts(); renderDrinks(); renderQuickGrid();
    // refresh admin list if present
    const admList = document.getElementById('admList'); if(admList) admList.remove();
    alert('Removido');
}

/* ===========================
   Theme toggle (dark mode) (mantido)
   =========================== */
function toggleTheme(){
    const el = document.body;
    const cur = el.getAttribute('data-theme');
    el.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
}

/* ===========================
   Search input handler to re-render (mantido)
   =========================== */
qs('search').addEventListener('input', ()=>{
    renderProducts();
    renderDrinks();
    renderRefrigerantes();
});

/* ===========================
   Simple startup: show cardapio on load small screens (mantido)
   =========================== */
if(window.innerWidth < 880) showSection('cardapio'); else showSection('home');

/* Expose deleteProduct to window for admin buttons created in modal */
window.deleteProduct = deleteProduct;

/* Initialize promo badge display */
qs('promoBadge').classList.remove('hidden');


// Certifica que as funções openCart e closeCart estão globais, caso necessário.
window.openCart = openCart;
window.closeCart = closeCart;
