// for clear create a function//

function clr()
{
    document.getElementById("result").value="";
}

//display input button values in result //

function display(val)
{
    document.getElementById("result").value+=val;
}

// back press and sliec each element//
 
function bck()
{
   var clk=document.getElementById("result").value;
   var clk1=clk.slice(0,-1);
   document.getElementById("result").value=+clk1;

}

// create a function for final result//

function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}

// create a function for pow//

function sq()
{
    var x=document.getElementById("result").value;
    var y=Math.pow(x,2);
    document.getElementById("result").value=y;
}