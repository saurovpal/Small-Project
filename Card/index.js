// const posts = [
//     {
//         title:"this is  card 1",
//         body:"this id card 1"
//     },
//     {
//         title:"this is  card 2",
//         body:"this id card 2"
//     },
//     {
//         title:"this is  card 3",
//         body:"this id card 3"
//     },
//     {
//         title:"this is  card 4",
//         body:"this id card 4"
//     },
//     {
//         title:"this is  card 5",
//         body:"this id card 5"
//     },
//     {
//         title:"this is  card 6",
//         body:"this id card 6"
//     },
//     {
//         title:"this is  card 7",
//         body:"this id card 7"
//     },
//     {
//         title:"this is  card 8",
//         body:"this id card 8"
//     },
//     {
//         title:"this is  card 9",
//         body:"this id card 9"
//     },
//     {
//         title:"this is  card 10",
//         body:"this id card 10"
//     },
// ];

// <div class="post">
//         <h3 class="post_title">post titile</h3>
//         <p class="post_body">post description</p>
//     </div>

  const facthData = async (config) => {
    try{
       const res = await axios(config);
       return res.data;
    }
    catch (errr){
       throw  Error ("data is not fetched");
    }
   
  };
const card=document.querySelector(".card");

const  loadData = async() => {
    const posts = await  facthData("https://jsonplaceholder.typicode.com/posts");

    posts.map(posts => {
   const postElement=document.createElement("div");
     postElement.classList.add("post");
     postElement.innerHTML=`
           <h3 class="post_title">${posts.title}</h3>
        <p class="post_body">${posts.body}</p>
     `;
     card.appendChild(postElement);
    })
}
loadData();










