const form=document.querySelector('form');
// const height=document.getElementById("height");
// const weight=document.getElementById("weight");
// const calculate=document.querySelector('.calculate');
// const result=document.getElementById("result");


// calculate.addEventListener('click',(e)=>{
//     e.preventDefault();// to prevent from going to server
//     const h=Number(height.value);
//     const w=Number(weight.value);
//     const bmi=w/((h/100)**2);
    

//     const text=document.createTextNode(` Your BMI is ${bmi.toFixed(2)}`);
//     result.appendChild(text);

// })


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');

    if(height===''||weight===''||height<0||weight<0||isNaN(height)||isNaN(weight)){
        result.innerHTML="Please give a valid number"
    }
    else{
        const BMI=(weight/((height*height)/10000)).toFixed(2);
        let res='';
        if(BMI<18.6) res='(Under weight)' 
        else if(BMI>24.9) res='(Over weight)' 
        else res='(Normal weight)' 
        result.innerHTML=`<span> Your BMI is ${BMI}  ${res}</span>`
    }
})