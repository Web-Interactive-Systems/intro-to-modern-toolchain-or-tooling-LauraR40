import folio from "./folio.json";
const jsonObject = folio;

const containerEl = document.querySelector("#container");

// Affichage informations noms
const prenom = jsonObject.prenom;
const nom = jsonObject.nom;
const birthday = jsonObject.birthday;

const names = document.createElement("div");
names.id = "names";

names.innerHTML = `
<span id="prenom">Moi c'est ${prenom} ${nom}</span>
</br> 
<span id="birth">Je suis née le ${birthday}</span>`;

containerEl.appendChild(names);

// Skills

const skills = document.createElement("div");
skills.id = "skills";
const skillTitle = document.createElement("h2");
skillTitle.textContent = "Mes Compétences";
containerEl.appendChild(skillTitle);

jsonObject.skills.forEach((skill) => {
  const skillLi = document.createElement("span");
  skillLi.textContent = skill;
  skillLi.classList.add("skill");
  skills.appendChild(skillLi);
});

containerEl.appendChild(skills);

//Projects

const projectTitle = document.createElement("h2");
projectTitle.textContent = "Mes Projets";
containerEl.appendChild(projectTitle);

const projects = document.createElement("div");
projects.id = "projects";

jsonObject.projects.forEach((p) => {
  const article = document.createElement("article");
  article.className = "project";

  const title = document.createElement("h3");
  title.className = "title";
  title.textContent = p.title;

  const description = document.createElement("p");
  description.className = "desc";
  description.textContent = p.description;

  const thumbnail = document.createElement("img");
  thumbnail.className = "img";
  thumbnail.src = new URL(p.thumbnail, import.meta.url);

  article.appendChild(title);
  article.appendChild(description);
  article.appendChild(thumbnail);

  projects.appendChild(article);
});

containerEl.appendChild(projects);

//Hobbies

const hobbies = document.createElement("div");
hobbies.id = "hobbies";

const hobbiesTitle = document.createElement("h2");
hobbiesTitle.textContent = "Mes Passes Temps";
containerEl.appendChild(hobbiesTitle);

jsonObject.hobbies.forEach((hobbie) => {
  const hobbieLi = document.createElement("span");
  hobbieLi.textContent = hobbie;
  hobbieLi.classList.add("hobbie");
  hobbies.appendChild(hobbieLi);
});

containerEl.appendChild(hobbies);
