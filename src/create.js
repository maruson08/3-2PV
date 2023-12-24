firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
        localStorage.setItem('name', user.displayName)
        localStorage.setItem('uid', user.uid);
    }
  })
$('#upload').click(()=>{
    const storageRef = storage.ref();
    const title = $('#title').val();
    const description = $('#description').val();
    const file = document.querySelector('#file').files[0];
    const loc = storageRef.child('image/'+file.name + toString(new Date()) + localStorage.getItem('uid'));
    let upload = loc.put(file);

    upload.on('state_changed',

    null,

    (error)=>{
        console.error('실패 사유는', error)
    },

    ()=>{
        upload.snapshot.ref.getDownloadURL().then((url)=>{
            db.collection('photo').add({ 'title' : title, 'src': url, 'description': description, 'date': new Date(), 'uploader': localStorage.getItem('name')}).then(()=>{
                alert('Upload completed!');
                window.location.href = 'youtube.html';
            }).catch((err)=>{alert(err)});
        })
    }

    )






    
})