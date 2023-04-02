
window.addEventListener("load", async () => {
    await renderProjects()
    const urlProject = new URLSearchParams(window.location.search)
    const uuid = urlProject.get("uuid");
    console.log(uuid);
    await fetchContent(uuid);

});
 
const url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2 ";

async function fetchContent (uuid) {
    let content = await fetch(url)
    let data = await content.json();
    const uniqueProject = data.find(function(project){
        return project.uuid === uuid;
    });
    console.log(uniqueProject)
    document.getElementById("projects-height").innerHTML = uniqueProject.name;
    document.getElementById("project-description").innerHTML = uniqueProject.description;
    document.getElementById("project-date").innerHTML = uniqueProject.completed_on;
    document.getElementById("project-content").innerHTML = uniqueProject.content;
    document.getElementById("project-image").src = uniqueProject.image;
}

async function fetchProjects() {
    let response = await fetch(url);

    let data = await response.json();
    console.log(data);
    data.sort(() => Math.random() - 0.5);
    console.log("data", data);
    return data.slice(0, 3);
}

async function renderProjects() {

    let projects = await fetchProjects();
    let html = " ";
    projects.forEach(project => {

        let htmlSegment = `<div class="project1">
                            <img src="${project.image}" >
                            
                            <div class='projectText'>
                            
                            <h4 class="bodyIntrotextMedium"> ${project.name}  </h4>
                            
                            <p class="headlinetextRegular">${project.description} </p>
                            
                            <a class="headLinetextRegular" href="./project.html?uuid=${project.uuid}"> learn more</a>
                            
                            
                            </div>
                        </div>


                        `;


        html += htmlSegment;
    });
    let projectsWrap = document.querySelector('.projectsWrap');
    projectsWrap.innerHTML = html;
}
renderProjects();
