'use strict';

/* ── Exercise type metadata ─────────────────────── */
const TYPES = {
  UE1: { name: 'Opción Múltiple',       color: '#0077b6', icon: '🔤', desc: 'Elige la opción correcta (A, B, C o D)' },
  UE2: { name: 'Rellena los Huecos',    color: '#2d6a4f', icon: '✏️',  desc: 'Escribe la palabra que falta' },
  UE3: { name: 'Formación de Palabras', color: '#6b2d8b', icon: '🔧', desc: 'Forma la palabra correcta' },
  UE4: { name: 'Transformación',        color: '#c05621', icon: '🔄', desc: 'Transforma la frase usando la palabra clave' },
  grammar: { name: 'Grammar',           color: '#4c1d95', icon: '📚', desc: 'Inversions, Passive Voice & Conditionals' },
  game: { name: 'Juego',                color: '#c53030', icon: '🎮', desc: '¡Practica de forma divertida y pon a prueba tus conocimientos!' },
  UE4_COND: { name: 'Conditionals',     color: '#dd6b20', icon: '🥞', desc: 'Ejercicios interactivos con condicionales' },
  UE4_INV: { name: 'Inversions',        color: '#319795', icon: '🔄', desc: 'Ejercicios interactivos con inversiones' },
  UE4_PAS: { name: 'Passive Voice',     color: '#3182ce', icon: '📢', desc: 'Ejercicios interactivos con voz pasiva' }
};

/* ── App state ──────────────────────────────────── */
let state = { type: null, exercise: null, answered: false, userAnswers: {} };

let gameState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false
};

/* ── Boot ───────────────────────────────────────── */
window.addEventListener('hashchange', route);
document.addEventListener('DOMContentLoaded', route);

function route() {
  const raw = location.hash.replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean);
  if (parts.length === 0) renderHome();
  else if (parts.length === 1) {
    if (parts[0] === 'grammar') renderGrammarMenu();
    else if (parts[0] === 'game') renderGameMenu();
    else renderList(parts[0]);
  }
  else if (parts.length === 2 && parts[0] === 'game') {
    if (parts[1] === 'phrasal') startGamePhrasal();
    else if (parts[1] === 'prepositions') startGamePrepositions();
  }
  else {
    renderExercisePage(parts[0], parts[1]);
  }
}

function navigate(path) { location.hash = path; }

/* ══════════════════════════════════════════════════
   HOME
══════════════════════════════════════════════════ */
function renderHome() {
  const mainKeys = ['UE1', 'UE2', 'UE3', 'UE4', 'grammar', 'game'];
  document.getElementById('app').innerHTML = `
    <div class="home">
      <div class="home-hero">
        <div class="logo">B2</div>
        <h1>Use of English</h1>
        <p>Cambridge B2 First Certificate</p>
      </div>
      <div class="type-grid">
        ${mainKeys.map(id => {
          const t = TYPES[id];
          return `
            <div class="type-card" style="--cc:${t.color}" onclick="navigate('/${id}')">
              <div class="type-icon">${t.icon}</div>
              <div class="type-badge" style="background:${t.color}">${id}</div>
              <div class="type-name">${t.name}</div>
              <div class="type-desc">${t.desc}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════════════
   GRAMMAR SUB-MENU
══════════════════════════════════════════════════ */
function renderGrammarMenu() {
  const app = document.getElementById('app');
  app.innerHTML = mkHeader('Grammar', '/');

  const subTypes = ['UE4_COND', 'UE4_INV', 'UE4_PAS'];
  const wrap = mkEl('div', 'list-wrap');
  wrap.innerHTML = `
    <div class="list-banner" style="background:#4c1d95">
      <span class="lb-icon">📚</span>
      <div>
        <div class="lb-type">GRAMMAR</div>
        <div class="lb-name">Gramática B2</div>
      </div>
    </div>
    <div class="type-grid" style="margin-top: 20px;">
      ${subTypes.map(id => {
        const t = TYPES[id];
        return `
          <div class="type-card" style="--cc:${t.color}" onclick="navigate('/${id}')">
            <div class="type-icon">${t.icon}</div>
            <div class="type-badge" style="background:${t.color}">${id}</div>
            <div class="type-name">${t.name}</div>
            <div class="type-desc">${t.desc}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  app.appendChild(wrap);
}

/* ══════════════════════════════════════════════════
   GAME MENU (WITH BOTH GAMES)
══════════════════════════════════════════════════ */
function renderGameMenu() {
  const app = document.getElementById('app');
  app.innerHTML = mkHeader('Juego', '/');

  const wrap = mkEl('div', 'list-wrap');
  wrap.innerHTML = `
    <div class="list-banner" style="background:#c53030">
      <span class="lb-icon">🎮</span>
      <div>
        <div class="lb-type">GAME</div>
        <div class="lb-name">Zona de Juegos</div>
      </div>
    </div>
    <div class="exlist" style="margin-top: 20px;">
      <div class="exitem" onclick="navigate('/game/phrasal')">
        <div class="exnum" style="background:#805ad5">📝</div>
        <div class="exinfo">
          <div class="extitle">Phrasal Verbs Game</div>
          <div class="exdesc">Elige la opción correcta para completar la frase con el Phrasal Verb adecuado. ¡10 frases aleatorias!</div>
        </div>
        <div class="exarrow">›</div>
      </div>
      <div class="exitem" onclick="navigate('/game/prepositions')" style="margin-top: 15px;">
        <div class="exnum" style="background:#319795">🔗</div>
        <div class="exinfo">
          <div class="extitle">Dependent Prepositions</div>
          <div class="exdesc">Domina las preposiciones obligatorias tras ciertos verbos, adjetivos y sustantivos. ¡10 frases aleatorias!</div>
        </div>
        <div class="exarrow">›</div>
      </div>
    </div>
  `;
  app.appendChild(wrap);
}

/* ══════════════════════════════════════════════════
   UNIFIED GAMES ENGINE
══════════════════════════════════════════════════ */
function startGamePhrasal() {
  const shuffled = [...PHRASAL_VERBS].sort(() => 0.5 - Math.random());
  gameState.type = 'phrasal';
  gameState.questions = shuffled.slice(0, 10);
  gameState.currentIndex = 0;
  gameState.score = 0;
  gameState.answered = false;

  renderGameQuestion();
}

function startGamePrepositions() {
  const shuffled = [...DEPENDENT_PREPOSITIONS].sort(() => 0.5 - Math.random());
  gameState.type = 'prepositions';
  gameState.questions = shuffled.slice(0, 10);
  gameState.currentIndex = 0;
  gameState.score = 0;
  gameState.answered = false;

  renderGameQuestion();
}

window.restartActiveGame = function() {
  if (gameState.type === 'phrasal') startGamePhrasal();
  else if (gameState.type === 'prepositions') startGamePrepositions();
};

function renderGameQuestion() {
  const app = document.getElementById('app');
  const q = gameState.questions[gameState.currentIndex];
  
  const titleText = gameState.type === 'phrasal' ? 'Phrasal Verbs Game' : 'Dependent Prepositions';
  app.innerHTML = mkHeader(titleText, '/game');

  const wrap = mkEl('div', 'ex-wrap');
  
  const styleId = 'game-styles';
  let styleTag = document.getElementById(styleId);
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleId;
    styleTag.textContent = `
      .game-box {
        background: var(--bg-card, #ffffff);
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        border: 1px solid rgba(0,0,0,0.08);
        margin-top: 10px;
      }
      .game-progress-bar {
        height: 8px;
        background: #e2e8f0;
        border-radius: 9999px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      .game-progress-fill {
        height: 100%;
        background: #805ad5;
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .game-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        color: #718096;
      }
      .game-sentence {
        font-size: 1.25rem;
        line-height: 1.6;
        font-weight: 500;
        color: var(--fg, #1a202c);
        margin-bottom: 30px;
        padding: 15px;
        background: rgba(128,90,213,0.05);
        border-left: 4px solid #805ad5;
        border-radius: 4px;
      }
      .game-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-bottom: 24px;
      }
      @media (max-width: 600px) {
        .game-grid { grid-template-columns: 1fr; }
      }
      .game-opt-card {
        background: var(--bg, #f7fafc);
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        padding: 18px;
        font-size: 1.1rem;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--fg, #2d3748);
      }
      .game-opt-card:hover:not(.disabled) {
        transform: translateY(-2px);
        border-color: #805ad5;
        box-shadow: 0 5px 15px rgba(128,90,213,0.1);
      }
      .game-opt-card.correct {
        background: #c6f6d5 !important;
        border-color: #38a169 !important;
        color: #22543d !important;
      }
      .game-opt-card.incorrect {
        background: #fed7d7 !important;
        border-color: #e53e3e !important;
        color: #742a2a !important;
      }
      .game-opt-card.disabled {
        cursor: not-allowed;
        opacity: 0.8;
      }
      .game-feedback {
        background: #edf2f7;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 24px;
        border-left: 4px solid #4a5568;
        animation: slideIn 0.3s ease-out;
      }
      .game-feedback-title {
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: 6px;
        color: #2d3748;
      }
      .game-feedback-desc {
        font-size: 1rem;
        line-height: 1.5;
        color: #4a5568;
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .game-next-btn {
        width: 100%;
        background: #805ad5;
        color: white;
        border: none;
        padding: 16px;
        border-radius: 12px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 6px rgba(128,90,213,0.2);
      }
      .game-next-btn:hover {
        background: #6b46c1;
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(128,90,213,0.3);
      }
    `;
    document.head.appendChild(styleTag);
  }

  const pct = Math.round((gameState.currentIndex / 10) * 100);
  const themeColor = gameState.type === 'phrasal' ? '#805ad5' : '#319795';
  const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());

  const gameBox = mkEl('div', 'game-box');
  gameBox.innerHTML = `
    <div class="game-progress-bar">
      <div class="game-progress-fill" style="width: ${pct}%; background: ${themeColor}"></div>
    </div>
    <div class="game-meta">
      <span>Pregunta ${gameState.currentIndex + 1} de 10</span>
      <span style="color: #38a169;">Aciertos: ${gameState.score}</span>
    </div>
    <div class="game-sentence">
      ${q.sentence.replace("________", `<span style='text-decoration: underline dashed ${themeColor} 2px; font-weight: bold; color: ${themeColor};'>________</span>`)}
    </div>
    <div class="game-grid" id="opt-grid">
      ${shuffledOptions.map(opt => `
        <button class="game-opt-card" onclick="selectGameOption('${opt}')" id="opt-${opt}">${opt}</button>
      `).join('')}
    </div>
    <div id="game-feedback-container"></div>
    <div id="game-btn-container"></div>
  `;

  wrap.appendChild(gameBox);
  app.appendChild(wrap);
}

window.selectGameOption = function(selected) {
  if (gameState.answered) return;
  gameState.answered = true;

  const q = gameState.questions[gameState.currentIndex];
  const isCorrect = selected === q.answer;
  const themeColor = gameState.type === 'phrasal' ? '#805ad5' : '#319795';

  if (isCorrect) {
    gameState.score++;
  }

  q.options.forEach(opt => {
    const el = document.getElementById(`opt-${opt}`);
    el.classList.add('disabled');
    if (opt === q.answer) {
      el.classList.add('correct');
    } else if (opt === selected && !isCorrect) {
      el.classList.add('incorrect');
    }
  });

  const feedbackContainer = document.getElementById('game-feedback-container');
  feedbackContainer.innerHTML = `
    <div class="game-feedback" style="border-left-color: ${isCorrect ? '#38a169' : '#e53e3e'}">
      <div class="game-feedback-title" style="color: ${isCorrect ? '#276749' : '#9b2c2c'}">
        ${isCorrect ? '¡Correcto! 🎉' : 'Incorrecto ❌'}
      </div>
      <div class="game-feedback-desc">
        <strong>Gramática y Significado:</strong> ${q.meaning}
      </div>
    </div>
  `;

  const btnContainer = document.getElementById('game-btn-container');
  const isLast = gameState.currentIndex === 9;
  const btn = mkEl('button', 'game-next-btn', isLast ? 'Ver resultados' : 'Siguiente pregunta');
  btn.style.background = themeColor;
  btn.style.boxShadow = `0 4px 6px ${themeColor}33`;
  btn.onclick = () => {
    if (isLast) {
      showGameScore();
    } else {
      gameState.currentIndex++;
      gameState.answered = false;
      renderGameQuestion();
    }
  };
  btnContainer.appendChild(btn);
};

function showGameScore() {
  const app = document.getElementById('app');
  app.innerHTML = mkHeader('Resultados', '/game');

  const wrap = mkEl('div', 'ex-wrap');
  
  const correct = gameState.score;
  const pct = Math.round((correct / 10) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪';
  const label = pct >= 80 ? '¡Excelente!' : pct >= 60 ? 'Bien hecho' : pct >= 40 ? 'Sigue practicando' : 'Necesitas repasar';
  const color = pct >= 60 ? '#38a169' : pct >= 40 ? '#d69e2e' : '#e53e3e';
  const themeColor = gameState.type === 'phrasal' ? '#805ad5' : '#319795';

  const scoreBox = mkEl('div', 'score-card');
  scoreBox.style.marginTop = '20px';
  scoreBox.innerHTML = `
    <div class="score-emoji">${emoji}</div>
    <div class="score-num">${correct} / 10</div>
    <div class="score-pct">${pct}%</div>
    <div class="score-label">${label}</div>
    <div class="score-bar" style="margin-bottom: 30px;">
      <div class="score-fill" style="width:${pct}%;background:${color}"></div>
    </div>
    <button class="submit-btn" onclick="restartActiveGame()" style="margin-bottom: 12px; background: ${themeColor}; border: none; font-size: 1.1rem; color: white;">Volver a jugar</button>
    <button class="submit-btn retry" onclick="navigate('/game')" style="background: #e2e8f0; color: #4a5568; border: none; font-size: 1.1rem;">Salir al menú</button>
  `;

  wrap.appendChild(scoreBox);
  app.appendChild(wrap);
}

/* ══════════════════════════════════════════════════
   EXERCISE LIST
══════════════════════════════════════════════════ */
function renderList(type) {
  if (!TYPES[type]) { navigate('/'); return; }
  const t = TYPES[type];
  const app = document.getElementById('app');
  
  const isGrammarSub = ['UE4_COND', 'UE4_INV', 'UE4_PAS'].includes(type);
  const backPath = isGrammarSub ? '/grammar' : '/';
  app.innerHTML = mkHeader(t.name, backPath);

  const list = EXERCISES[type] || [];

  const wrap = mkEl('div', 'list-wrap');
  wrap.innerHTML = `
    <div class="list-banner" style="background:${t.color}">
      <span class="lb-icon">${t.icon}</span>
      <div>
        <div class="lb-type">${type}</div>
        <div class="lb-name">${t.name}</div>
      </div>
    </div>
    <div class="exlist">
      ${list.map((ex, i) => `
        <div class="exitem" onclick="navigate('/${type}/${ex.id}')">
          <div class="exnum" style="background:${t.color}">${i + 1}</div>
          <div class="exinfo">
            <div class="extitle">${ex.title}</div>
            ${ex.description ? `<div class="exdesc">${ex.description}</div>` : ''}
          </div>
          <div class="exarrow">›</div>
        </div>
      `).join('')}
    </div>
  `;
  app.appendChild(wrap);
}

/* ══════════════════════════════════════════════════
   EXERCISE PAGE
══════════════════════════════════════════════════ */
function renderExercisePage(type, id) {
  if (!TYPES[type]) { navigate('/'); return; }
  state = { type, exercise: null, answered: false, userAnswers: {} };

  const exercise = (EXERCISES[type] || []).find(e => e.id === id);
  const app = document.getElementById('app');

  if (!exercise) {
    app.innerHTML = mkHeader('Error', `/${type}`);
    app.appendChild(mkEl('div', 'error-msg', 'Ejercicio no encontrado.'));
    return;
  }

  state.exercise = exercise;
  
  const isGrammarSub = ['UE4_COND', 'UE4_INV', 'UE4_PAS'].includes(type);
  const backPath = isGrammarSub ? `/grammar` : `/${type}`;
  app.innerHTML = mkHeader(exercise.title || id, backPath);

  const wrap = mkEl('div', 'ex-wrap');
  wrap.innerHTML = `<div class="inst-box"><strong>Instrucciones:</strong> ${exercise.instructions}</div>`;

  const content = mkEl('div', 'ex-content');
  if      (type === 'UE1') renderMC(content,  exercise);
  else if (type === 'UE2') renderOC(content,  exercise);
  else if (type === 'UE3') renderWF(content,  exercise);
  else if (type === 'UE4' || type === 'UE4_COND' || type === 'UE4_INV' || type === 'UE4_PAS') renderKWT(content, exercise);
  wrap.appendChild(content);

  const btn = mkEl('button', 'submit-btn', 'Comprobar respuestas');
  btn.id = 'submit-btn';
  btn.onclick = doValidate;
  wrap.appendChild(btn);

  const results = mkEl('div', '', '');
  results.id = 'results';
  wrap.appendChild(results);

  app.appendChild(wrap);
}

/* ══════════════════════════════════════════════════
   EXERCISE RENDERERS
══════════════════════════════════════════════════ */

/* UE1 – Multiple Choice Cloze */
function renderMC(container, ex) {
  const textHtml = ex.text.replace(/\{\{(\d+)\}\}/g,
    (_, n) => `<span class="gapbadge">${n}</span>`
  );
  container.innerHTML = `
    <div class="reading-text">${textHtml}</div>
    <div class="mc-qs">
      ${ex.questions.map(q => `
        <div class="mc-q" id="q${q.number}">
          <div class="qnum">${q.number}</div>
          <div class="q-opts">
            ${Object.entries(q.options).map(([l, w]) => `
              <label class="opt" onclick="setAns('${q.number}','${l}')">
                <input type="radio" name="g${q.number}" value="${l}">
                <span class="opt-l">${l}</span>
                <span class="opt-w">${w}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* UE2 – Open Cloze */
function renderOC(container, ex) {
  const textHtml = ex.text.replace(/\{\{(\d+)\}\}/g,
    (_, n) => `<input class="gap-inp" type="text" data-gap="${n}" placeholder="${n}" oninput="setAns('${n}',this.value)">`
  );
  container.innerHTML = `<div class="reading-text oc-text">${textHtml}</div>`;
}

/* UE3 – Word Formation */
function renderWF(container, ex) {
  container.innerHTML = `
    <div class="wf-lines">
      ${ex.lines.map(line => {
        const lhtml = line.text.replace(/\{\{(\d+)\}\}/g,
          (_, n) => `<input class="gap-inp" type="text" data-gap="${n}" placeholder="____" oninput="setAns('${n}',this.value)">`
        );
        return `
          <div class="wf-line" id="q${line.number}">
            <span class="wfnum">${line.number}</span>
            <div class="wf-body">${lhtml}</div>
            <div class="wf-base">${line.base_word}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* UE4 – Key Word Transformation */
function renderKWT(container, ex) {
  container.innerHTML = `
    <div class="kwt-qs">
      ${ex.questions.map(q => `
        <div class="kwt-q" id="q${q.number}">
          <div class="kwt-num">${q.number}</div>
          <div class="kwt-body">
            <div class="kwt-s1">${q.sentence1}</div>
            <div class="kwt-kw">
              <span class="kw-lbl">PALABRA CLAVE:</span>
              <span class="kw-word">${q.key_word}</span>
            </div>
            <div class="kwt-s2">
              <span>${q.sentence2_start}&nbsp;</span><input class="kwt-inp" type="text" data-gap="${q.number}" placeholder="…" oninput="setAns('${q.number}',this.value)"><span>&nbsp;${q.sentence2_end}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* ══════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════ */
function setAns(gap, value) {
  state.userAnswers[String(gap)] = value.trim();
}

/* ══════════════════════════════════════════════════
   VALIDATION
══════════════════════════════════════════════════ */
function doValidate() {
  if (state.answered) { resetEx(); return; }
  state.answered = true;

  const { exercise: ex, type } = state;
  let correct = 0, total = 0;

  if (type === 'UE1') {
    ex.questions.forEach(q => {
      total++;
      const user = (state.userAnswers[String(q.number)] || '').toUpperCase();
      const ok = user === q.answer.toUpperCase();
      if (ok) correct++;
      markBlock(`q${q.number}`, ok, `${q.answer}) ${q.options[q.answer]}`);
      document.querySelectorAll(`input[name="g${q.number}"]`)
        .forEach(r => r.disabled = true);
    });

  } else if (type === 'UE2') {
    Object.entries(ex.answers).forEach(([num, ans]) => {
      total++;
      const user = norm(state.userAnswers[num] || '');
      const accepted = toArr(ans).map(norm);
      const ok = accepted.includes(user);
      if (ok) correct++;
      markInlineInput(num, ok, toArr(ans)[0]);
    });

  } else if (type === 'UE3') {
    ex.lines.forEach(line => {
      total++;
      const user = norm(state.userAnswers[String(line.number)] || '');
      const accepted = toArr(line.answer).map(norm);
      const ok = accepted.includes(user);
      if (ok) correct++;
      markInlineInput(line.number, ok, toArr(line.answer)[0]);
    });

  } else if (type === 'UE4' || type === 'UE4_COND' || type === 'UE4_INV' || type === 'UE4_PAS') {
    ex.questions.forEach(q => {
      total++;
      const user = norm(state.userAnswers[String(q.number)] || '');
      const accepted = toArr(q.answer).map(norm);
      const ok = accepted.includes(user);
      if (ok) correct++;
      markKWTItem(q.number, ok, toArr(q.answer)[0]);
    });
  }

  showScore(correct, total);

  const btn = document.getElementById('submit-btn');
  if (btn) { btn.textContent = 'Reintentar'; btn.classList.add('retry'); }
}

function norm(s) {
  return s.toLowerCase().trim().replace(/\s+/g, ' ');
}

function toArr(v) { return Array.isArray(v) ? v : [v]; }

function markBlock(id, ok, correctText) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add(ok ? 'ok' : 'nok');
  if (!ok) {
    const h = mkEl('div', 'hint', `✓ Respuesta: ${correctText}`);
    el.appendChild(h);
  }
}

function markInlineInput(gap, ok, correctText) {
  const inp = document.querySelector(`[data-gap="${gap}"]`);
  if (!inp) return;
  inp.disabled = true;
  inp.classList.add(ok ? 'inp-ok' : 'inp-nok');
  if (!ok) {
    const h = mkEl('span', 'hint-inline', ` → ${correctText}`);
    inp.insertAdjacentElement('afterend', h);
  }
}

function markKWTItem(num, ok, correctText) {
  const qEl = document.getElementById(`q${num}`);
  if (qEl) qEl.classList.add(ok ? 'ok' : 'nok');
  const inp = document.querySelector(`.kwt-inp[data-gap="${num}"]`);
  if (inp) { inp.disabled = true; inp.classList.add(ok ? 'inp-ok' : 'inp-nok'); }
  if (!ok && qEl) {
    const h = mkEl('div', 'hint', `✓ Respuesta: "${correctText}"`);
    qEl.querySelector('.kwt-body').appendChild(h);
  }
}

function showScore(correct, total) {
  const pct = Math.round((correct / total) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪';
  const label = pct >= 80 ? '¡Excelente!' : pct >= 60 ? 'Bien hecho' : pct >= 40 ? 'Sigue practicando' : 'Necesitas repasar';
  const color = pct >= 60 ? '#38a169' : pct >= 40 ? '#d69e2e' : '#e53e3e';
  document.getElementById('results').innerHTML = `
    <div class="score-card">
      <div class="score-emoji">${emoji}</div>
      <div class="score-num">${correct} / ${total}</div>
      <div class="score-pct">${pct}%</div>
      <div class="score-label">${label}</div>
      <div class="score-bar">
        <div class="score-fill" style="width:${pct}%;background:${color}"></div>
      </div>
    </div>
  `;
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetEx() {
  const h = location.hash;
  history.replaceState(null, '', '#/');
  setTimeout(() => { location.hash = h; }, 50);
}

/* ── UTILITIES ──────────────────────────────────── */
function mkHeader(title, back) {
  return `
    <div class="hdr">
      <button class="back-btn" onclick="navigate('${back}')">←</button>
      <span class="hdr-title">${title}</span>
    </div>
  `;
}

function mkEl(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)  e.className   = cls;
  if (text) e.textContent = text;
  return e;
}
