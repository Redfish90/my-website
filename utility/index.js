export const glitcheUtils = {
  createSkillsDot() {
    var skills_dotted = document.querySelectorAll(".skills .progress");
    skills_dotted.forEach((skill) => {
      skill.insertAdjacentHTML(
        "beforeend",
        '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      let percentage = skill.getElementsByClassName("percentage")[0];
      percentage.insertAdjacentHTML(
        "beforeend",
        '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      let width = skill.clientWidth,
        da = percentage.getElementsByClassName("da")[0];

      if (da) {
      da.style.width = `${width}px`;
      }
    });
  },
  dotResize() {
    window.addEventListener("resize", () => {
      var skills_dotted = document.querySelectorAll(
        ".skills .progress"
      );
      skills_dotted.forEach((skill) => {
        let width = skill.clientWidth,
          da = skill.getElementsByClassName("da")[0];
        da.style.width = `${width + 1}px`;
      });
    });
  },
};
