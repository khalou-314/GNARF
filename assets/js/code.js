
var s ="";

while (s!= "bureaugnarf2020")
{
    s=prompt("Voyons voir si t'as le droit de voir tout ça !");

    if (s=="bureaugnarf2020")
    {
        window.location.href="picture.html";
    }

    else
    {
        alert("Deso tu n'est pas autorisé");
        window.location.href="index.html";
        break;
    }
}
