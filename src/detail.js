var queryString = new URLSearchParams(window.location.search)
db.collection('photo').doc(queryString.get('doc')).get().then((result)=>{
  console.log(result.data())
  $('#contents').html(`
  <div style="border: 1px black solid; width: 64vw; height: 36vw;" ><img style="object-fit: contain;height: 100%;width: 100%;" src="${result.data().src}" alt=""></div>
  `)
}) 