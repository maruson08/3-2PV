firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      $('#nav').append('<a href="create.html" id="add" class="btn"><span class="material-symbols-outlined">add</span></a>')
      $('#nav').append('<button id="logout" onclick="logout()" class="btn btn-secondary">Log out</button>')
      db.collection('photo').get().then((result)=>{
        result.forEach((doc)=>{
          console.log(doc.data())
          $('#container').append(`<div class="card m-3 ucard">
          <div class="card">
            <img src="${doc.data().src}" class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title"><a href="detail.html?doc=${doc.id}">${doc.data().title}</a></h5>
          </div>
        </div>`)
        })
      })
    
    }
    else{
        $('#container').html('<h1 class="text-center mt-5">Login plz</h1>')
        $('#nav').append(`<a href="login.html" class="btn btn-secondary">Log in</a>`)
    }
  })

  function logout(){
    $("#logout").remove();
    $("#add").remove();
    firebase.auth().signOut();
  }