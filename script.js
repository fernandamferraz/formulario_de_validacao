const form = document.getElementById('form-verifica');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
let formValido = false;


function validaNumero(campoA, campoB){
    return Number(campoB) > Number(campoA);
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const mensagemSucesso =`Formulário válido: O valor <b>${campoB.value}</b> é maior que <b>${campoA.value}</b>`;

    formValido = validaNumero(campoA.value, campoB.value)

    if (validaNumero(campoA.value, campoB.value)){
    const containerMensagemSucesso = document.querySelector('.sucess-mensage')
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';

    campoA,campoB.style.border = '1px solid #ccc';
    document.querySelector('.error-mensage').style.display = 'none';

    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-mensage').style.display = 'block';
    }

});

campoB.addEventListener('keyup', function(event) {
    formValido = validaNumero(campoA.value, campoB.value);

if (!formValido) { 
        campoB.classList.add('error');
        document.querySelector('.error-mensage').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-mensage').style.display = 'none';
    }

});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    form.reset();

    campoB.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
});


