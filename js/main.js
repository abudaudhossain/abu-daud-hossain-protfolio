const displayProjectDetails = (details) =>{
    const projectName = document.getElementById('project-name');
    projectName.innerText = details.Name;
    const projctImg = document.getElementById('img-feils');
    projctImg.setAttribute('src', details.imgurl);
  
    console.log(details.imgurl);
}

















const network= {
    id: 1,
    name : "foot Network",
    imgUrl: "./img/foot_network.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi qui amet quas voluptates vitae consectetur quidem minima provident rerum fugit sint dignissimos odio praesentium omnis autem soluta, ipsum doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi qui amet quas voluptates vitae consectetur quidem minima provident rerum fugit sint dignissimos odio praesentium omnis autem soluta, ipsum doloribus",
    technology:' html css Javascript',

};
const food= {
    id: 2,
    name : "foot Network",
    imgUrl: "./img/foot_network.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi qui amet quas voluptates vitae consectetur quidem minima provident rerum fugit sint dignissimos odio praesentium omnis autem soluta, ipsum doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi qui amet quas voluptates vitae consectetur quidem minima provident rerum fugit sint dignissimos odio praesentium omnis autem soluta, ipsum doloribus",
    technology:' html css Javascript',

}

const projcts = [network, food]
console.log(projcts);