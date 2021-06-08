import axios from 'axios'

const searchEl=document.querySelector('.material-icons')
searchEl.addEventListener("click", onsearch)
function onsearch(){
  realsearch()
}
function realsearch(){
  const barVal=document.querySelector('.search__bar').value;
  axios
    .get('https://www.omdbapi.com/?i=tt3896198&apikey=117ae0ed&s='+barVal)
    .then(function(res){
      
      const wrapperEl=document.querySelector('.content__wrapper')
      var i;
      for(i=0; i<res.data.Search.length; i++){
        const liEl=document.createElement('li')
        wrapperEl.appendChild(liEl)
        const imgEl=document.createElement('img')
        imgEl.className="content__img" +" "
        imgEl.classList.add('adding')
        imgEl.src = res.data.Search[i].Poster
        const linking =res.data.Search[i].imdbID
        imgEl.addEventListener('click', function(){
          location.href="https://www.imdb.com/title/"+linking
        })
  
        const subEl=document.createElement('div')
        subEl.className="content__sub"+" "
        subEl.classList.add('adding')
        subEl.textContent = res.data.Search[i].Title
        
        liEl.appendChild(imgEl)
        liEl.appendChild(subEl)
    }
    })
}