const search = document.querySelector('#search');
const cards = [...document.querySelectorAll('.guide-card')];
const empty = document.querySelector('#empty');
const normalize = value => value.toLocaleLowerCase('ru').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ё/g, 'е').trim();
if (search) {
  const filterCards = () => {
    const query = normalize(search.value);
    let visible = 0;
    cards.forEach(card => {
      const text = normalize(card.textContent + ' ' + [...card.querySelectorAll('img')].map(img => img.alt).join(' '));
      const matches = !query || query.split(/\s+/).every(word => text.includes(word));
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (empty) empty.hidden = visible > 0;
  };
  search.addEventListener('input', filterCards);
  search.addEventListener('search', filterCards);
  filterCards();
}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('nav');if(toggle&&nav)toggle.addEventListener('click',()=>nav.classList.toggle('open'));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));


