
var s ="";

while (s!= "gnarf")
{
    s=prompt("Voyons voir si t'as le droit de voir tout ça !");

    if (s=="gnarf")
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
