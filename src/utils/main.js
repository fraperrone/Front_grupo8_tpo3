(function runProfileAnimations() {
  function startAll() {
    const profiles = document.querySelectorAll(".profile");
    if (!profiles.length) return;

    profiles.forEach((profile) => {
      profile.classList.add("pre-enter");

      setTimeout(() => profile.classList.add("on-enter"), 500);
      setTimeout(() => profile.classList.remove("pre-enter", "on-enter"), 3000);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startAll);
  } else {
    startAll();
  }
})();