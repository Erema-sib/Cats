// Удаление карточки

function deleteCatButtonFun(del){
    if (confirm("Хотите удалить котика?")) {
        event.stopPropagation();
    fetch(`https://sb-cats.herokuapp.com/api/2/erema-sib/delete/${del}`, {
    method: "DELETE"
    })
    .then((resp) => {
        if (resp.ok) {
            return resp.json();
        }
        else { return Promise.reject(resp) }
    })
    .then((data) => {
        if (data.message === 'ok'){
            runUpdateCats();
            document.querySelector('.popup-back').remove();
            document.querySelector('.popup').remove();
        }
        
    })
    .catch((error) => {
        console.log(error)
    })
        }
    
};




