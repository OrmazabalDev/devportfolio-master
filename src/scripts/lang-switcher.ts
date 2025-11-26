// Language switcher functionality
export function initLanguageSwitcher() {
  const currentLang = localStorage.getItem("preferredLang") || "es";
  
  // Apply language on page load
  applyLanguage(currentLang);
  
  // Listen for language changes
  window.addEventListener("languageChange", ((event: CustomEvent) => {
    applyLanguage(event.detail.lang);
  }) as EventListener);
}

function applyLanguage(lang: string) {
  // Update title in Hero
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    const text = heroTitle.getAttribute(`data-${lang}`);
    if (text) heroTitle.textContent = text;
  }
  
  // Update About Me
  const aboutText = document.getElementById("about-text");
  if (aboutText) {
    const text = aboutText.getAttribute(`data-${lang}`);
    if (text) aboutText.textContent = text;
  }
  
  // Update Projects
  document.querySelectorAll("[data-project]").forEach((el, index) => {
    const projectName = el.querySelector("[data-project-name]");
    const projectDesc = el.querySelector("[data-project-desc]");
    
    if (projectName) {
      const text = projectName.getAttribute(`data-${lang}`);
      if (text) projectName.textContent = text;
    }
    
    if (projectDesc) {
      const text = projectDesc.getAttribute(`data-${lang}`);
      if (text) projectDesc.textContent = text;
    }
  });
  
  // Update Experience
  document.querySelectorAll("[data-experience]").forEach((el) => {
    const title = el.querySelector("[data-exp-title]");
    const dateRange = el.querySelector("[data-exp-date]");
    const bullets = el.querySelectorAll("[data-exp-bullet]");
    
    if (title) {
      const text = title.getAttribute(`data-${lang}`);
      if (text) title.textContent = text;
    }
    
    if (dateRange) {
      const text = dateRange.getAttribute(`data-${lang}`);
      if (text) dateRange.textContent = text;
    }
    
    bullets.forEach((bullet) => {
      const text = bullet.getAttribute(`data-${lang}`);
      if (text) bullet.textContent = text;
    });
  });
  
  // Update Education
  document.querySelectorAll("[data-education]").forEach((el) => {
    const degree = el.querySelector("[data-edu-degree]");
    const achievements = el.querySelectorAll("[data-edu-achievement]");
    
    if (degree) {
      const text = degree.getAttribute(`data-${lang}`);
      if (text) degree.textContent = text;
    }
    
    achievements.forEach((achievement) => {
      const text = achievement.getAttribute(`data-${lang}`);
      if (text) achievement.textContent = text;
    });
  });
}

// Initialize on DOM load
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
}
