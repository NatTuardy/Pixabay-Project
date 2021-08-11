import logo from "./pixabay.jpg";

class createLogo {
  render() {
    const projectLogo = document.createElement("img");
    projectLogo.className = "pr-logo mx-auto d-block";
    projectLogo.src = `${logo}`;
    document.body.insertAdjacentElement("afterbegin", projectLogo);
  }
}

const logotype = new createLogo();
logotype.render();
