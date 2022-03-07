// BOTÃO PARA PASSAR PARA O PRÓXIMO CONTEUDO
function proxConteudo(conteudoAgora,proximoConteudo){
    document.querySelector('.' + conteudoAgora).classList.add('escondido');
    document.querySelector('.' + proximoConteudo).classList.remove('escondido');
}


//-------------- WINDOW & DOCUMENT ---------------
function openWindow(){
    document.querySelector('.windowdocument .window').classList.remove('escondido');
    document.querySelector('.windowdocument div').classList.add('escondido');
}

function openDocument(){
    document.querySelector('.windowdocument .document').classList.remove('escondido');
    document.querySelector('.windowdocument div').classList.add('escondido');
}

function voltar(classe, anterior){
    document.querySelector('.' + classe).classList.add('escondido');
    document.querySelector(`.${anterior} div`).classList.remove('escondido');
}


//--------- EXEMPLOS WINDOW ---------------
let myWindow;

function abrir(){
    myWindow = window.open('', '', 'width=400, height=200');
}

function fechar(){
    window.close();
}

function mover(){
    myWindow.moveTo(500, 100);
}

function resize(){
    myWindow.resizeTo(800,600);
}

//--------------- CASOS PRÁTICOS getElementById  getElementsByClassName, querySelector ou querySelectorAll---------------
function getId(){
    document.getElementById('getid').innerHTML = '- PEGUEI COM O ID';
}

function getClass(){
    const getclass = document.getElementsByClassName('getclass');

    for(let i = 0;i<getclass.length;i++){
        getclass[i].innerHTML = '- AGORA EU QUE PEGUEI TODOS COM A CLASSE';
    }
}

function selector(){
    document.querySelector('.selector').innerHTML = '- EU PEGO EH DE QUALQUER TIPO';
}

function selectorAll(){
    const getAll = document.querySelectorAll('.get li');

    for(let i = 0;i<getAll.length;i++){
        getAll[i].innerHTML = '- E EU QUE PEGO TODOS ATÉ COM A TAG';
    }
}

//--------------- TESTE innerHTML,innerText ou textContent ---------------
function test(classe){
    document.querySelector(`.${classe} .escondido`).classList.remove('escondido');
    document.querySelector(`.${classe} div`).classList.add('escondido');
}

function getinnerText() {
    let text = document.getElementById("paragrafo").innerText;
    document.getElementById("resultado").innerText = text;
  }
  
  function getinnerHTML() {
    let text = document.getElementById("paragrafo").innerHTML;
    document.getElementById("resultado").innerText = text;
  }
  
  function gettextContent() {
    let text = document.getElementById("paragrafo").textContent;
    document.getElementById("resultado").innerText = text;
  }

  //--------------- TESTE nodeList ---------------

  let node;
  let array;

  function mostrarNode(){
    node = document.querySelectorAll('.testeNode li');
    for(let i = 0;i<node.length;i++){
    document.querySelector('.mostrarNode').innerHTML += node[i].innerText+ ' ';
    }
  }

  function mostrarArray(){
    array = Array.from(node)
    for(let i = 0;i<array.length;i++){
    document.querySelector('.mostrarArray').innerHTML += array[i].innerHTML+ ' ';
    }
  }

  function manipularListas(){

      array.forEach(element => {element.innerHTML += 'Mexi aqui';})
      

        // const node1 = node.map(index => { 
        //     index += 'mexi aqui';
        //     return index;
        // });

    document.querySelector('.mostrarArray').innerHTML = ' ';
    document.querySelector('.mostrarNode').innerHTML = ' ';
    for(let i = 0;i<array.length;i++){
        document.querySelector('.mostrarArray').innerHTML += array[i].innerHTML + ' ';
    }
    for(let i = 0;i<node.length;i++){
        document.querySelector('.mostrarNode').innerHTML += node1[i].innerHTML+ ' ';
        }
  }

  //--------------- TESTE createElement e appendChild ---------------
  cont = 0;
  function adicionarElemento () {
    let NovoElemento = document.createElement("li");
    cont++;
    let conteudoNovo = document.createTextNode(`- Elemento numero ${cont}`);
    NovoElemento.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var lista = document.querySelector(".lista");
    lista.appendChild(NovoElemento);
  }

