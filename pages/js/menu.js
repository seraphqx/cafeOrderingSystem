function changePage(page){
   if(page != "home"){
    window.location.href = `/pages/${page}.html`
   } else {
        window.location.href = "../index.html"

   }
}