// localStorage.setItem('equal','0')
let equals=false;
let inputV=input.value;
function insert(sign){

    let signs=['+','-','/','*'];
    let input=document.querySelector('.textview');
    
    let inputV=input.value;
    let lastnum=inputV[input.value.length-1];
    
    if (equals==true){
        if(signs.includes(sign)){
            input.value = input.value+sign;
            console.log(signs.includes(sign))
            console.log(equal);
        }
        else{
            input.value=sign;
        }
        equals=false;
        return false;

    }
 
    
   if(input.value.length===0 && signs.includes(sign)){
        input.value=''+sign;
        alert('toldirikmagan')
    }else{
        if(signs.includes(lastnum) && signs.includes(sign)){
            if(lastnum!==sign)
            {
                let v=input.value.substring(0,input.value.length-1);
                input.value=v+sign;
            }
        }
        else{
            input.value=input.value+sign;
        }
    }
}

function clean(){
    if(document.form.textview.value){
        document.form.textview.value=''
    }
}

function back(){
    let exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
    
}

function equal(){
   
    if (equals===true){return false;}

    let signs=['+','-','/','*'];
    let input=document.form.textview;
    let inputV=input.value;
    let lastnum=inputV[input.value.length-1];
    let v=input.value.substring(0,input.value.length-1);
    
 
    
    if(inputV)
    // localStorage.setItem("equal","1");
    eq=true;
        if(signs.includes(lastnum))
        { input.value=v;}
        if(input.value)
        {   
        document.form.textview.value=eval(input.value);
        equalV=eval(input.value);
    }
    else{
        alert('Iltimos son kiriting')
    }
}