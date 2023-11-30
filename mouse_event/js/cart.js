function subtotal()
{
    var p=document.getElementById("price").value;
    var q=document.getElementById("qty").value;
    var t=p*q;
    document.getElementById("total").innerHTML=+t;
}

function chk()
{
    var fnm=document.getElementById("fname");
    fnm.value=fnm.value.toUpperCase();

    var lnm=document.getElementById("lname");
    lnm.value=lnm.value.toUpperCase();

}