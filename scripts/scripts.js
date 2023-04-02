
//1.  on page load - haz algo 


window.addEventListener("load", async () => {

    await renderProjects()



});

//2.  Promesa para devolver algo y devolverlo si existe como promesa


const url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2 ";

async function fetchProjects() {
    let response = await fetch(url);

    let data = await response.json();
    console.log(data);

    data.sort((a, b) => {
        return a.uuid - b.uuid;
    });

    console.log("data", data);
    return data.slice(0, 3);

}

//3.  Filtrar data con slice etc y obtener la info correcta 

/*const fetchProjects = last3;
last3 = data.reduce(function (accumulator, valor) {

    return last3
    console.log(sumWithInitial);
});
*/


document.querySelector

//4.  Meter la info en la pagina en la orden requerida 

async function renderProjects() {
    let projects = await fetchProjects();
    let html = '';
    projects.forEach(project => {
        let htmlSegment = `<div class="project1">
                            <img src="${project.image}" >
                            
                            <div class='projectText'>
                            
                            <h4 class="bodyIntrotextMedium"> ${project.name}  </h4>
                            
                            <p class="headlinetextRegular">${project.description} </p>
                            
                           <a class="headLinetextRegular" href="./project.html?uuid=${project.uuid}"> learn more</a>
                            
                            
                            </div>
                        </div>`;

        html += htmlSegment;
    });

    let projectsWrap = document.querySelector('.projectsWrap');
    projectsWrap.innerHTML = html;
    return projectsWrap;
}

renderProjects();




// 

//const API_URL = "https://jsonplaceholder.typicode.com/posts";
// const button = document.getElementById("check-news");
// button.addEventListener("mouseleave", () => {
//   alert("HOLA");
// });
/**
 * Fetch and return the posts
 */
/*async function fetchPosts(uuid) {
    const result = await fetch(API_URL);
    if (!result.ok) {
        alert("Sorry! Ask the TA");
    }
    //   result.json().then(function (data) {
    //     console.log(data);
    //   });
    const data = await result.json();
    const filteredNoticias = data.filter(function (noticia) {
        return noticia.id === uuid;
    });
    if (filteredNoticias.length === 0) {
        // alert("PAGINA NO ENCONTRADA")
        // redirect a 404
    }
    return filteredNoticias[0];
}
/**
 * Print posts in the div
 *
 * @param {array} posts
 */
/* function printPosts(posts) { }
window.addEventListener("load", async () => {
    //   const posts = await fetchPosts();
    //   const top = topPosts(posts);
    //   printPosts(top);
    // 1. Obtener parámetro
    const params = new URLSearchParams(window.location.search);
    const id = params.get("noticia");
    console.log(id);
    const noticia = await fetchPosts(id);
    printNoticia(noticia);
});











// to filter - use slice 




// part 3 


/*const params= new URLSearchParams(window.location.search);
const id = params.get('myid') 
console.log (params); 


const data= await result.json ();

const filterNoticias= data.filter (function(noticia))

if (noticia.id=== uuid){
return true


if (filteredNoticias.length ===0){

    // add 404 page redirect 
}
return filteredNoticias []
}


const noticia = 

*/