/*
 * French 100 — a tiny, text-only vocabulary game.
 * The deck is a practical selection of everyday French nouns. A frequency
 * ranking is corpus-dependent; this set is curated for useful learner vocabulary.
 * Sound effects are short original WAVs embedded as Base64 data URIs.
 */

const LEVEL1_WORDS = [
  { french: "un café", answer: "coffee", accepted: ["coffee"] },
  { french: "une femme", answer: "woman", accepted: ["woman", "wife"] },
  { french: "un homme", answer: "man", accepted: ["man"] },
  { french: "une personne", answer: "person", accepted: ["person"] },
  { french: "le temps", answer: "time", accepted: ["time", "weather"] },
  { french: "une semaine", answer: "week", accepted: ["week"] },
  { french: "une année", answer: "year", accepted: ["year"] },
  { french: "un jour", answer: "day", accepted: ["day"] },
  { french: "une heure", answer: "hour", accepted: ["hour", "time", "o'clock"] },
  { french: "une minute", answer: "minute", accepted: ["minute"] },
  { french: "une seconde", answer: "second", accepted: ["second", "second moment"] },
  { french: "une soirée", answer: "evening", accepted: ["evening", "night out"] },
  { french: "une nuit", answer: "night", accepted: ["night"] },
  { french: "une voiture", answer: "car", accepted: ["car", "automobile"] },
  { french: "une rue", answer: "street", accepted: ["street"] },
  { french: "une route", answer: "road", accepted: ["road", "route"] },
  { french: "une maison", answer: "house", accepted: ["house", "home"] },
  { french: "une table", answer: "table", accepted: ["table"] },
  { french: "une chambre", answer: "bedroom", accepted: ["bedroom", "room"] },
  { french: "une cuisine", answer: "kitchen", accepted: ["kitchen", "cooking"] },
  { french: "une porte", answer: "door", accepted: ["door"] },
  { french: "une fenêtre", answer: "window", accepted: ["window"] },
  { french: "un amour", answer: "love", accepted: ["love", "sweetheart"] },
  { french: "une raison", answer: "reason", accepted: ["reason", "cause"] },
  { french: "le monde", answer: "world", accepted: ["world"] },
  { french: "un pays", answer: "country", accepted: ["country", "nation"] },
  { french: "une ville", answer: "city", accepted: ["city", "town"] },
  { french: "un quartier", answer: "neighborhood", accepted: ["neighborhood", "neighbourhood", "district"] },
  { french: "une part", answer: "piece", accepted: ["piece", "portion", "part", "slice"] },
  { french: "une chose", answer: "thing", accepted: ["thing"] },
  { french: "un truc", answer: "thing", accepted: ["thing", "stuff"] },
  { french: "la chance", answer: "luck", accepted: ["luck", "chance"] },
  { french: "un travail", answer: "work", accepted: ["work", "job"] },
  { french: "un bureau", answer: "office", accepted: ["office", "desk", "study"] },
  { french: "une salle", answer: "room", accepted: ["room", "hall"] },
  { french: "un patron", answer: "boss", accepted: ["boss", "employer", "manager"] },
  { french: "un client", answer: "customer", accepted: ["customer", "client"] },
  { french: "un professeur", answer: "teacher", accepted: ["teacher", "professor"] },
  { french: "un cours", answer: "lesson", accepted: ["lesson", "class", "course"] },
  { french: "un médecin", answer: "doctor", accepted: ["doctor", "physician"] },
  { french: "un ordinateur", answer: "computer", accepted: ["computer", "pc"] },
  { french: "un téléphone", answer: "phone", accepted: ["phone", "telephone"] },
  { french: "un appel", answer: "call", accepted: ["call", "phone call"] },
  { french: "un train", answer: "train", accepted: ["train"] },
  { french: "une maman", answer: "mom", accepted: ["mom", "mum", "mommy", "mummy"] },
  { french: "un papa", answer: "dad", accepted: ["dad", "daddy", "father"] },
  { french: "une mère", answer: "mother", accepted: ["mother", "mom", "mum"] },
  { french: "un père", answer: "father", accepted: ["father", "dad"] },
  { french: "une sœur", answer: "sister", accepted: ["sister"] },
  { french: "un frère", answer: "brother", accepted: ["brother"] },
  { french: "une fille", answer: "girl", accepted: ["girl", "daughter"] },
  { french: "un fils", answer: "son", accepted: ["son"] },
  { french: "un enfant", answer: "child", accepted: ["child", "kid"] },
  { french: "une famille", answer: "family", accepted: ["family"] },
  { french: "un mari", answer: "husband", accepted: ["husband"] },
  { french: "un copain", answer: "friend", accepted: ["friend", "boyfriend", "mate"] },
  { french: "la faim", answer: "hunger", accepted: ["hunger"] },
  { french: "l'eau", answer: "water", accepted: ["water"] },
  { french: "la vie", answer: "life", accepted: ["life"] },
  { french: "un moment", answer: "moment", accepted: ["moment", "while"] },
  { french: "le début", answer: "beginning", accepted: ["beginning", "start"] },
  { french: "le départ", answer: "departure", accepted: ["departure", "leaving"] },
  { french: "les gens", answer: "people", accepted: ["people", "folks"] },
  { french: "un voyage", answer: "trip", accepted: ["trip", "journey", "travel"] },
  { french: "un prix", answer: "price", accepted: ["price", "prize", "award"] },
  { french: "une carte", answer: "card", accepted: ["card", "map", "menu"] },
  { french: "une façon", answer: "way", accepted: ["way", "manner", "fashion"] },
  { french: "une langue", answer: "language", accepted: ["language", "tongue"] },
  { french: "une fête", answer: "party", accepted: ["party", "celebration", "festival"] },
  { french: "une place", answer: "square", accepted: ["square", "place", "spot", "seat"] },
  { french: "un endroit", answer: "place", accepted: ["place", "spot", "location"] },
  { french: "une tête", answer: "head", accepted: ["head"] },
  { french: "une main", answer: "hand", accepted: ["hand"] },
  { french: "une bouche", answer: "mouth", accepted: ["mouth"] },
  { french: "un ventre", answer: "belly", accepted: ["belly", "stomach", "abdomen"] },
  { french: "une fleur", answer: "flower", accepted: ["flower", "blossom"] },
  { french: "un arbre", answer: "tree", accepted: ["tree"] },
  { french: "un jardin", answer: "garden", accepted: ["garden", "yard"] },
  { french: "une idée", answer: "idea", accepted: ["idea", "thought"] },
  { french: "une couleur", answer: "color", accepted: ["color", "colour"] },
  { french: "une lumière", answer: "light", accepted: ["light", "lamp"] },
  { french: "un chien", answer: "dog", accepted: ["dog"] },
  { french: "un chat", answer: "cat", accepted: ["cat"] },
  { french: "un oiseau", answer: "bird", accepted: ["bird"] },
  { french: "un rêve", answer: "dream", accepted: ["dream"] },
  { french: "une école", answer: "school", accepted: ["school"] },
  { french: "un journal", answer: "newspaper", accepted: ["newspaper", "paper", "journal"] },
  { french: "le soleil", answer: "sun", accepted: ["sun", "sunshine"] },
  { french: "une photo", answer: "picture", accepted: ["picture", "photo", "photograph"] },
  { french: "une question", answer: "question", accepted: ["question"] },
  { french: "une réponse", answer: "answer", accepted: ["answer", "reply"] },
  { french: "un livre", answer: "book", accepted: ["book"] },
  { french: "un pain", answer: "bread", accepted: ["bread", "loaf"] },
  { french: "un repas", answer: "meal", accepted: ["meal"] },
  { french: "l'argent", answer: "money", accepted: ["money", "cash"] },
  { french: "un ami", answer: "friend", accepted: ["friend", "male friend"] },
  { french: "une histoire", answer: "story", accepted: ["story", "history", "tale"] },
  { french: "une musique", answer: "music", accepted: ["music"] },
  { french: "un matin", answer: "morning", accepted: ["morning"] },
  { french: "un mois", answer: "month", accepted: ["month"] },
];

const LEVEL2_WORDS = [
  { french: "un lit", answer: "bed", accepted: ["bed"] },
  { french: "une chaise", answer: "chair", accepted: ["chair"] },
  { french: "un mur", answer: "wall", accepted: ["wall"] },
  { french: "un toit", answer: "roof", accepted: ["roof"] },
  { french: "le sol", answer: "floor", accepted: ["floor", "ground"] },
  { french: "un plafond", answer: "ceiling", accepted: ["ceiling"] },
  { french: "un sac", answer: "bag", accepted: ["bag", "sack"] },
  { french: "une boîte", answer: "box", accepted: ["box"] },
  { french: "un stylo", answer: "pen", accepted: ["pen"] },
  { french: "un crayon", answer: "pencil", accepted: ["pencil"] },
  { french: "le papier", answer: "paper", accepted: ["paper"] },
  { french: "une lettre", answer: "letter", accepted: ["letter"] },
  { french: "un mot", answer: "word", accepted: ["word"] },
  { french: "un nombre", answer: "number", accepted: ["number"] },
  { french: "une ligne", answer: "line", accepted: ["line"] },
  { french: "un point", answer: "point", accepted: ["point", "dot"] },
  { french: "une page", answer: "page", accepted: ["page"] },
  { french: "une image", answer: "image", accepted: ["image", "picture"] },
  { french: "un verre", answer: "glass", accepted: ["glass"] },
  { french: "une tasse", answer: "cup", accepted: ["cup", "mug"] },
  { french: "une bouteille", answer: "bottle", accepted: ["bottle"] },
  { french: "une assiette", answer: "plate", accepted: ["plate", "dish"] },
  { french: "un couteau", answer: "knife", accepted: ["knife"] },
  { french: "une cuillère", answer: "spoon", accepted: ["spoon"] },
  { french: "une fourchette", answer: "fork", accepted: ["fork"] },
  { french: "le sel", answer: "salt", accepted: ["salt"] },
  { french: "le poivre", answer: "pepper", accepted: ["pepper"] },
  { french: "la viande", answer: "meat", accepted: ["meat"] },
  { french: "le poisson", answer: "fish", accepted: ["fish"] },
  { french: "un œuf", answer: "egg", accepted: ["egg"] },
  { french: "le lait", answer: "milk", accepted: ["milk"] },
  { french: "le fromage", answer: "cheese", accepted: ["cheese"] },
  { french: "un fruit", answer: "fruit", accepted: ["fruit"] },
  { french: "une pomme", answer: "apple", accepted: ["apple"] },
  { french: "une banane", answer: "banana", accepted: ["banana"] },
  { french: "le sucre", answer: "sugar", accepted: ["sugar"] },
  { french: "le thé", answer: "tea", accepted: ["tea"] },
  { french: "la bière", answer: "beer", accepted: ["beer"] },
  { french: "le vin", answer: "wine", accepted: ["wine"] },
  { french: "une chemise", answer: "shirt", accepted: ["shirt", "blouse"] },
  { french: "un pantalon", answer: "pants", accepted: ["pants", "trousers"] },
  { french: "une robe", answer: "dress", accepted: ["dress"] },
  { french: "un manteau", answer: "coat", accepted: ["coat"] },
  { french: "une chaussure", answer: "shoe", accepted: ["shoe"] },
  { french: "un chapeau", answer: "hat", accepted: ["hat"] },
  { french: "un bras", answer: "arm", accepted: ["arm"] },
  { french: "une jambe", answer: "leg", accepted: ["leg"] },
  { french: "un pied", answer: "foot", accepted: ["foot"] },
  { french: "un dos", answer: "back", accepted: ["back"] },
  { french: "un nez", answer: "nose", accepted: ["nose"] },
  { french: "un œil", answer: "eye", accepted: ["eye"] },
  { french: "une oreille", answer: "ear", accepted: ["ear"] },
  { french: "un cheveu", answer: "hair", accepted: ["hair"] },
  { french: "un doigt", answer: "finger", accepted: ["finger"] },
  { french: "le sang", answer: "blood", accepted: ["blood"] },
  { french: "un cœur", answer: "heart", accepted: ["heart"] },
  { french: "un esprit", answer: "mind", accepted: ["mind", "spirit"] },
  { french: "un roi", answer: "king", accepted: ["king"] },
  { french: "une reine", answer: "queen", accepted: ["queen"] },
  { french: "un chef", answer: "chief", accepted: ["chief", "boss", "leader"] },
  { french: "un dieu", answer: "god", accepted: ["god"] },
  { french: "une loi", answer: "law", accepted: ["law"] },
  { french: "un droit", answer: "right", accepted: ["right", "law"] },
  { french: "un groupe", answer: "group", accepted: ["group"] },
  { french: "un jeu", answer: "game", accepted: ["game"] },
  { french: "un nom", answer: "name", accepted: ["name"] },
  { french: "la vérité", answer: "truth", accepted: ["truth"] },
  { french: "la force", answer: "force", accepted: ["force", "strength"] },
  { french: "une forme", answer: "shape", accepted: ["shape", "form"] },
  { french: "un centre", answer: "center", accepted: ["center", "centre"] },
  { french: "un bord", answer: "edge", accepted: ["edge", "border"] },
  { french: "un fond", answer: "bottom", accepted: ["bottom", "background"] },
  { french: "le haut", answer: "top", accepted: ["top"] },
  { french: "une taille", answer: "size", accepted: ["size", "height"] },
  { french: "le poids", answer: "weight", accepted: ["weight"] },
  { french: "un corps", answer: "body", accepted: ["body"] },
  { french: "la chaleur", answer: "heat", accepted: ["heat"] },
  { french: "le froid", answer: "cold", accepted: ["cold"] },
  { french: "le vent", answer: "wind", accepted: ["wind"] },
  { french: "la pluie", answer: "rain", accepted: ["rain"] },
  { french: "la neige", answer: "snow", accepted: ["snow"] },
  { french: "le ciel", answer: "sky", accepted: ["sky"] },
  { french: "un nuage", answer: "cloud", accepted: ["cloud"] },
  { french: "la terre", answer: "earth", accepted: ["earth", "ground", "land"] },
  { french: "la mer", answer: "sea", accepted: ["sea"] },
  { french: "le feu", answer: "fire", accepted: ["fire"] },
  { french: "une pierre", answer: "stone", accepted: ["stone", "rock"] },
  { french: "le bois", answer: "wood", accepted: ["wood", "timber"] },
  { french: "l'or", answer: "gold", accepted: ["gold"] },
  { french: "une bague", answer: "ring", accepted: ["ring"] },
  { french: "une clé", answer: "key", accepted: ["key"] },
  { french: "une serrure", answer: "lock", accepted: ["lock"] },
  { french: "un pont", answer: "bridge", accepted: ["bridge"] },
  { french: "un bateau", answer: "boat", accepted: ["boat", "ship"] },
  { french: "un avion", answer: "airplane", accepted: ["airplane", "plane"] },
  { french: "une gare", answer: "station", accepted: ["station", "train station"] },
  { french: "un billet", answer: "ticket", accepted: ["ticket"] },
  { french: "un sac à dos", answer: "backpack", accepted: ["backpack"] },
  { french: "une poche", answer: "pocket", accepted: ["pocket"] }
];


const CORRECT_SOUND = "data:audio/wav;base64,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";
const WRONG_SOUND = "data:audio/wav;base64,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";

const els = {
  card: document.getElementById("flashcard"),
  french: document.getElementById("french-word"),
  input: document.getElementById("answer-input"),
  form: document.getElementById("answer-form"),
  submit: document.getElementById("submit-button"),
  feedback: document.getElementById("feedback"),
  correctAnswer: document.getElementById("correct-answer"),
  progress: document.getElementById("progress-fill"),
  progressTrack: document.querySelector(".progress-track"),
  progressText: document.getElementById("progress-text"),
  scoreText: document.getElementById("score-text"),
  mute: document.getElementById("mute-button"),
  
  levelScreen: document.getElementById("level-screen"),
  btnLevel1: document.getElementById("btn-level-1"),
  btnLevel2: document.getElementById("btn-level-2"),
  game: document.getElementById("game-screen"),
  results: document.getElementById("results-screen"),
  
  resultScore: document.getElementById("result-score"),
  resultCorrect: document.getElementById("result-correct"),
  resultWrong: document.getElementById("result-wrong"),
  resultTime: document.getElementById("result-time"),
  mistakes: document.getElementById("mistakes-list"),
  correctList: document.getElementById("correct-list"),
  playAgain: document.getElementById("play-again-button"),
};

let currentDeck = [];
let deck = [];
let currentIndex = 0;
let correctCount = 0;
let mistakes = [];
let correctItems = [];
let isAnswered = false;
let isMuted = false;
let startTime = null;

const correctAudio = new Audio(CORRECT_SOUND);
const wrongAudio = new Audio(WRONG_SOUND);
correctAudio.volume = 0.55;
wrongAudio.volume = 0.45;

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Ignore case, accents, punctuation, and optional English articles.
function normalizeAnswer(value) {
  return value
    .toLocaleLowerCase("en")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s'-]/g, " ")
    .replace(/\b(a|an|the)\s+/g, "")
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function playSound(audio) {
  if (isMuted) return;
  audio.currentTime = 0;
  const playback = audio.play();
  if (playback && typeof playback.catch === "function") playback.catch(() => {});
}

function updateProgress() {
  const completed = currentIndex;
  els.progress.style.width = `${(completed / deck.length) * 100}%`;
  els.progressTrack.setAttribute("aria-valuenow", String(completed));
  els.progressText.textContent = `WORD ${Math.min(currentIndex + 1, deck.length)} OF ${deck.length}`;
  els.scoreText.textContent = `${correctCount} correct`;
}

function renderCard() {
  if (currentIndex >= deck.length) {
    showResults();
    return;
  }

  const word = deck[currentIndex];
  isAnswered = false;
  els.card.classList.remove("swing-right", "swing-left");
  // Force a reflow so the same animation can run on consecutive turns.
  void els.card.offsetWidth;
  els.french.textContent = word.french;
  els.input.value = "";
  els.input.disabled = false;
  els.submit.disabled = false;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.correctAnswer.textContent = "";
  updateProgress();
  window.setTimeout(() => els.input.focus(), 40);
}

function checkAnswer(typed, word) {
  const normalized = normalizeAnswer(typed);
  return word.accepted.some((answer) => normalizeAnswer(answer) === normalized);
}

function submitAnswer(event) {
  event.preventDefault();
  if (isAnswered) return;

  const typed = els.input.value.trim();
  if (!typed) {
    els.feedback.textContent = "Type your answer first 🙂";
    els.feedback.className = "feedback gentle";
    els.input.focus();
    return;
  }

  isAnswered = true;
  const word = deck[currentIndex];
  const isCorrect = checkAnswer(typed, word);
  els.input.disabled = true;
  els.submit.disabled = true;

  if (isCorrect) {
    correctCount += 1;
    correctItems.push({
      french: word.french,
      typed,
      accepted: word.accepted.join(", ")
    });
    els.card.classList.add("swing-right");
    els.feedback.textContent = "Lovely! That's right.";
    els.feedback.className = "feedback success";
    playSound(correctAudio);
  } else {
    mistakes.push({
      french: word.french,
      typed,
      expected: word.accepted.join(", ")
    });
    els.card.classList.add("swing-left");
    els.feedback.textContent = "Not quite — you'll get the next one!";
    els.feedback.className = "feedback error";
    els.correctAnswer.textContent = `Correct answer: ${word.answer}`;
    playSound(wrongAudio);
  }

  els.scoreText.textContent = `${correctCount} correct`;
  
  // Notice the time changes for animations: Right (correct) swings away fast. 
  // Left (wrong) swings slower to give time to read the correct answer.
  window.setTimeout(() => {
    currentIndex += 1;
    renderCard();
  }, isCorrect ? 850 : 3000); 
}

function showResults() {
  els.game.hidden = true;
  els.results.hidden = false;
  
  // Calculate Time
  const elapsedMs = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  
  const percentage = Math.round((correctCount / deck.length) * 100);
  
  els.resultTime.textContent = `${minutes}:${seconds}`;
  els.resultScore.textContent = `${percentage}%`;
  els.resultCorrect.textContent = `${correctCount} / ${deck.length} correct`;
  els.resultWrong.textContent = `${mistakes.length} to review`;
  
  els.progress.style.width = "100%";
  els.progressTrack.setAttribute("aria-valuenow", String(deck.length));
  els.progressText.textContent = "ROUND COMPLETE";
  els.scoreText.textContent = `${correctCount} correct`;

  // Render Mistakes
  els.mistakes.replaceChildren();
  if (mistakes.length === 0) {
    const celebration = document.createElement("p");
    celebration.className = "all-correct";
    celebration.textContent = "A perfect round. Magnifique! ✨";
    els.mistakes.appendChild(celebration);
  } else {
    mistakes.forEach((mistake) => {
      const item = document.createElement("article");
      item.className = "mistake-item";
      item.innerHTML = `
        <div class="mistake-french">${mistake.french}</div>
        <div class="mistake-answers">
          <p class="your-answer"><span>YOUR ANSWER</span><strong>${mistake.typed}</strong></p>
          <p class="expected-answer"><span>ACCEPTED</span><strong>${mistake.expected}</strong></p>
        </div>
      `;
      els.mistakes.appendChild(item);
    });
  }

  // Render Correct Words
  els.correctList.replaceChildren();
  if (correctItems.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "all-correct";
    emptyState.textContent = "None right this time. Keep practicing! 🌱";
    els.correctList.appendChild(emptyState);
  } else {
    correctItems.forEach((correct) => {
      const item = document.createElement("article");
      item.className = "mistake-item correct-item";
      item.innerHTML = `
        <div class="mistake-french">${correct.french}</div>
        <div class="mistake-answers">
          <p class="your-answer"><span>YOUR ANSWER</span><strong>${correct.typed}</strong></p>
          <p class="expected-answer"><span>ALL ACCEPTED</span><strong>${correct.accepted}</strong></p>
        </div>
      `;
      els.correctList.appendChild(item);
    });
  }
}

function returnToMenu() {
  els.results.hidden = true;
  els.game.hidden = true;
  els.levelScreen.hidden = false;
}

function startLevel(levelNum) {
  currentDeck = levelNum === 1 ? LEVEL1_WORDS : LEVEL2_WORDS;
  deck = shuffle(currentDeck);
  currentIndex = 0;
  correctCount = 0;
  mistakes = [];
  correctItems = [];
  startTime = Date.now(); // Start timer
  
  els.levelScreen.hidden = true;
  els.results.hidden = true;
  els.game.hidden = false;
  
  renderCard();
}

function syncMuteButton() {
  els.mute.setAttribute("aria-pressed", String(isMuted));
  els.mute.setAttribute("aria-label", isMuted ? "Turn sound on" : "Mute sounds");
  els.mute.innerHTML = isMuted
    ? '<span aria-hidden="true">♪̸</span><span class="mute-label">Sound off</span>'
    : '<span aria-hidden="true">♫</span><span class="mute-label">Sound on</span>';
}

function toggleMute() {
  isMuted = !isMuted;
  syncMuteButton();
  try { localStorage.setItem("french100-muted", String(isMuted)); } catch (_) { /* storage may be unavailable */ }
}

els.form.addEventListener("submit", submitAnswer);
els.mute.addEventListener("click", toggleMute);
els.btnLevel1.addEventListener("click", () => startLevel(1));
els.btnLevel2.addEventListener("click", () => startLevel(2));
els.playAgain.addEventListener("click", returnToMenu);

try { isMuted = localStorage.getItem("french100-muted") === "true"; } catch (_) { /* storage may be unavailable */ }
syncMuteButton();