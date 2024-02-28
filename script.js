const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById('value');
    let descricao = '';

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5)
    {
        descricao = "Você está abaixo do peso";
    }
        else if (imc >= 18.6 && imc <= 24.9)
        {
            descricao = "Peso normal";
        }
        else if (imc >= 25.0 && imc <= 29.9)
        {
            descricao = "Sobrepeso";
        }
        else if (imc >= 30.0 && imc <= 34.9)
        {
            descricao = "Obesidade grau I";
        }
        else if (imc >= 35.0 && imc <= 39.9)
        {
            descricao = "Obesidade grau II";
        }
        else    
        {
            descricao = "Obesidade grau III";
        }
    value.textContent = imc.replace('.', ',')
    document.getElementById('descricao').textContent = descricao;
} );