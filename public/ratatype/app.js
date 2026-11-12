/* ============================================================
   RATATYPE — логика
   ============================================================ */

const DATA = {
  ru: {
    words: "и в не на я быть он с что а по это она этот к но они мы как из у который то за свой что весь год от так о для ты же все тот мочь вы человек такой его сказать только или еще бы себя один как уже до время если сам когда другой вот говорить наш мой знать стать при чтобы дело жизнь кто первый очень два день ее новый рука даже во со раз где там под можно ним глаз чем без".split(" "),
    quotes: [
      "Терпение и труд всё перетрут.",
      "Слепая печать - это не талант, а привычка, которую можно выработать за месяц регулярных занятий.",
      "Не бойтесь ошибок: каждая опечатка учит ваши пальцы точности больше, чем сто правильных нажатий.",
      "Скорость приходит сама, если сначала научиться печатать без ошибок.",
      "Двадцать минут в день дают больше, чем три часа раз в неделю."
    ],
    code: [
      "const sum = (a, b) => a + b;",
      "function greet(name) { return `Hello, ${name}!`; }",
      "for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }",
      "if (user.isAdmin && !user.isBanned) { grantAccess(); }",
      "const [first, ...rest] = items;",
      "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }",
      "const obj = { a: 1, b: 2, c: 3 };",
      "const arr = [1, 2, 3, 4, 5];",
      "const squared = arr.map(x => x * x);",
      "const filtered = arr.filter(x => x % 2 === 0);",
      "const sum = arr.reduce((acc, val) => acc + val, 0);",
      "function debounce(func, wait) { let timeout; return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), wait); }; }",
      "def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)",
      "class Person: def __init__(self, name): self.name = name",
      "try: x = 1 / 0 except ZeroDivisionError: print('Cannot divide by zero')",
      "import math; print(math.sqrt(16))",
      "with open('file.txt', 'r') as f: data = f.read()",
      "let promise = new Promise((resolve, reject) => { if (success) resolve('Done'); else reject('Error'); });",
      "async function fetchData() { const response = await fetch('https://api.example.com/data'); return response.json(); }",
      "void main() { printf('Hello, World!'); return 0; }",
      "SELECT * FROM users WHERE age > 18 ORDER BY name ASC;",
      "INSERT INTO products (name, price) VALUES ('Widget', 19.99);",
      "UPDATE orders SET status = 'shipped' WHERE id = 123;",
      "DELETE FROM sessions WHERE last_active < NOW() - INTERVAL '30 days';",
      "const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello World!')); app.listen(3000);",
      "async function main() { try { const data = await fetchData(); console.log(data); } catch (error) { console.error(error); } }",
      "function* generator() { yield 1; yield 2; yield 3; }"
    ],
    numbers: "1234567890 -=[];',./!@#$%^&*()_+{}:\"<>?"
  },
  en: {
    words: "the be to of and a in that have I it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us".split(" "),
    quotes: [
      "The quick brown fox jumps over the lazy dog.",
      "Practice makes perfect, but only if the practice is deliberate and consistent.",
      "Touch typing is a skill that pays dividends for the rest of your life.",
      "Do not look at your hands. Trust your fingers.",
      "Speed is a byproduct of accuracy, never the other way around."
    ],
    code: [
      "const sum = (a, b) => a + b;",
      "function greet(name) { return `Hello, ${name}!`; }",
      "for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }",
      "if (user.isAdmin && !user.isBanned) { grantAccess(); }",
      "const [first, ...rest] = items;"
    ],
    numbers: "1234567890 -=[];',./!@#$%^&*()_+{}:\"<>?"
  }
};

const ALL_TEXTS = {
  ru: [].concat(
    typeof TEXTS_RU !== "undefined" ? TEXTS_RU : [],
    typeof TEXTS_RU_2 !== "undefined" ? TEXTS_RU_2 : [],
    typeof TEXTS_RU_3 !== "undefined" ? TEXTS_RU_3 : [],
    typeof TEXTS_RU_4 !== "undefined" ? TEXTS_RU_4 : [],
    typeof TEXTS_RU_5 !== "undefined" ? TEXTS_RU_5 : []
  ),
  en: [].concat(
    typeof TEXTS_EN !== "undefined" ? TEXTS_EN : [],
    typeof TEXTS_EN_2 !== "undefined" ? TEXTS_EN_2 : [],
    typeof TEXTS_EN_3 !== "undefined" ? TEXTS_EN_3 : []
  )
};

const LESSONS = [
  { id: 1, title: "ФЫВА - ОЛДЖ", desc: "Домашний ряд: указательные и средние пальцы", text: "фыв олдж фыва олдж авыд лорд фыва олдж дало выдох ждал фора" },
  { id: 2, title: "Домашний ряд полностью", desc: "Все восемь клавиш под пальцами", text: "фывапролдж фывапролдж жало выдох проход фланг дрова продажа" },
  { id: 3, title: "Верхний ряд", desc: "Тянись вверх, не отрывая кисти", text: "йцукенгшщз йцукенгшщз йод цука щенок гений шуз йог шум цуг" },
  { id: 4, title: "Нижний ряд", desc: "Самый капризный ряд - но и самый нужный", text: "ячсмитьбю ячсмитьбю яма число митинг брюк мяч тесть сям" },
  { id: 5, title: "Все ряды вместе", desc: "Соединяем три ряда в связные слова", text: "печать клавиатура тренажёр скорость точность пальцы экран" },
  { id: 6, title: "Цифры и символы", desc: "Верхний цифровой ряд и знаки", text: "1234567890 1234567890 (1) [2] {3} 4+5=9 6-2=4 7*8 9/3" },
  { id: 7, title: "Английский домашний ряд", desc: "asdf jkl; - база английской раскладки", text: "asdf jkl; asdf jkl; fall salad flask glass kadds jaks" },
  { id: 8, title: "Английские слова", desc: "Простые английские слова целиком", text: "the and you for that with have this from they will one all would there" },
  { id: 9, title: "Пунктуация", desc: "Запятые, точки и прочие знаки", text: "Привет, мир! Как дела? Всё хорошо; спасибо. Точка - это пауза" },
  { id: 10, title: "Смешанный вызов", desc: "Всё вместе, как в реальной жизни", text: "В 2024 году я набрал 65 WPM с точностью 98% - и это только начало!" }
];

const MODE_LABELS = {
  texts: "Тексты",
  words: "Слова",
  quotes: "Цитаты",
  code: "Код",
  numbers: "Цифры"
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function clean(text) {
  if (typeof text !== "string") return text;
  if (typeof window.normalizeText === "function") return window.normalizeText(text);
  return text
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D]/g, "-")
    .replace(/\uFFFD+/g, "-")
    .replace(/\u00A0/g, " ");
}

/* ============================================================
   ПОЛЬЗОВАТЕЛЬ
   ============================================================ */

const API = "http://localhost:4000/api";

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
}

function storageKey() {
  const u = getCurrentUser();
  return u ? `ratatype_history_${u.username}` : "ratatype_history_v1";
}

function renderUserChip() {
  const u = getCurrentUser();
  const chip = $("#userChip");
  if (!u) {
    chip.hidden = true;
    return;
  }
  chip.hidden = false;
  $("#userName").textContent = u.username;
  $("#userAvatar").textContent = (u.username[0] || "?").toUpperCase();
}

/* ============================================================
   ИСТОРИЯ
   ============================================================ */

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(storageKey())) || []; }
  catch { return []; }
}

function saveHistory(hist) {
  localStorage.setItem(storageKey(), JSON.stringify(hist.slice(0, 200)));
}

function saveResult(wpm, acc, chars, mode) {
  const hist = loadHistory();
  hist.unshift({
    wpm,
    acc,
    chars: chars || 0,
    mode: mode || "texts",
    date: new Date().toLocaleString("ru-RU")
  });
  saveHistory(hist);
}

/* ============================================================
   СОСТОЯНИЕ ТРЕНИРОВКИ
   ============================================================ */

const state = {
  mode: "texts",
  lang: "ru",
  target: "",
  index: 0,
  errors: 0,
  startedAt: null,
  timerId: null,
  finished: false,
  view: "practice",
  lesson: null
};

function generateText() {
  const d = DATA[state.lang];
  if (state.mode === "texts") {
    const pool = ALL_TEXTS[state.lang];
    if (pool && pool.length) return clean(rand(pool));
    return clean(rand(d.quotes));
  }
  if (state.mode === "words") return shuffle(d.words).slice(0, 30).join(" ");
  if (state.mode === "quotes") return clean(rand(d.quotes));
  if (state.mode === "code") return clean(rand(d.code));
  if (state.mode === "numbers") return shuffle(d.numbers.split(" ")).join(" ");
  return "ошибка";
}

function renderText(container, text, index, errorsSet) {
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = text[i] === " " ? "\u00A0" : text[i];
    if (i < index) {
      span.classList.add(errorsSet && errorsSet.has(i) ? "wrong" : "correct");
    } else if (i === index) {
      span.classList.add("current");
    } else {
      span.classList.add("pending");
    }
    frag.appendChild(span);
  }
  container.appendChild(frag);
}

const errorPositions = new Set();

function newPractice() {
  state.target = generateText();
  state.index = 0;
  state.errors = 0;
  state.startedAt = null;
  state.finished = false;
  errorPositions.clear();
  clearInterval(state.timerId);
  state.timerId = null;
  $("#wpm").textContent = "0";
  $("#accuracy").textContent = "100%";
  $("#time").textContent = "0:00";
  $("#errors").textContent = "0";
  renderText($("#textDisplay"), state.target, 0, errorPositions);
  positionCaret();
}

function startTimer() {
  if (state.startedAt) return;
  state.startedAt = Date.now();
  state.timerId = setInterval(() => {
    const sec = Math.floor((Date.now() - state.startedAt) / 1000);
    $("#time").textContent = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
  }, 200);
}

function updateLiveStats() {
  if (!state.startedAt) return { wpm: 0, acc: 100 };
  const minutes = (Date.now() - state.startedAt) / 60000;
  const typed = state.index;
  const wpm = minutes > 0 ? Math.round((typed / 5) / minutes) : 0;
  const acc = typed > 0 ? Math.round(((typed - state.errors) / typed) * 100) : 100;
  $("#wpm").textContent = wpm;
  $("#accuracy").textContent = Math.max(0, acc) + "%";
  $("#errors").textContent = state.errors;
  return { wpm, acc: Math.max(0, acc) };
}

function positionCaret() {
  const box = $("#textBox");
  const current = box.querySelector(".char.current");
  const caret = $("#caret");
  if (!current || !caret) { if (caret) caret.style.opacity = 0; return; }
  const boxRect = box.getBoundingClientRect();
  const r = current.getBoundingClientRect();
  caret.style.opacity = 1;
  caret.style.left = (r.left - boxRect.left) + "px";
  caret.style.top = (r.top - boxRect.top) + "px";
  caret.style.height = r.height + "px";
}

function sameChar(typed, expected) {
  if (typed === expected) return true;
  return clean(typed) === clean(expected);
}

function handleTyping(e) {
  if (state.finished || state.view !== "practice") return;
  if (e.key.length !== 1) return;
  e.preventDefault();
  startTimer();

  const expected = state.target[state.index];
  const display = $("#textDisplay");
  const currentEl = display.children[state.index];

  if (sameChar(e.key, expected)) {
    state.index++;
  } else {
    state.errors++;
    if (currentEl) {
      currentEl.classList.add("wrong-flash");
      setTimeout(() => currentEl.classList.remove("wrong-flash"), 220);
    }
    updateLiveStats();
    highlightKey(e.key, true);
    return;
  }

  renderText(display, state.target, state.index, errorPositions);
  positionCaret();
  updateLiveStats();
  highlightKey(e.key, false);

  if (state.index >= state.target.length) finishPractice();
}

function finishPractice() {
  state.finished = true;
  clearInterval(state.timerId);
  const { wpm, acc } = updateLiveStats();
  saveResult(wpm, acc, state.target.length, state.mode);
  renderStats();
  renderProfile();
  setTimeout(() => {
    if (confirm(`Готово\n\nСкорость: ${wpm} WPM\nТочность: ${acc}%\n\nЕщё раз?`)) newPractice();
  }, 150);
}

/* ============================================================
   КЛАВИАТУРА
   ============================================================ */

const KB_ROWS_RU = [
  ["й","ц","у","к","е","н","��","ш","щ","з","х","ъ"],
  ["ф","ы","в","а","п","р","о","л","д","ж","э"],
  ["я","ч","с","м","и","т","ь","б","ю"],
  [" "]
];
const KB_ROWS_EN = [
  ["q","w","e","r","t","y","u","i","o","p","[","]"],
  ["a","s","d","f","g","h","j","k","l",";","'"],
  ["z","x","c","v","b","n","m",",",".","/"],
  [" "]
];

function buildKeyboard() {
  const kb = $("#keyboard");
  kb.innerHTML = "";
  const rows = state.lang === "ru" ? KB_ROWS_RU : KB_ROWS_EN;
  rows.forEach((row) => {
    const div = document.createElement("div");
    div.className = "kb-row";
    row.forEach(k => {
      const key = document.createElement("div");
      key.className = "key" + (k === " " ? " space" : "");
      key.dataset.key = k;
      key.textContent = k === " " ? "space" : k;
      div.appendChild(key);
    });
    kb.appendChild(div);
  });
}

function highlightKey(ch, isError) {
  $$(".key.active, .key.error").forEach(k => k.classList.remove("active", "error"));
  const key = document.querySelector(`.key[data-key="${ch === " " ? " " : ch.toLowerCase()}"]`);
  if (key) {
    key.classList.add(isError ? "error" : "active");
    setTimeout(() => key.classList.remove("active", "error"), 150);
  }
}

/* ============================================================
   УРОКИ
   ============================================================ */

function renderLessons() {
  const grid = $("#lessonGrid");
  grid.innerHTML = "";
  LESSONS.forEach(l => {
    const card = document.createElement("div");
    card.className = "lesson-card";
    card.innerHTML = `<h4>Урок ${l.id}. ${l.title}</h4><p>${l.desc}</p>`;
    card.onclick = () => openLesson(l);
    grid.appendChild(card);
  });
}

const lessonState = { target: "", index: 0, errors: new Set() };

function openLesson(l) {
  state.lesson = l;
  lessonState.target = clean(l.text);
  lessonState.index = 0;
  lessonState.errors.clear();
  $("#lessonGrid").hidden = true;
  $("#lessonPanel").hidden = false;
  $("#lessonTitle").textContent = `Урок ${l.id}. ${l.title}`;
  $("#lessonDesc").textContent = l.desc;
  renderText($("#lessonDisplay"), lessonState.target, 0, lessonState.errors);
  $("#lessonTextBox").focus();
}

function closeLesson() {
  $("#lessonPanel").hidden = true;
  $("#lessonGrid").hidden = false;
  state.lesson = null;
}

function handleLessonTyping(e) {
  if (!state.lesson) return;
  if (e.key.length !== 1) return;
  e.preventDefault();
  const expected = lessonState.target[lessonState.index];
  const display = $("#lessonDisplay");
  const currentEl = display.children[lessonState.index];

  if (!sameChar(e.key, expected)) {
    if (currentEl) {
      currentEl.classList.add("wrong-flash");
      setTimeout(() => currentEl.classList.remove("wrong-flash"), 220);
    }
    return;
  }

  lessonState.index++;
  renderText(display, lessonState.target, lessonState.index, lessonState.errors);

  if (lessonState.index >= lessonState.target.length) {
    setTimeout(() => {
      alert("Урок пройден, молодец");
      closeLesson();
    }, 200);
  }
}

/* ============================================================
   СТАТИСТИКА
   ============================================================ */

function computeStreak(hist) {
  if (!hist.length) return 0;
  const days = new Set(hist.map(h => {
    const d = new Date(h.date);
    return isNaN(d) ? null : d.toDateString();
  }).filter(Boolean));

  let streak = 0;
  const cursor = new Date();
  while (true) {
    if (days.has(cursor.toDateString())) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else if (streak === 0 && days.has(new Date(cursor.setDate(cursor.getDate() - 1)).toDateString())) {
      continue;
    } else {
      break;
    }
  }
  return streak;
}

function renderStats() {
  const hist = loadHistory();
  $("#totalRuns").textContent = hist.length;

  if (!hist.length) {
    $("#bestWpm").textContent = "0";
    $("#avgWpm").textContent = "0";
    $("#bestAcc").textContent = "0%";
    $("#totalChars").textContent = "0";
    $("#totalTime").textContent = "0м";
    $("#lastWpm").textContent = "0";
    $("#streakDays").textContent = "0";
    $("#progressPct").textContent = "0%";
    $("#progressFill").style.width = "0%";
    $("#progressNote").textContent = "Начни тренировку, чтобы увидеть прогресс";
    $("#historyBody").innerHTML = `<tr><td colspan="5" class="empty">Пока пусто — иди печатай</td></tr>`;
    renderChart([]);
    return;
  }

  const best = Math.max(...hist.map(h => h.wpm));
  const avg = Math.round(hist.reduce((s, h) => s + h.wpm, 0) / hist.length);
  const bestA = Math.max(...hist.map(h => h.acc));
  const chars = hist.reduce((s, h) => s + (h.chars || 0), 0);
  const totalMin = Math.round(hist.reduce((s, h) => s + (h.chars || 0) / 5 / Math.max(h.wpm, 1), 0));

  $("#bestWpm").textContent = best;
  $("#avgWpm").textContent = avg;
  $("#bestAcc").textContent = bestA + "%";
  $("#totalChars").textContent = chars.toLocaleString("ru-RU");
  $("#totalTime").textContent = totalMin + "м";
  $("#lastWpm").textContent = hist[0].wpm;
  $("#streakDays").textContent = computeStreak(hist);

  const pct = Math.min(100, Math.round((best / 100) * 100));
  $("#progressPct").textContent = pct + "%";
  $("#progressFill").style.width = pct + "%";
  $("#progressNote").textContent = best >= 100
    ? "Цель достигнута — 100 WPM покорены"
    : `Осталось ${100 - best} WPM до цели`;

  $("#historyBody").innerHTML = hist.slice(0, 20).map((h, i) =>
    `<tr>
      <td>${i + 1}</td>
      <td>${h.wpm}</td>
      <td>${h.acc}%</td>
      <td>${h.chars || "—"}</td>
      <td>${h.date}</td>
    </tr>`
  ).join("");

  renderChart(hist);
}

function renderChart(hist) {
  const chart = $("#wpmChart");
  chart.innerHTML = "";

  if (!hist.length) {
    chart.innerHTML = `<div class="chart-empty">Нет данных</div>`;
    return;
  }

  const data = hist.slice(0, 20).reverse();
  const max = Math.max(...data.map(h => h.wpm), 10);

  data.forEach((h) => {
    const bar = document.createElement("div");
    bar.className = "chart-bar";
    bar.style.height = Math.max(6, (h.wpm / max) * 100) + "%";
    bar.title = `${h.wpm} WPM · ${h.acc}% · ${h.date}`;
    chart.appendChild(bar);
  });
}

/* ============================================================
   ПРОФИЛЬ
   ============================================================ */

const RANKS = [
  { min: 0,   name: "новичок" },
  { min: 25,  name: "ученик" },
  { min: 40,  name: "печатник" },
  { min: 55,  name: "быстрый" },
  { min: 70,  name: "мастер" },
  { min: 85,  name: "виртуоз" },
  { min: 100, name: "легенда" }
];

function rankFor(wpm) {
  let r = RANKS[0];
  RANKS.forEach(x => { if (wpm >= x.min) r = x; });
  return r;
}

const BADGES = [
  { id: "first",   icon: "🎯", name: "Первый шаг",     desc: "1 забег",       check: (h) => h.length >= 1 },
  { id: "ten",     icon: "🔟", name: "Десятка",        desc: "10 забегов",    check: (h) => h.length >= 10 },
  { id: "fifty",   icon: "💪", name: "Трудяга",        desc: "50 забегов",    check: (h) => h.length >= 50 },
  { id: "wpm30",   icon: "⚡", name: "Разгон",         desc: "30 WPM",        check: (h) => h.some(x => x.wpm >= 30) },
  { id: "wpm50",   icon: "🚀", name: "Скорость",       desc: "50 WPM",        check: (h) => h.some(x => x.wpm >= 50) },
  { id: "wpm70",   icon: "🔥", name: "Мастерство",     desc: "70 WPM",        check: (h) => h.some(x => x.wpm >= 70) },
  { id: "wpm100",  icon: "👑", name: "Легенда",        desc: "100 WPM",       check: (h) => h.some(x => x.wpm >= 100) },
  { id: "acc99",   icon: "🎯", name: "Снайпер",        desc: "99% точности",  check: (h) => h.some(x => x.acc >= 99) },
  { id: "chars10k",icon: "📚", name: "Книжник",        desc: "10 000 символов", check: (h) => h.reduce((s, x) => s + (x.chars || 0), 0) >= 10000 },
  { id: "streak3", icon: "📅", name: "Постоянство",    desc: "3 дня подряд",  check: (h) => computeStreak(h) >= 3 },
  { id: "modes",   icon: "🎲", name: "Разносторонний", desc: "все 5 режимов", check: (h) => new Set(h.map(x => x.mode)).size >= 5 },
  { id: "night",   icon: "🌙", name: "Полуночник",     desc: "забег после 23:00", check: (h) => h.some(x => {
      const d = new Date(x.date); return !isNaN(d) && d.getHours() >= 23;
    }) }
];

function renderProfile() {
  const u = getCurrentUser();
  const hist = loadHistory();

  const name = u ? u.username : "guest";
  $("#profileName").textContent = name;
  $("#profileAvatar").textContent = (name[0] || "?").toUpperCase();
  $("#profileSub").textContent = u ? (u.email || "аккаунт активен") : "не авторизован";

  const best = hist.length ? Math.max(...hist.map(h => h.wpm)) : 0;
  const avg = hist.length ? Math.round(hist.reduce((s, h) => s + h.wpm, 0) / hist.length) : 0;
  const avgAcc = hist.length ? Math.round(hist.reduce((s, h) => s + h.acc, 0) / hist.length) : 0;

  const rank = rankFor(best);
  $("#profileRank").textContent = rank.name;

  $("#pBest").textContent = best;
  $("#pAvg").textContent = avg;
  $("#pRuns").textContent = hist.length;
  $("#pAcc").textContent = avgAcc + "%";

  const next = RANKS.find(r => r.min > best);
  const target = next ? next.min : 100;
  const pct = Math.min(100, Math.round((best / target) * 100));
  $("#levelPct").textContent = pct + "%";
  $("#levelFill").style.width = pct + "%";
  $("#levelNote").textContent = next
    ? `${best} / ${next.min} WPM до ранга «${next.name}»`
    : `Максимальный ранг достигнут`;

  $("#badges").innerHTML = BADGES.map(b => {
    const on = b.check(hist);
    return `<div class="badge ${on ? "on" : ""}">
      <span class="badge-icon">${b.icon}</span>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
    </div>`;
  }).join("");

  const byMode = {};
  hist.forEach(h => {
    const m = h.mode || "texts";
    if (!byMode[m] || h.wpm > byMode[m].wpm) byMode[m] = h;
  });

  const rows = Object.keys(MODE_LABELS).map(m => {
    const rec = byMode[m];
    return `<tr>
      <td>${MODE_LABELS[m]}</td>
      <td>${rec ? rec.wpm : "—"}</td>
      <td>${rec ? rec.acc + "%" : "—"}</td>
    </tr>`;
  }).join("");

  $("#modeRecords").innerHTML = rows;
}

/* ============================================================
   НАВИГАЦИЯ
   ============================================================ */

function switchView(view) {
  state.view = view;
  $$(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === view));
  $$(".view").forEach(v => v.classList.toggle("active", v.id === view));
  if (view === "stats") renderStats();
  if (view === "profile") renderProfile();
  if (view === "practice") setTimeout(positionCaret, 50);
}

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================================ */

function init() {
  renderUserChip();

  $$(".tab").forEach(t => t.onclick = () => switchView(t.dataset.view));

  $("#logoutBtn").onclick = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  $("#restartBtn").onclick = newPractice;
  $("#modeSelect").onchange = (e) => { state.mode = e.target.value; newPractice(); };
  $("#langSelect").onchange = (e) => { state.lang = e.target.value; buildKeyboard(); newPractice(); };

  $("#textBox").onclick = () => $("#textBox").focus();
  $("#textBox").addEventListener("keydown", handleTyping);

  $("#lessonTextBox").addEventListener("keydown", handleLessonTyping);
  $("#lessonRestart").onclick = () => { if (state.lesson) openLesson(state.lesson); };
  $("#lessonBack").onclick = closeLesson;

  $("#clearStats").onclick = () => {
    if (confirm("Очистить всю историю?")) {
      localStorage.removeItem(storageKey());
      renderStats();
      renderProfile();
    }
  };

  renderLessons();
  buildKeyboard();
  newPractice();
  renderStats();
  renderProfile();
  window.addEventListener("resize", positionCaret);
}

document.addEventListener("DOMContentLoaded", init);
