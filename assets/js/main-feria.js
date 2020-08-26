const index_categorias = document.getElementById('index_categorias');
const caja_slide = document.getElementById('slide-banner-feria');
const caja_subcategorias = document.getElementById('modal_subcategorias');
const caja_menu = document.getElementById('menu_feria');

document.addEventListener('DOMContentLoaded', ()=>{
    cargaMenu();
    //cargaSlide();
    cargaCategorias();
})

// MENU
function cargaMenu() {
    const fragment = document.createDocumentFragment();
    const nav = document.createElement('nav');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    const txt = document.createElement('span');
    const a = document.createElement('a');
    const i = document.createElement('i');
    nav.setAttribute('class', 'nav-menu d-none d-lg-block');
    h1.setAttribute('class', 'logo mr-auto');
    i.setAttribute('class', 'fas fa-store-alt');
    txt.setAttribute('style', 'color:black!important;');
    txt.textContent='Feria Tristán';
    a.setAttribute('href', 'index.html');
    span.setAttribute('style', 'font-size: 0.8rem;position:relative;top:14px;right:65px;');
    span.textContent='150 años';
    a.appendChild(i);
    a.appendChild(txt);
    a.appendChild(span);
    h1.appendChild(a);
    const ul1 = document.createElement('ul');
    menuArray.map(item=>{
        if (item.subs) {
            const li1 = document.createElement('li');
            const a1 = document.createElement('a');
            const ul2 = document.createElement('ul');
            if (item.iconClass) {
                const i = document.createElement('i');
                i.setAttribute('class', item.iconClass);
                i.setAttribute('style', 'font-size:1.3rem;');
                a1.appendChild(i);
            } else {
                a1.textContent=item.txt;
            }
            a1.setAttribute('href', item.href);
            li1.setAttribute('class', 'drop-down')
            li1.appendChild(a1);
            item.subs.map(item=>{
                const li2 = document.createElement('li');
                const a2 = document.createElement('a');
                const ul3 = document.createElement('ul');
                if (item.iconClass) {
                    const i = document.createElement('i');
                    const span = document.createElement('span');
                    i.setAttribute('class', item.iconClass);
                    span.innerHTML=`&nbsp;&nbsp;${item.txt}`;
                    a2.appendChild(i);
                    a2.appendChild(span);
                } else {
                    a2.textContent=item.txt;
                }
                a2.setAttribute('href', item.href);
                li2.appendChild(a2);
                if (item.subs) {
                    li2.setAttribute('class', 'drop-down');
                    item.subs.map(item => {
                        const li3 = document.createElement('li');
                        const a3 = document.createElement('a');
                        a3.textContent=item.txt;
                        a3.setAttribute('href', item.href);
                        li3.appendChild(a3);
                        ul3.appendChild(li3);
                    });
                }
                li2.appendChild(ul3);
                ul2.appendChild(li2);
            });
            li1.appendChild(ul2);
            ul1.appendChild(li1);
        } else {
            const li = document.createElement('li');
            if (item.txt === 'Inicio') li.classList.add('active');
            const a = document.createElement('a');
            a.textContent=item.txt;
            a.setAttribute('href', item.href);
            li.appendChild(a);
            ul1.appendChild(li);
        }
    });
    fragment.appendChild(h1);
    nav.appendChild(ul1);
    fragment.appendChild(nav);
    caja_menu.appendChild(fragment);
}

// SLIDE
function cargaSlide() {
    const fragment = document.createDocumentFragment();
    // HEADER
    const head_slide = document.createElement('ol');
    head_slide.setAttribute('class', 'carousel-indicators');
    slideArray.map((slide, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-target', '#slide-banner-feria');
        li.setAttribute('data-slide-to', `${index}`);
        if (slide.active) { li.setAttribute('class', 'active'); }
        head_slide.appendChild(li);
    });
    fragment.appendChild(head_slide);

    // FOOTER
    const prev = document.createElement('a');
        prev.classList.add('carousel-control-prev');
        prev.setAttribute('href', '#slide-banner-feria');
        prev.setAttribute('role', 'button');
        prev.setAttribute('data-slide', 'prev');
        const span_prev = document.createElement('span');
            span_prev.classList.add('carousel-control-prev-icon');
            span_prev.setAttribute('aria-hidden', 'true');
        const span_prev_txt = document.createElement('span');
            span_prev_txt.classList.add('sr-only');
            span_prev_txt.textContent='Anterior';
        prev.appendChild(span_prev);
        prev.appendChild(span_prev_txt);
    const next = document.createElement('a');
    next.classList.add('carousel-control-next');
        next.setAttribute('href', '#slide-banner-feria');
        next.setAttribute('role', 'button');
        next.setAttribute('data-slide', 'next');
        const span_next = document.createElement('span');
            span_next.classList.add('carousel-control-next-icon');
            span_next.setAttribute('aria-hidden', 'true');
        const span_next_txt = document.createElement('span');
            span_next_txt.classList.add('sr-only');
            span_next_txt.textContent='Siguiente';
        next.appendChild(span_next);
        next.appendChild(span_next_txt);

    // BODY
    const div1 = document.createElement('div');
    slideArray.map(slide=>{
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const link = document.createElement('a');

        link.setAttribute('href', slide.link);
        link.setAttribute('class', 'btn-get-started scrollto');
        link.textContent=slide.btnTxt;
        h2.textContent=slide.h2;
        h1.textContent=slide.h1;

        div4.setAttribute('class', 'col-xl-6 pb-5 d-lg-block d-sm-none d-xs-none');
        div4.appendChild(h1); div4.appendChild(h2); div4.appendChild(link);

        div3.setAttribute('class', 'carousel-caption text-left d-md-block pb-5');
        div3.appendChild(div4);

        img.setAttribute('class', 'd-block w-100');
        img.setAttribute('src', slide.src);

        div2.setAttribute('id', 'slide-caja');
        if (slide.active) { div2.setAttribute('class', 'carousel-item active'); }
        else { div2.setAttribute('class', 'carousel-item'); }

        div2.appendChild(img);
        div2.appendChild(div3);

        div1.setAttribute('class', 'carousel-inner');
        div1.appendChild(div2);
    });
    fragment.appendChild(div1);
    fragment.appendChild(prev);
    fragment.appendChild(next);
    caja_slide.appendChild(fragment);
};

// CATEGORÍAS
function cargaCategorias() {
    const fragment = document.createDocumentFragment();
    categoriasArray.map(cate=>{
        const div1 = document.createElement('div');
        const divBrillo = document.createElement('div');
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        const i = document.createElement('i');
        const p = document.createElement('p');
        const link = document.createElement('a');

        div1.classList.add('col-lg-3');
        div1.classList.add('col-md-6');
        div1.classList.add('col-sm-12');
        div1.classList.add('caja_categoria');
        
        img.setAttribute('src', cate.img);
        img.classList.add('img-fluid');
        img.classList.add('img_categoria');
        
        i.setAttribute('class', cate.icon);
        
        p.setAttribute('class', 'mb-0 mt-2');
        p.textContent=cate.txt;
        
        link.appendChild(i);
        link.setAttribute('data-toggle', 'modal');
        link.setAttribute('data-target', cate.data_target);
        link.setAttribute('href', '#');
        link.setAttribute('onclick', `modalSubcategorias('${cate.class}')`);
        link.appendChild(p);
        
        div2.classList.add(cate.class);
        div2.appendChild(link);
        
        divBrillo.setAttribute('id', 'brillo_categoria');

        div1.appendChild(divBrillo);
        div1.appendChild(div2);
        div1.appendChild(img);
        fragment.appendChild(div1);
    });
    const titulo = document.createElement('h1');
    titulo.textContent='Explorá los puestos';
    titulo.setAttribute('class', 'col-12 text-center py-5 titulo_seccion');
    index_categorias.appendChild(titulo);
    index_categorias.appendChild(fragment);
}

// SUBCATEGORÍAS
function modalSubcategorias(categoria) {
    if (categoria !== '') {
        caja_subcategorias.innerHTML='';
        const fragment = document.createDocumentFragment();
        // CONTENEDORES
        const div1 = document.createElement('div');
            div1.setAttribute('class','modal-dialog');
            div1.setAttribute('role', 'document');
            //div1.setAttribute('style', 'border:1px solid red;');
        const div2 = document.createElement('div');
            div2.classList.add('modal-content');
        // HEADER
        const div3 = document.createElement('div');
            div3.classList.add('modal-header');
            div3.setAttribute('style', 'background-image:url("assets/img/varios/header_modal.jpg");background-position:0px -55px; background-size:100%; color:white; text-shadow: 2px 2px 5px #222;')
        const h5 = document.createElement('h3');
            h5.setAttribute('class','modal-title text-center w-100 py-3');
            h5.setAttribute('id', 'exampleModalLabel');
            //h5.setAttribute('style', 'border:1px solid red;')
            
        const btnClose = document.createElement('button');
            btnClose.setAttribute('type', 'button');
            btnClose.setAttribute('class', 'close text-white');
            btnClose.setAttribute('data-dismiss', 'modal');
            btnClose.setAttribute('aria-label', 'close');
            btnClose.textContent='x';
        // BODY
        const div4 = document.createElement('div');
            div4.classList.add('modal-body');
            div4.setAttribute('style', 'overflow:scroll;');
            subcategoriasArray.map(sub => {
                if (sub.ref == categoria) {
                    h5.textContent=sub.titulo.toUpperCase();
                    sub.subs.map(sub => {
                        const h6 = document.createElement('h6');
                        h6.setAttribute('style', 'font-weight:600;');
                        const ul = document.createElement('ul');
                        ul.setAttribute('style', 'padding-left:15px;');
                        if(sub.titulo) {
                            h6.textContent=sub.titulo;
                            sub.subs.map(sub=>{
                                const li = document.createElement('li');
                                li.setAttribute('class', 'li_sub_1');
                                li.setAttribute('style', 'display:inline-block;margin-left:4px;');
                                const link = document.createElement('a');
                                link.setAttribute('href', '#');
                                link.textContent=sub;
                                li.appendChild(link);
                                ul.appendChild(li);
                            });
                            
                        } else {
                            const li = document.createElement('li');
                            li.setAttribute('class', 'li_sub_2');
                            const link = document.createElement('a');
                            link.setAttribute('href', '#');
                            link.textContent=sub;
                            li.appendChild(link);
                            ul.appendChild(li);
                        }
                        div4.appendChild(h6);
                        div4.appendChild(ul);
                    })
                }
            });

        div3.appendChild(h5);
        div3.appendChild(btnClose);
        div2.appendChild(div3);
        div2.appendChild(div4);
        div1.appendChild(div2);

        fragment.appendChild(div1);

        caja_subcategorias.appendChild(fragment);
    }
}

$(function(){
	$('.toggle').click(function(e){
		e.preventDefault();
		$(this).closest('.category').siblings().removeClass('active');
		$(this).closest('.category').toggleClass('active');
	});
});