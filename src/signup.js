let uname = ''
$('#register').click(()=>{
    const email = $('#id').val();
    const pw = $('#pw').val();
    uname = $('#name').val();
    console.log('ddd')
    firebase.auth().createUserWithEmailAndPassword(email, pw).then((result)=>{
        console.log(result);
        result.user.updateProfile({displayName : uname}).then(()=>{
            window.location.href = 'youtube.html'
        })
    });
})
fb.auth().onAuthStateChanged((user) => {
    if(user){
        db.collection('userdata').docs(user.uid).set({name: uname})
    }
})