const minhaLista = document.getElementsByTagName("LI")
for (let i = 0; i < minhaLista.length; i++){
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    minhaLista[i].appendChild(span);
    fechar_e_editar(minhaLista[i])
}

function fechar_e_editar(li) {
    const close = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    close.className = "close";
    close.appendChild(txt);
    li.appendChild(close);

    close.onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }

    const edit = document.createElement("BUTTON");
    const editarTexto = document.createTextNode("Editar");
    edit.className = "editButton";
    edit.appendChild(editarTexto);
    li.appendChild(edit);

    edit.onclick = function() {
        let newText = prompt("Editar", li.firstChild.textContent);
        if(newText !== null && newText.trim() !== "") {
            li.firstChild.textContent = newText;
        }
    }
}

const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none"
    }
}

const lista = document.querySelector('ul');
lista.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }    
},false);

function novoElemento() {
    const li = document.createElement("li")
    const inputValue = document.getElementById("Entrada").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Escreva uma tarefa!");
    } else {
        document.getElementById("minhaUl").appendChild(li);
        fechar_e_editar(li);
    }
    document.getElementById("Entrada").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}