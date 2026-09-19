(function(){
  'use strict';
  var cfg = window.SALIZRA || {};

  function esc(v){return String(v||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c];});}
  function icon(type){
    if(type==='phone') return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.45 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.25a2 2 0 0 1 2.1-.45c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z"/></svg>';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>';
  }

  function fillConfig(){
    document.querySelectorAll('[data-site-founded]').forEach(function(e){e.textContent=cfg.founded||''});
    document.querySelectorAll('[data-site-registration]').forEach(function(e){e.textContent=cfg.registration||''});
    document.querySelectorAll('[data-site-address]').forEach(function(e){e.textContent=cfg.address||''});
    document.querySelectorAll('[data-site-email]').forEach(function(e){
      e.textContent=cfg.email||''; if(cfg.email) e.href='mailto:'+cfg.email;
    });
    document.querySelectorAll('[data-site-phone]').forEach(function(e){var p=cfg.phones&&cfg.phones[Number(e.dataset.sitePhone||0)]||''; e.textContent=p; if(p)e.href='tel:'+p.replace(/\D/g,'')});
    document.querySelectorAll('[data-site-whatsapp]').forEach(function(e){if(cfg.whatsapp)e.href='https://wa.me/'+cfg.whatsapp+'?text=Hi%20Salizra%20Homes%2C%20I%27d%20like%20to%20ask%20about%20a%20project.'});
  }

  function setupHero(){
    var current=document.querySelector('.home-hero-bg.current'), next=document.querySelector('.home-hero-bg.next');
    if(!current||!next)return;
    var images=[
      'images/projects/Structural_Frame_Work_Durumi_Abuja.webp',
      'images/projects/LifeCamp_3D_Concept_Design.webp',
      'images/projects/Duplex_Render_Lokoja_Kogi.webp',
      'images/projects/AbujaKaduna_Road_Construction_2.webp',
      'images/projects/SteelPortalFrame_BestDivinePlastics_Karu_1.webp'
    ];
    var i=0; var active=current, inactive=next;
    images.forEach(function(src){var im=new Image();im.src=src;});
    current.style.backgroundImage="url('"+images[0]+"')";
    setInterval(function(){
      i=(i+1)%images.length; inactive.style.backgroundImage="url('"+images[i]+"')"; inactive.classList.remove('next'); active.classList.add('next');
      var old=active; active=inactive; inactive=old;
    },6500);
  }

  function setupReveals(){
    var els=document.querySelectorAll('.reveal');
    if(!els.length)return;
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
    var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  }

  function setupYear(){var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();}

  function setupTeam(){
    var cards=document.querySelectorAll('.team-card-premium'); if(!cards.length)return;
    cards.forEach(function(card){
      function toggle(){
        var touch = window.matchMedia && window.matchMedia('(hover: none)').matches;
        if(touch) cards.forEach(function(c){if(c!==card)c.classList.remove('is-active')});
        card.classList.toggle('is-active');
      }
      card.addEventListener('click',function(e){
        if(e.target.closest('.team-contact'))return;
        toggle();
      });
      card.addEventListener('keydown',function(e){
        if((e.key==='Enter'||e.key===' ') && !e.target.closest('.team-contact')){e.preventDefault();toggle();}
      });
    });
  }

  function setupProjects(){
    var cards=[].slice.call(document.querySelectorAll('.project-card-premium')); var filters=document.querySelectorAll('.project-filter');
    if(filters.length){filters.forEach(function(f){f.addEventListener('click',function(){filters.forEach(function(x){x.classList.remove('active')});f.classList.add('active');var val=f.dataset.filter;cards.forEach(function(c){c.style.display=(val==='all'||c.dataset.category===val)?'':'none'})})})}
  }

  function setupModals(){
    var root=document.getElementById('spModal'); if(!root)return;
    var media=root.querySelector('.sp-modal-media'), title=root.querySelector('.sp-modal-title'), eyebrow=root.querySelector('.sp-modal-eyebrow'), copy=root.querySelector('.sp-modal-copy-text'), link=root.querySelector('.sp-modal-open');
    function close(){root.classList.remove('open');document.body.style.overflow='';}
    root.querySelectorAll('[data-modal-close]').forEach(function(b){b.addEventListener('click',close)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&root.classList.contains('open'))close()});
    document.querySelectorAll('[data-cert]').forEach(function(btn){btn.addEventListener('click',function(){var d=JSON.parse(btn.getAttribute('data-cert'));media.innerHTML='<img src="'+d.image+'" alt="'+esc(d.title)+'">';eyebrow.textContent=d.issuer;title.textContent=d.title;copy.textContent=d.description||'Document on file. Contact Salizra Homes for the latest verification status where required.';link.href=d.image;link.setAttribute('download','');link.textContent='Open image';root.classList.add('open');document.body.style.overflow='hidden';})});
    document.querySelectorAll('[data-project]').forEach(function(btn){btn.addEventListener('click',function(){var d=JSON.parse(btn.getAttribute('data-project'));media.innerHTML='<img src="'+d.image+'" alt="'+esc(d.title)+'">';eyebrow.textContent=d.category;title.textContent=d.title;copy.textContent=d.description||'';link.href=d.image;link.removeAttribute('download');link.target='_blank';link.textContent='Open full image';root.classList.add('open');document.body.style.overflow='hidden';})});
  }

  function setupMailForm(){
    var form=document.querySelector('[data-mail-form]');if(!form)return;
    form.addEventListener('submit',function(e){e.preventDefault();var data=new FormData(form);var subject=encodeURIComponent('Project enquiry — '+(data.get('name')||'Website visitor'));var body=encodeURIComponent('Name: '+(data.get('name')||'')+'\nPhone: '+(data.get('phone')||'')+'\nEmail: '+(data.get('email')||'')+'\nLocation: '+(data.get('location')||'')+'\n\nProject details:\n'+(data.get('message')||''));window.location.href='mailto:'+cfg.email+'?subject='+subject+'&body='+body;});
  }

  document.addEventListener('DOMContentLoaded',function(){fillConfig();setupHero();setupReveals();setupYear();setupTeam();setupProjects();setupModals();setupMailForm();});
})();
