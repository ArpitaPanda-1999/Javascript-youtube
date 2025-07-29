# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((bu) => {
  bu.addEventListener('click', (e) => {
    // if(e.target.id === 'grey'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'yellow'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'white'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'blue'){
    //     body.style.backgroundColor = e.target.id;
    // }

    // switch(e.target.id){
    //     case "grey": 
    //     document.body.style.backgroundColor = e.target.id;
    //     break;

    //     case "white": 
    //     document.body.style.backgroundColor = e.target.id;
    //     break;

    //     case "blue": 
    //     body.style.backgroundColor = e.target.id;
    //     break;

    //     case "yellow": 
    //     body.style.backgroundColor = e.target.id;
    //     break;
    // }

    const valid = ["grey", "white", "blue", "yellow"];
    if(valid.includes(e.target.id)){
      document.body.style.backgroundColor = e.target.id;
    }
  });
});


```