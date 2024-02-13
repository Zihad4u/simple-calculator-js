function calculateTriangle(){
    const input=document.getElementById('input-1');
    const input1=input.value;
    const final1=parseFloat(input1);
    const twoInput=document.getElementById('input-2');
    const input2=twoInput.value;
    const final2=parseFloat(input2);
    const area=0.5*final1*final2;
    const triangleSpna=document.getElementById('triangle-area');
    triangleSpna.innerText=area;
}
function calculateRectangle(){
    const inputThree=document.getElementById('input-3')
    const input3=inputThree.value;
    const finalInput3=parseFloat(input3);
    const inputFour=document.getElementById('input-4');
    const input4=inputFour.value;
    const finalInput4=parseFloat(input4);
    const rectangleValue=finalInput3*finalInput4;
    const rectangle=document.getElementById('rectangle-area');
    rectangle.innerText=rectangleValue;
}
function answer(){
    const mainValue=getValue('input-5');
    const value2=getValue('input-6');
    const answe=mainValue * value2;
    putAnswer('nika',answe);
}
function getValue(input){
    const input1=document.getElementById(input);
    const inputValue=input1.value;
    const value=parseFloat(inputValue);
    return value;
}
function putAnswer(putId,answers){
    const box=document.getElementById(putId);
    box.innerText=answers;
}

function touch(){
    const input1=getValue('input-7');
    const input2=getValue('input-8');
    const answe=0.5*input1*input2;
    putAnswer('rhombus',answe);
}

function getValue(input){
    const inputId=document.getElementById(input);
    const inputValue=inputId.value;
    const finalValue=parseFloat(inputValue);
    return finalValue;
}
function putAnswer(inputId,answer){
    const box=document.getElementById(inputId);
    box.innerText=answer;
}
