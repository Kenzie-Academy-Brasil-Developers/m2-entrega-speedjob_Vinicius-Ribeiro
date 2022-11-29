const section_container1 = document.querySelector(
  ".main__container--section__1"
);

const section_container2 = document.querySelector(
  ".main__container--section__2"
);

const div_scroll = document.createElement("div");
div_scroll.classList.add("scroll__section");

const div_scroll2 = document.createElement("div");
div_scroll2.classList.add("scroll__section");


function addJobFront() {
  for (let i = 0; i < frontEndJobs.length; i++) {

    const section = document.createElement("section");
    section.classList.add("section__1");

    const section_div = document.createElement("div");
    section_div.classList.add("section__1--div");

    const img = document.createElement("img");
    img.src = "./img/icon.svg";

    const div_title = document.createElement("div");
    div_title.classList.add("section__1--title");

    const h2 = document.createElement("h2");

    const p_locade = document.createElement("p");

    const p = document.createElement("p");

    const div = document.createElement("div");

    const span_1 = document.createElement("span");

    const span_2 = document.createElement("span");

    div_title.append(h2, p_locade);

    section_div.append(img, div_title);

    div.append(span_1, span_2);

    section.append(section_div, p, div);

    div_scroll.appendChild(section);

    h2.innerHTML = frontEndJobs[i].title;

    p_locade.innerHTML = frontEndJobs[i].city;

    p.innerHTML = frontEndJobs[i].descrription;

    span_1.innerHTML = frontEndJobs[i].modality[0];

    span_2.innerHTML = frontEndJobs[i].modality[1];

    section_container1.appendChild(div_scroll);
  }
}

addJobFront();

function addJobBack() {
    for (let i = 0; i < backEndJobs.length; i++) {
  
      const section = document.createElement("section");
      section.classList.add("section__1");
  
      const section_div = document.createElement("div");
      section_div.classList.add("section__1--div");
  
      const img = document.createElement("img");
      img.src = "./img/icon.svg";
  
      const div_title = document.createElement("div");
      div_title.classList.add("section__1--title");
  
      const h2 = document.createElement("h2");
  
      const p_locade = document.createElement("p");
  
      const p = document.createElement("p");
  
      const div = document.createElement("div");
  
      const span_1 = document.createElement("span");
  
      const span_2 = document.createElement("span");
  
      div_title.append(h2, p_locade);
  
      section_div.append(img, div_title);
  
      div.append(span_1, span_2);
  
      section.append(section_div, p, div);
  
      div_scroll2.appendChild(section);
  
      h2.innerHTML = backEndJobs[i].title;
  
      p_locade.innerHTML = backEndJobs[i].city;
  
      p.innerHTML = backEndJobs[i].descrription;
  
      span_1.innerHTML = backEndJobs[i].modality[0];
  
      span_2.innerHTML = backEndJobs[i].modality[1];
  
      section_container2.appendChild(div_scroll2);
    }
  }


addJobBack()