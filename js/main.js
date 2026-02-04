(function(){
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Active link highlight on scroll (simple)
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const links = Array.from(document.querySelectorAll('.navlinks a'));
  function onScroll(){
    const y = window.scrollY + 110;
    let current = sections[0]?.id;
    for(const s of sections){
      if(s.offsetTop <= y) current = s.id;
    }
    links.forEach(a=>{
      const href = a.getAttribute('href') || '';
      if(href === '#' + current){ a.style.background = 'rgba(231,235,255,.06)'; a.style.color = 'var(--text)'; }
      else { a.style.background = 'transparent'; a.style.color = 'var(--muted)'; }
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
