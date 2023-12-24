$('#login').click(()=>{
    const email = $('#id').val();
    const pw = $('#pw').val();
    firebase.auth().signInWithEmailAndPassword(email, pw).then(()=>{
        window.location.href='youtube.html'
    })
})