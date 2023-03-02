function saveToLocalStorage(event){
    event.preventDefault();
    const a=event.target.Amount.value;
    const d=event.target.disc.value;
    const f=event.target.detail.value;
    const obj={
        a,
        d,
        f
    }
    localStorage.setItem(obj.d,JSON.stringify(obj))
    showDetails(obj)
}
function showDetails(obj){
const p=document.getElementById('print')
const c=document.createElement('li')
c.textContent=obj.a+'-'+obj.d+'-'+obj.f
    const DeleteItem=document.createElement('input')
    DeleteItem.type='button'
    DeleteItem.value='Delete'
    DeleteItem.onclick=()=>{
        localStorage.removeItem(obj.d)
        p.removeChild(c)
    }

    const EditItem=document.createElement('input')
    EditItem.type='button'
    EditItem.value='Edit'
    EditItem.onclick=()=>{
        localStorage.removeItem(obj.d)
        p.removeChild(c)
    document.getElementById('Amount').value=obj.a;
    document.getElementById('disc').value=obj.d;
    document.getElementById('detail').value=obj.f;

    }
    c.appendChild(DeleteItem);
    c.appendChild(EditItem);
    p.appendChild(c);

}