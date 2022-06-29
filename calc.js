//1.display number in textbox
function displayNum(num)
{
    result.value+=num;
}

//2.clear text box

function clearBox(){
    result.value="";
}

//3. evaluate expression

function evaluateExpr()
{
    result.value= eval(result.value);
}

//4. remove last item from text box

function removeVal(){
    curExpr=result.value
    result.value = curExpr.slice(0,-1)
}
