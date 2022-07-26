const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    console.log('click!')
    makeReq()
})

async function makeReq(){

  const option1 = document.querySelector("#option1").value;
  const option2 = document.querySelector("#option2").value;
  console.log(option1,option2)
  const res = await fetch(`/decide?option1=${option1}&option2=${option2}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#response").textContent = data.result
}