// Ariadne — Editor di Revisione in loco (Opzione 1)
(function(){
'use strict';
const STORAGE_KEY = 'ariadne_revisioni_' + location.pathname.split('/').pop();
const USER_KEY = 'ariadne_revisore_nome';
let editMode = false;
let revisioni = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let revisore = localStorage.getItem(USER_KEY) || '';

// Seleziona elementi di testo editabili (escludo form inputs, bottoni-azione, elementi strutturali)
function getEditableElements(){
  const selectors = 'h1,h2,h3,h4,h5,h6,p,li,summary,blockquote,cite,span.label-cubotto,.badge,.price-note,.price-tag,.eb-note,.teaser-link';
  return Array.from(document.querySelectorAll(selectors)).filter(el => {
    if(el.closest('#revisione-bar, #revisione-panel, footer .footer-bottom')) return false;
    if(el.querySelector('h1,h2,h3,h4,h5,h6,p,li')) return false; // niente container
    if(!el.textContent.trim()) return false;
    return true;
  });
}

// Assegna ID univoco basato su posizione gerarchica
function assignIds(){
  const els = getEditableElements();
  els.forEach((el, i) => {
    const section = el.closest('section');
    const sectionId = section ? (section.className.split(' ')[0] || 'sec') : 'body';
    const tag = el.tagName.toLowerCase();
    el.dataset.revId = `${sectionId}-${tag}-${i}`;
    if(revisioni[el.dataset.revId]){
      el.dataset.revOriginal = el.innerHTML;
      if(revisioni[el.dataset.revId].new){
        el.innerHTML = revisioni[el.dataset.revId].new;
        el.classList.add('rev-modified');
      }
      if(revisioni[el.dataset.revId].commento){
        el.classList.add('rev-commented');
      }
    } else {
      el.dataset.revOriginal = el.innerHTML;
    }
  });
}

function toggleEditMode(){
  editMode = !editMode;
  document.body.classList.toggle('rev-edit-mode', editMode);
  getEditableElements().forEach(el => {
    el.contentEditable = editMode ? 'true' : 'false';
    if(editMode){
      el.addEventListener('blur', handleEdit);
      el.addEventListener('dblclick', handleComment);
    } else {
      el.removeEventListener('blur', handleEdit);
      el.removeEventListener('dblclick', handleComment);
    }
  });
  updateCounter();
  document.getElementById('rev-toggle').textContent = editMode ? '✕ Esci da revisione' : '✎ Modifica testi';
}

function handleEdit(e){
  const el = e.target;
  const id = el.dataset.revId;
  const nuovo = el.innerHTML.trim();
  const originale = el.dataset.revOriginal;
  if(nuovo !== originale){
    revisioni[id] = revisioni[id] || {};
    revisioni[id].original = originale;
    revisioni[id].new = nuovo;
    revisioni[id].timestamp = new Date().toISOString();
    revisioni[id].revisore = revisore;
    el.classList.add('rev-modified');
  } else if(revisioni[id] && !revisioni[id].commento){
    delete revisioni[id];
    el.classList.remove('rev-modified');
  }
  saveRevisioni();
}

function handleComment(e){
  e.preventDefault();
  const el = e.currentTarget;
  const id = el.dataset.revId;
  const esistente = (revisioni[id] && revisioni[id].commento) || '';
  const commento = prompt('Lascia un commento su questo testo (vuoto per rimuovere):', esistente);
  if(commento === null) return;
  revisioni[id] = revisioni[id] || {};
  revisioni[id].original = el.dataset.revOriginal;
  revisioni[id].revisore = revisore;
  revisioni[id].timestamp = new Date().toISOString();
  if(commento.trim()){
    revisioni[id].commento = commento.trim();
    el.classList.add('rev-commented');
  } else {
    delete revisioni[id].commento;
    el.classList.remove('rev-commented');
    if(!revisioni[id].new) delete revisioni[id];
  }
  saveRevisioni();
}

function saveRevisioni(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(revisioni));
  updateCounter();
}

function updateCounter(){
  const count = Object.keys(revisioni).length;
  const counter = document.getElementById('rev-counter');
  if(counter) counter.textContent = count > 0 ? `${count} ${count === 1 ? 'revisione' : 'revisioni'}` : 'nessuna modifica';
}

function esportaRevisioni(){
  if(!revisore){
    const nome = prompt('Il tuo nome (per identificare le revisioni):');
    if(!nome) return;
    revisore = nome.trim();
    localStorage.setItem(USER_KEY, revisore);
  }
  // Aggiorno il nome del revisore in tutte le revisioni
  Object.keys(revisioni).forEach(k => { revisioni[k].revisore = revisioni[k].revisore || revisore; });
  const dati = {
    pagina: location.pathname.split('/').pop(),
    revisore: revisore,
    data_export: new Date().toISOString(),
    totale_revisioni: Object.keys(revisioni).length,
    revisioni: revisioni
  };
  const blob = new Blob([JSON.stringify(dati, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const data = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `revisioni-${dati.pagina.replace('.html','')}-${data}-${revisore.toLowerCase().replace(/\s+/g,'-')}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function resetRevisioni(){
  if(!confirm('Cancellare tutte le revisioni di questa pagina? Non si può annullare.')) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// Costruisco la barra di revisione
function buildRevBar(){
  const bar = document.createElement('div');
  bar.id = 'revisione-bar';
  bar.innerHTML = `
    <button id="rev-toggle" class="rev-btn rev-btn-primary">✎ Modifica testi</button>
    <span id="rev-counter" class="rev-counter">nessuna modifica</span>
    <button id="rev-export" class="rev-btn" title="Esporta file JSON delle revisioni">⬇ Esporta</button>
    <button id="rev-reset" class="rev-btn rev-btn-ghost" title="Cancella tutte le revisioni di questa pagina">↺</button>
    <button id="rev-help" class="rev-btn rev-btn-ghost" title="Aiuto">?</button>
  `;
  document.body.appendChild(bar);
  document.getElementById('rev-toggle').addEventListener('click', toggleEditMode);
  document.getElementById('rev-export').addEventListener('click', esportaRevisioni);
  document.getElementById('rev-reset').addEventListener('click', resetRevisioni);
  document.getElementById('rev-help').addEventListener('click', showHelp);
}

function showHelp(){
  alert([
    'MODALITÀ REVISIONE — come funziona:',
    '',
    '✎ Modifica testi — attiva/disattiva la modalità',
    '   Quando è attiva: clicca su qualsiasi testo per modificarlo direttamente.',
    '   Doppio clic su un testo = lascia un commento senza modificarlo.',
    '',
    'I testi modificati appaiono con bordo arancio, quelli commentati con bordo blu.',
    '',
    'Le revisioni si salvano automaticamente nel browser.',
    '',
    '⬇ Esporta — scarica un file JSON con tutte le revisioni, da inviare al team.',
    '',
    '↺ Cancella tutto — rimuove le revisioni di questa pagina (irreversibile).',
    '',
    'Le modifiche sono locali al tuo browser finché non esporti il file JSON.'
  ].join('\n'));
}

// Init
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
function init(){
  assignIds();
  buildRevBar();
}
})();
