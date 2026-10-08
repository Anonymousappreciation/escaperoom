/* ============================================================
   THE OFFICE MYSTERY
   Single-scene hidden-object workplace game

   IMPORTANT:
   The 8 challenge coordinates below are based on the
   office image used by the previous game:
   assets/images/mystery_room_office_shelves.png
============================================================ */

"use strict";

/* ============================================================
   1. GAME QUESTIONS
============================================================ */

const GAME_DATA = {
  teamA: {
    name: "Team Alpha",
    questions: {
      desk: {
        title: "Desk / Laptop",
        scenario:
          "Four employees are working on a report. Ana finishes before Ben. Ben finishes before Carla. Daniel finishes after Ana but before Carla. Who must finish last?",
        choices: [
          "A. Ana",
          "B. Carla",
          "C. Ben",
          "D. Daniel"
        ],
        correct: 0
      },

      plant: {
        title: "Green Plant",
        scenario:
          "A workplace security code has three numbers. The first number is greater than the second. The second number is greater than the third. The total is 12. The first number is 6. What is the code?.
        ,
        choices: [
          "A. 6-3-3",
          "B. 6-4-2",
          "C. 6-2-4"
        ],
        correct: 1
      },

      lamp: {
        title: "Desk Lamp",
        scenario:
          "Five employees are candidate for team leader: A,B,C,D and E. A has more experience than B. C has more experience than A. D has less experience than B. E has more experience than C. Who has the most experience?",
        choices: [
          "A. A",
          "B. C",
          "C. E"
        ],
        correct: 0
      },

      notes: {
        title: "Wall Notes",
        scenario:
          "One employee deleted a file. Ana says:Ben deleted it. Ben says: Carlo deleted it. Carlo says:Ben is lying. Dana says: I didn't delete it.",
        choices: [
          "A. Ben",
          "B. Carlo",
          "C. Ana"
        ],
        correct: 1
      },

      books: {
        title: "Office Books",
        scenario:
          "Four coworkers sit in a row. Amy sits immediately before Ben. Carla sits immediately before Dana. Ben is not beside Carla.",
        choices: [
          "A. Amy-Ben-Carla-Dana",
          "B. Carla-Dana-Amy-Ben",
          "C. Ben-Amy-Carla-Dana"
        ],
        correct: 0
      },

      notebook: {
        title: "Open Notebook",
        scenario:
          "Four coworkers — Amy, Ben, Cole, and Dan — each left a lunch box in the office fridge. The boxes are positioned from left to right.",
        question:
          "Dan's box is position 4. Amy's box is directly to the left of Ben's box. Who owns position 1?",
        choices: [
          "A. Cole",
          "B. Amy",
          "C. Ben",
          "D. Dan"
        ],
        correct: 0
      },

      workspace: {
        title: "Workspace",
        scenario:
          "Your alarm rings at 6:00 AM. you say 'just for 5 more minutes.' You wake up and it is 8:30 AM.",
        question: "What happened?",
        choices: [
          "A. Your alarm clock betrayed you",
          "B. You accidentally slept for 2.5 hours",
          "C. You are dreaming related to your work"
        ],
        correct: 1
      },

      cabinet: {
        title: "Security Cabinet",
        scenario:
          "You are scheduled to attend an important client meeting but face a transit delay.",
        question: "What is the professional protocol?",
        choices: [
          "A. Inform supervisor promptly",
          "B. Sneak in late without word",
          "C. Cancel without notice"
        ],
        correct: 0
      }
    }
  },

  teamB: {
    name: "Team Bravo",
    questions: {
      desk: {
        title: "Desk / Laptop",
        scenario:
          "David notices a delivery counted 10 items instead of 9 and immediately alerts management to correct the ledger.",
        question: "Which workplace value is being demonstrated?",
        choices: [
          "A. Carelessness",
          "B. Integrity",
          "C. Dishonesty"
        ],
        correct: 1
      },

      plant: {
        title: "Green Plant",
        scenario:
          "An employee greets clients warmly and listens actively without interrupting.",
        question: "Which standard is demonstrated?",
        choices: [
          "A. Customer Service",
          "B. Apathy",
          "C. Delay"
        ],
        correct: 0
      },

      lamp: {
        title: "Desk Lamp",
        scenario:
          "An employee double checks calculations before submitting the financial report.",
        question: "Which quality is demonstrated?",
        choices: [
          "A. Haste",
          "B. Attention to Detail",
          "C. Neglect"
        ],
        correct: 1
      },

      notes: {
        title: "Wall Notes",
        scenario:
          "A justice scale paired with a business briefcase represents fairness and ethical behavior.",
        question: "Decode the corporate virtue:",
        choices: [
          "A. Integrity",
          "B. Corruption",
          "C. Profit"
        ],
        correct: 0
      },

      books: {
        title: "Office Books",
        scenario:
          "Elena presented 20 minutes before David. Sarah spoke after David. The times were 9:00, 9:20, and 9:40.",
        question: "Who opened the board meeting at 9:00 AM?",
        choices: [
          "A. Elena",
          "B. David",
          "C. Sarah"
        ],
        correct: 0
      },

      notebook: {
        title: "Open Notebook",
        scenario:
          "Four coworkers — Amy, Ben, Cole, and Dan — have lunch boxes in positions 1 to 4. Dan is at position 4 and Amy is directly left of Ben.",
        question: "Who owns the lunch box at position 1?",
        choices: [
          "A. Cole",
          "B. Amy",
          "C. Ben",
          "D. Dan"
        ],
        correct: 0
      },

      workspace: {
        title: "Workspace",
        scenario:
          "A coworker needs constructive feedback about their work.",
        question: "What is the best way to offer constructive peer feedback?",
        choices: [
          "A. Publicly criticize",
          "B. Respectful, private and specific suggestions",
          "C. Anonymous notes"
        ],
        correct: 1
      },

      cabinet: {
        title: "Security Cabinet",
        scenario:
          "The company handles confidential customer data and trade secrets.",
        question: "How must client records be treated?",
        choices: [
          "A. Stored securely and kept confidential",
          "B. Left on lunch table",
          "C. Posted online"
        ],
        correct: 0
      }
    }
  }
};

/* ============================================================
   2. HIDDEN OBJECTS
============================================================ */

/*
  Coordinates are percentages of the office image.

  The first 8 are the real challenges.
  The others are harmless distractions.

  If an invisible click area does not line up perfectly with
  your image, adjust only left/top/width/height here.
*/

const HOTSPOTS = [
  /* REAL CHALLENGES */
  {
    id: "desk",
    name: "Desk / Laptop",
    challenge: true,
    left: 0,
    top: 64,
    width: 32,
    height: 34
  },
  {
    id: "plant",
    name: "Green Plant",
    challenge: true,
    left: 0,
    top: 8,
    width: 15,
    height: 25
  },
  {
    id: "lamp",
    name: "Desk Lamp",
    challenge: true,
    left: 0,
    top: 43,
    width: 18,
    height: 35
  },
  {
    id: "notes",
    name: "Wall Notes",
    challenge: true,
    left: 78,
    top: 2,
    width: 21,
    height: 28
  },
  {
    id: "books",
    name: "Office Books",
    challenge: true,
    left: 62,
    top: 62,
    width: 17,
    height: 32
  },
  {
    id: "notebook",
    name: "Open Notebook",
    challenge: true,
    left: 76,
    top: 76,
    width: 22,
    height: 22
  },
  {
    id: "workspace",
    name: "Workspace",
    challenge: true,
    left: 30,
    top: 70,
    width: 28,
    height: 27
  },
  {
    id: "cabinet",
    name: "Security Cabinet",
    challenge: true,
    left: 79,
    top: 38,
    width: 21,
    height: 48
  },

  /* DISTRACTION OBJECTS */
  {
    id: "clock",
    name: "Wall Clock",
    challenge: false,
    message: "🕐 The clock is ticking. Keep searching.",
    left: 69,
    top: 0,
    width: 13,
    height: 22
  },
  {
    id: "shelf",
    name: "Office Shelf",
    challenge: false,
    message: "📚 The office supplies are neatly organized.",
    left: 0,
    top: 25,
    width: 31,
    height: 20
  },
  {
    id: "binders",
    name: "Colorful Binders",
    challenge: false,
    message: "📁 These files are organized, but there is no clue here.",
    left: 8,
    top: 11,
    width: 20,
    height: 18
  },
  {
    id: "pink-notes",
    name: "Pink Notes",
    challenge: false,
    message: "📝 These notes contain ordinary reminders.",
    left: 4,
    top: 32,
    width: 19,
    height: 14
  },
  {
    id: "filing-drawers",
    name: "Desk Drawers",
    challenge: false,
    message: "🗄️ The drawers are locked. Nothing useful here.",
    left: 1,
    top: 74,
    width: 27,
    height: 22
  },
  {
    id: "small-plant",
    name: "Small Plant",
    challenge: false,
    message: "🌱 A healthy office plant. Keep looking.",
    left: 92,
    top: 32,
    width: 8,
    height: 20
  },
  {
    id: "keys",
    name: "Office Keys",
    challenge: false,
    message: "🔑 These are ordinary office keys — not the Master Key.",
    left: 59,
    top: 82,
    width: 16,
    height: 14
  },
  {
    id: "pink-files",
    name: "Pink File Box",
    challenge: false,
    message: "📚 Important documents are stored here, but no clue was found.",
    left: 65,
    top: 63,
    width: 14,
    height: 22
  },
  {
    id: "desk-pencils",
    name: "Pens and Pencils",
    challenge: false,
    message: "✏️ Just ordinary office supplies.",
    left: 17,
    top: 66,
    width: 8,
    height: 17
  },
  {
    id: "lamp-area",
    name: "Lamp Base",
    challenge: false,
    message: "💡 The lamp is working normally.",
    left: 4,
    top: 62,
    width: 14,
    height: 18
  }
];

/* ============================================================
   3. GAME STATE
============================================================ */

const INITIAL_TIME = 20 * 60;

const state = {
  started: false,
  finished: false,
  team: "teamA",
  score: 0,
  timeRemaining: INITIAL_TIME,
  timerId: null,
  solved: new Set(),
  activeChallenge: null,
  soundEnabled: true
};

/* ============================================================
   4. DOM
============================================================ */

const mainView = document.getElementById("mainView");
const teamText = document.getElementById("teamText");
const clueCount = document.getElementById("clueCount");
const timerText = document.getElementById("timerText");
const scoreText = document.getElementById("scoreText");
const toast = document.getElementById("toast");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalBox = document.getElementById("modalBox");
const soundButton = document.getElementById("soundButton");

/* ============================================================
   5. SOUND EFFECTS
============================================================ */

let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      audioContext = new AudioCtx();
    }
  }

  return audioContext;
}

function tone(frequency, duration, type = "sine", volume = 0.07) {
  if (!state.soundEnabled) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;

  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    ctx.currentTime + duration
  );

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + duration);
}

function soundClick() {
  tone(440, 0.05, "sine", 0.06);
}

function soundCorrect() {
  tone(523.25, 0.15, "triangle", 0.10);

  setTimeout(() => {
    tone(659.25, 0.15, "triangle", 0.10);
  }, 90);

  setTimeout(() => {
    tone(783.99, 0.22, "triangle", 0.10);
  }, 180);
}

function soundWrong() {
  tone(180, 0.22, "sawtooth", 0.08);
}

function soundVictory() {
  [523.25, 659.25, 783.99, 1046.50].forEach((note, index) => {
    setTimeout(() => {
      tone(note, 0.28, "triangle", 0.11);
    }, index * 130);
  });
}

/* ============================================================
   6. HELPERS
============================================================ */

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateHud() {
  const totalSolved = state.solved.size;

  teamText.textContent = GAME_DATA[state.team].name;
  clueCount.textContent = totalSolved;
  timerText.textContent = formatTime(state.timeRemaining);
  scoreText.textContent = state.score;

  timerText.style.color =
    state.timeRemaining <= 60 ? "#ff9ca7" : "";
}

let toastTimer = null;

function showToast(message, type = "info") {
  toast.textContent = message;
  toast.className = `toast ${type}`;

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.className = "toast hidden";
  }, 3000);
}

function getQuestion(objectId) {
  return GAME_DATA[state.team].questions[objectId];
}

function allCluesSolved() {
  return state.solved.size === 8;
}

/* ============================================================
   7. START / RESET
============================================================ */

function renderIntro() {
  mainView.innerHTML = `
    <section class="intro-card">
      <div class="intro-icon">🔎🏢</div>

      <h1>The Office Mystery</h1>

      <p>
        Your team has entered a workplace filled with hidden clues.
        There are no rooms to navigate and no numbered clues to follow.
        Everything you need is hidden inside one office scene.
      </p>

      <div class="rules">
        <div class="rule">
          <b>1. Explore</b>
          Click objects around the office.
        </div>

        <div class="rule">
          <b>2. Investigate</b>
          The correct objects reveal workplace questions.
        </div>

        <div class="rule">
          <b>3. Solve</b>
          Answer all 8 questions to unlock the Master Key.
        </div>
      </div>

      <p>
        Correct answers give <strong>+10 points</strong>.
        Incorrect answers cost <strong>2 points</strong>.
      </p>

      <div class="team-picker">
        <button
          type="button"
          class="team-button ${state.team === "teamA" ? "active" : ""}"
          data-team="teamA"
        >
          🅰 Team Alpha
        </button>

        <button
          type="button"
          class="team-button ${state.team === "teamB" ? "active" : ""}"
          data-team="teamB"
        >
          🅱 Team Bravo
        </button>
      </div>

      <br>

      <button id="startButton" type="button" class="primary-button">
        🔍 START THE INVESTIGATION
      </button>
    </section>
  `;

  document.querySelectorAll(".team-button").forEach(button => {
    button.addEventListener("click", () => {
      state.team = button.dataset.team;
      soundClick();
      renderIntro();
      updateHud();
    });
  });

  document.getElementById("startButton").addEventListener("click", startGame);
}

function resetState() {
  clearInterval(state.timerId);

  state.started = false;
  state.finished = false;
  state.score = 0;
  state.timeRemaining = INITIAL_TIME;
  state.solved = new Set();
  state.activeChallenge = null;
}

function startGame() {
  soundClick();

  resetState();
  state.started = true;

  updateHud();
  renderGameScene();
  startTimer();
}

function resetGame() {
  soundClick();
  resetState();
  updateHud();
  renderIntro();
}

/* ============================================================
   8. TIMER
============================================================ */

function startTimer() {
  clearInterval(state.timerId);

  state.timerId = setInterval(() => {
    if (state.finished) return;

    if (state.timeRemaining > 0) {
      state.timeRemaining -= 1;
      updateHud();
    }

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerId);
      showTimeUp();
    }
  }, 1000);
}

/* ============================================================
   9. RENDER SINGLE OFFICE SCENE
============================================================ */

function renderGameScene() {
  if (state.finished) return;

  const solvedCount = state.solved.size;

  mainView.innerHTML = `
    <div class="game-intro">
      <div>
        <h1>🔎 Investigate the Office</h1>
        <p>
          Click objects around the scene. The hidden clues have no numbers.
          Some objects are only distractions.
        </p>
      </div>

      <div class="progress-pill">
        Hidden clues: ${solvedCount}/8
      </div>
    </div>

    <section class="scene-shell" aria-label="Interactive office scene">

      <img
        class="scene-image"
        src="assets/images/mystery_room_office_shelves.png"
        alt="Office mystery scene"
      >

      <div class="scene-overlay"></div>

      ${HOTSPOTS.map(object => {
        const solved = object.challenge && state.solved.has(object.id);

        return `
          <button
            type="button"
            class="hotspot ${object.challenge ? "challenge" : "decorative"} ${solved ? "solved" : ""}"
            data-object="${object.id}"
            style="
              left:${object.left}%;
              top:${object.top}%;
              width:${object.width}%;
              height:${object.height}%;
            "
            aria-label="Investigate ${object.name}"
            title="Investigate"
          >
            ${solved ? '<span class="solved-badge">✓</span>' : ""}
          </button>
        `;
      }).join("")}

      <div class="scene-hint">
        💡 Tip: The correct objects are not numbered. Explore carefully.
      </div>
    </section>

    <div class="scene-bottom">
      <div class="bottom-info">
        <strong>${solvedCount}/8 clues discovered.</strong>
        ${
          allCluesSolved()
            ? " All clues are solved — the Master Key is ready!"
            : " Keep searching the same office scene."
        }
      </div>

      <button
        id="masterButton"
        class="master-button"
        type="button"
        ${allCluesSolved() ? "" : "disabled"}
      >
        🔑 ${allCluesSolved() ? "USE MASTER KEY" : "MASTER KEY LOCKED"}
      </button>
    </div>
  `;

  document.querySelectorAll(".hotspot").forEach(button => {
    button.addEventListener("click", () => {
      const object = HOTSPOTS.find(
        item => item.id === button.dataset.object
      );

      if (object) {
        investigateObject(object);
      }
    });
  });

  const masterButton = document.getElementById("masterButton");

  if (masterButton) {
    masterButton.addEventListener("click", attemptMasterKey);
  }
}

/* ============================================================
   10. OBJECT INVESTIGATION
============================================================ */

function investigateObject(object) {
  soundClick();

  if (object.challenge) {
    if (state.solved.has(object.id)) {
      showToast("✅ You already discovered this clue.", "info");
      return;
    }

    openQuestionModal(object);
    return;
  }

  showToast(object.message, "info");
}

/* ============================================================
   11. QUESTION MODAL
============================================================ */

function openQuestionModal(object) {
  const question = getQuestion(object.id);

  state.activeChallenge = object.id;

  modalBackdrop.className = "modal-backdrop";

  modalBox.innerHTML = `
    <div class="modal-header">
      <div>
        <div class="discovery-tag">🔍 HIDDEN CLUE FOUND</div>
        <h2>${question.title}</h2>
      </div>

      <button
        id="closeModalButton"
        class="close-modal"
        type="button"
        aria-label="Close"
      >
        ×
      </button>
    </div>

    <div class="scenario">
      <strong>Workplace Scenario</strong><br><br>
      ${question.scenario}
    </div>

    <div class="question">
      ${question.question}
    </div>

    <div class="choices" id="choices">
      ${question.choices.map((choice, index) => `
        <button
          type="button"
          class="choice-button"
          data-index="${index}"
        >
          ${choice}
        </button>
      `).join("")}
    </div>

    <div class="modal-footer">
      <button id="returnButton" type="button" class="secondary-button">
        ← Return to Office
      </button>
    </div>
  `;

  document
    .getElementById("closeModalButton")
    .addEventListener("click", closeModal);

  document
    .getElementById("returnButton")
    .addEventListener("click", closeModal);

  document.querySelectorAll("#choices .choice-button").forEach(button => {
    button.addEventListener("click", () => {
      answerQuestion(object.id, Number(button.dataset.index), button);
    });
  });
}

function answerQuestion(objectId, selectedIndex, clickedButton) {
  const question = getQuestion(objectId);

  if (selectedIndex === question.correct) {
    soundCorrect();

    if (!state.solved.has(objectId)) {
      state.solved.add(objectId);
      state.score += 10;
    }

    updateHud();

    modalBox.innerHTML = `
      <div class="success-panel">
        <div class="big-icon">🎉🔎</div>

        <div class="discovery-tag">CLUE DISCOVERED</div>

        <h2>Correct!</h2>

        <p>
          You solved the <strong>${question.title}</strong> clue.
        </p>

        <p>
          <strong>+10 points</strong>
        </p>

        <div class="modal-footer">
          <button id="continueButton" type="button" class="primary-button">
            Continue Investigating
          </button>
        </div>
      </div>
    `;

    document
      .getElementById("continueButton")
      .addEventListener("click", () => {
        closeModal();

        if (allCluesSolved()) {
          setTimeout(() => {
            showToast(
              "🎉 All 8 clues discovered! The Master Key is ready.",
              "success"
            );
          }, 150);
        } else {
          showToast(
            `✅ Clue discovered! +10 points. ${state.solved.size}/8 complete.`,
            "success"
          );
        }
      });

    return;
  }

  soundWrong();

  state.score = Math.max(0, state.score - 2);
  updateHud();

  clickedButton.classList.add("wrong");
  clickedButton.disabled = true;

  showToast("❌ Incorrect! -2 points. Try another answer.", "warn");
}

/* ============================================================
   12. CLOSE MODAL
============================================================ */

function closeModal() {
  modalBackdrop.className = "modal-backdrop hidden";
  modalBox.innerHTML = "";
  state.activeChallenge = null;
  renderGameScene();
}

/* Close when clicking outside the modal */
modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

/* Escape key */
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modalBackdrop.classList.contains("hidden")) {
    closeModal();
  }
});

/* ============================================================
   13. MASTER KEY
============================================================ */

function attemptMasterKey() {
  soundClick();

  if (!allCluesSolved()) {
    showToast(
      `🔒 Master Key locked. You have ${state.solved.size}/8 clues.`,
      "warn"
    );
    return;
  }

  soundVictory();
  showVictory();
}

/* ============================================================
   14. VICTORY
============================================================ */

function showVictory() {
  state.finished = true;
  clearInterval(state.timerId);

  updateHud();

  mainView.innerHTML = `
    <section class="intro-card victory-panel">
      <div class="big-icon">🎉🏆🔑</div>

      <div class="discovery-tag">INVESTIGATION COMPLETE</div>

      <h1>Mystery Solved!</h1>

      <p>
        <strong>${GAME_DATA[state.team].name}</strong>
        discovered all 8 hidden workplace clues and used the Master Key.
      </p>

      <div class="stats">
        <div class="stat">
          <span>SCORE</span>
          <strong>${state.score}</strong>
        </div>

        <div class="stat">
          <span>CLUES</span>
          <strong>8/8</strong>
        </div>

        <div class="stat">
          <span>TIME LEFT</span>
          <strong>${formatTime(state.timeRemaining)}</strong>
        </div>
      </div>

      <button id="playAgainButton" type="button" class="primary-button">
        🔄 PLAY AGAIN
      </button>
    </section>
  `;

  document
    .getElementById("playAgainButton")
    .addEventListener("click", resetGame);
}

/* ============================================================
   15. TIME UP
============================================================ */

function showTimeUp() {
  state.finished = true;
  clearInterval(state.timerId);
  soundWrong();

  mainView.innerHTML = `
    <section class="intro-card timeup-panel">
      <div class="big-icon">⏰</div>

      <div class="discovery-tag">TIME EXPIRED</div>

      <h1>Time's Up!</h1>

      <p>
        The investigation ended before all clues were discovered.
      </p>

      <div class="stats">
        <div class="stat">
          <span>SCORE</span>
          <strong>${state.score}</strong>
        </div>

        <div class="stat">
          <span>CLUES</span>
          <strong>${state.solved.size}/8</strong>
        </div>

        <div class="stat">
          <span>TIME LEFT</span>
          <strong>00:00</strong>
        </div>
      </div>

      <button id="tryAgainButton" type="button" class="primary-button">
        🔄 TRY AGAIN
      </button>
    </section>
  `;

  document
    .getElementById("tryAgainButton")
    .addEventListener("click", resetGame);
}

/* ============================================================
   16. SOUND BUTTON
============================================================ */

soundButton.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  soundButton.textContent = state.soundEnabled ? "🔊" : "🔇";

  if (state.soundEnabled) {
    soundClick();
  }
});

/* ============================================================
   17. INITIALIZE
============================================================ */

resetState();
updateHud();
renderIntro();
