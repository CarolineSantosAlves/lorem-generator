let conteudo = document.getElementById('agoravai');
//colocar a função async dentro de uma func normal?
document.getElementById('formNum').addEventListener('submit', getLorem);

async function getLorem(){
    try{
        const response =  await fetch('http://localhost:3000');
        const data = await response.json();
        show(data);
        console.log(data)
    }catch(error){
        console.log(error)
    }
} 

function teste(){
    conteudo.innerText = 'bla'
}

//getLorem(); // chamar a função com o submit aqui?
// mudar para submit e colocar action
function show(lorem){
    let lo = lorem;
    conteudo.innerHTML = lo;
}