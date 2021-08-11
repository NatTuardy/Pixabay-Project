import logo from "./pixabay.jpg";

class createLogo {
  render() {
    const mainContainer = document.querySelector("#main-container");
    const projectLogo = document.createElement("img");
    projectLogo.className = "pr-logo mx-auto d-block";
    projectLogo.src = `${logo}`;
    mainContainer.append(projectLogo);
  }
}

export { createLogo };
