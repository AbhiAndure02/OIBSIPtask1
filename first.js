
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':       // for the result
                try{
                    display.innerText = eval(display.innerText);   //case of any other error
                } catch {
                    display.innerText = "Error";
                }
                break;
            case '←':
                if (display.innerText){   // for the bacspace
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
}); 