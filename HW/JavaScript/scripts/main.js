document.addEventListener("DOMContentLoaded", () => {
  const dailyQuoteEl = document.querySelector("#daily-quote-text");
  const randomQuoteBtn = document.querySelector("#random-quote-btn");
  const focusModeToggleBtn = document.querySelector("#focus-mode-toggle");

  if (dailyQuoteEl) {
    const dailyQuotes = {
      0: "Without indifference to material gain, one cannot clarify one’s ambition; without inner tranquility, one cannot achieve far-reaching goals.— Zhuge Liang",
      1: "One should set one’s aspirations high and far-reaching.— Zhuge Liang",
      2: "Without learning, one cannot broaden one’s talents; without ambition, one cannot fulfill one’s learning.— Zhuge Liang",
      3: "The ancients valued a second of time more than a pound of jade, for they feared wasting the brief moments of life.— Cao Pi",
      4: "A true hero is one who bears great ambition in his heart, sound strategy in his mind, the capacity to embrace the cosmos, and the will to command heaven and earth.— Cao Cao",
      5: "A person of great tolerance is destined to achieve great things.— Sima Yi (Sima Zhongda)",
      6: "A man of lofty ambition should be broad-minded and must never belittle himself.— Zhuge Liang"
    };

    const today = new Date().getDay();
    if (dailyQuotes.hasOwnProperty(today)) {
      dailyQuoteEl.textContent = dailyQuotes[today];
    } else {
      dailyQuoteEl.textContent = "";
    }

    const randomQuotes = [
      "Self-discipline is cultivated through tranquility, and virtue is nurtured through frugality.— Zhuge Liang",
      "Do not fail to do a good deed just because it is small; do not commit an evil act just because it is minor.— Liu Bei",
      "One who does not learn, though alive, is but a walking corpse.— Zhuge Liang",
      "A second of time is worth more than a pound of jade, for time is hard to gain and easy to lose.— Zhuge Liang",
      "Plans are made by men; success is decreed by Heaven. One must not force it.— Luo Guanzhong (Romance of the Three Kingdoms)",
      "An old steed in the stable still dreams of a thousand miles; a hero in his twilight years still harbors boundless ambition.— Cao Cao",
      "If a great man cannot establish merit and achievement in the world, how is he different from withered grass and rotting wood?— Luo Guanzhong (Romance of the Three Kingdoms)",
      "A true man with talent to govern the world—how could he grow old in idle seclusion?— Luo Guanzhong (Romance of the Three Kingdoms)",
      "The wise seek substance; the foolish contend for empty fame.— Sima Yi (Romance of the Three Kingdoms)",
      "I seek to uphold righteous justice across the land and rescue the common people from suffering and chaos.— Zhuge Liang (Romance of the Three Kingdoms)"
    ];

    if (randomQuoteBtn) {
      randomQuoteBtn.addEventListener("click", () => {
        const index = Math.floor(Math.random() * randomQuotes.length);
        dailyQuoteEl.textContent = randomQuotes[index];
      });
    }
  }

  if (focusModeToggleBtn) {
    focusModeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("focus-mode");
    });
  }
});
