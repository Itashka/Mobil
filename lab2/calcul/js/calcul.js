let sym = ['AC', '+', '-', 'C', '7', '8', '9', 'Pi', '4', '5', '6', '*', '1', '2', '3', '/', '.', '0', '='];
let flag = true;
let Pi = Math.PI;
let calcul = document.getElementsByClassName('calcul')[0];
    
let text = document.createElement('p');
text.className = 'text_area';
calcul.appendChild(text);

sym.forEach(function (symbol) {
    var symbolElement = document.createElement('div');
    symbolElement.className = 'button';        
    symbolElement.innerHTML = symbol;
    calcul.appendChild(symbolElement);
});

document.querySelectorAll('.button').forEach(function (button) {
    button.addEventListener('click', onButtonClick);
});

function onButtonClick(button_click) {
    if (button_click.target.innerHTML === 'AC') {
        text.innerHTML = ' ';
        flag = true;
    } else if (button_click.target.innerHTML === '=') {
        try{
            text.innerHTML = eval(text.innerHTML);
        }
        catch{
            text.innerHTML = 'Невалидные данные';
        }
    }else if (button_click.target.innerHTML === 'Pi'){
        if(flag === true) {
            text.innerHTML += Pi;
            flag = false;}
    }else if(button_click.target.innerHTML === '.') {
        if (flag === true) {
            text.innerHTML += button_click.target.innerHTML;
            flag = false}
    }else if(button_click.target.innerHTML === '+' || button_click.target.innerHTML === '-' || button_click.target.innerHTML === '*' || button_click.target.innerHTML === '/'){
        flag = true;
        if (text.innerHTML.slice(-1) === '+' || text.innerHTML.slice(-1) === '-' || text.innerHTML.slice(-1) === '*' || text.innerHTML.slice(-1) === '/') {
            if (button_click.target.innerHTML === '+')
                text.innerHTML = text.innerHTML.slice(0, -1) + '+';
            else if (button_click.target.innerHTML === '-')
                text.innerHTML = text.innerHTML.slice(0, -1) + '-';
            else if (button_click.target.innerHTML === '*')
                text.innerHTML = text.innerHTML.slice(0, -1) + '*';
            else if (button_click.target.innerHTML === '/')
                text.innerHTML = text.innerHTML.slice(0, -1) + '/';
            else
                text.innerHTML += button_click.target.innerHTML;
        }else 
            text.innerHTML += button_click.target.innerHTML;
    } else if (button_click.target.innerHTML === '0'){
        if (text.innerHTML.slice(-1) === '+' || text.innerHTML.slice(-1) === '-' || text.innerHTML.slice(-1) === '*' || text.innerHTML.slice(-1) === '/' || text.innerHTML === ' ' || text.innerHTML === ''){
            text.innerHTML += '0.';
            flag = false;
        }else{
            text.innerHTML += button_click.target.innerHTML;  
        }
    } else if (button_click.target.innerHTML === 'C') {
        text.innerHTML = text.innerHTML.slice(0, -1);
    } else {
        text.innerHTML += button_click.target.innerHTML;
    }
};