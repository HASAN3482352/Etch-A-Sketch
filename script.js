const body = document.querySelector('body');
const btn = document.createElement('button');
const container = document.createElement('div');
container.setAttribute('id','container');
container.style.cssText = "display:flex;flex-direction: column;height:500px;width:500px;border:1px solid black;";
btn.textContent='Click Me';
body.appendChild(btn);
btn.addEventListener('click',() => {
    container.textContent='';
    n=+prompt('Number of squares per side for the new grid ?');
    if(n<=100){
        for(let i=0;i<n;i++){
            const divRow = document.createElement('div');
            divRow.style.cssText = "display:flex;flex:1;";
            for(let j=0;j<n;j++){
                const div = document.createElement('div');
                div.style.cssText = "flex:1;";
                divRow.appendChild(div);
                div.addEventListener('mouseover',() => {
                    div.style.backgroundColor = `rgba(${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)})`;
                });
            }
            container.appendChild(divRow);
        }
        body.appendChild(container);
    }else{
        prompt('Enter a value lesser or equal to 100');
    }
});






