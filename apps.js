function add() {
    let input = document.getElementById('input').value
    let cover = document.getElementById('cover')
    console.log(input)

let check = document.createElement('input')
check.setAttribute('id','eqe')
check.setAttribute('type','checkbox')
check.classList.add("me-1")

let label = document.createElement('label')
label.setAttribute('for','eqe')
label.classList.add('text-white')
let matn = document.createTextNode(input)
label.appendChild(matn)



let delet = document.createElement('div')
delet.classList.add("p-3")
delet.classList.add("text-danger")
let deletebtn = document.createTextNode("del")
delet.appendChild(deletebtn)






let adds = document.createElement('div')
adds.classList.add('d-flex')
adds.classList.add('align-items-center')
adds.classList.add('h')

adds.appendChild(check)
adds.appendChild(label)
adds.appendChild(delet)


cover.appendChild(adds)

delet.addEventListener("click",function(event){
    event.target.parentElement.remove()
})
}