var minhaLista = document.getElementsByTagName("LI")
for (let i = 0; i < minhaLista.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    minhaLista[i].appendChild(span);
    fechar_e_editar(minhaLista[i])
}

function fechar_e_editar(li) {
    var close = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    close.className = "close";
    close.appendChild(txt);
    li.appendChild(close);

    close.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }

    var edit = document.createElement("BUTTON");
    var editarTexto = document.createTextNode("Editar");
    edit.className = "editButton";
    edit.appendChild(editarTexto);
    li.appendChild(edit);

    edit.onclick = function() {
        var newText = prompt("Editar", li.firstChild.textContent);
        if(newText !== null && newText.trim() !== "") {
            li.firstChild.textContent = newText;
        }
    }
}

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"
    }
}

var lista = document.querySelector('ul');
lista.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }    
},false);

function novoElemento() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("Entrada").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Escreva uma tarefa!");
    } else {
        document.getElementById("minhaUl").appendChild(li);
        fechar_e_editar(li);
    }
    document.getElementById("Entrada").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}