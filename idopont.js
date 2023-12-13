function foglal()
{
    
 

    var nev=document.getElementById('nev').value;
    var telefonszam=document.getElementById('telefonszam').value;
    var tajszam=document.getElementById('tajszam').value;
    var datum=document.getElementById('datum').value;
    var ido=document.getElementById('ido').value;
    var szolgaltatas=document.getElementById('szolgaltatas').value;

    if(nev=="" || telefonszam=="" || tajszam=="" || datum=="" || ido=="" || szolgaltatas=="")
    {
        alert("Töltsön ki minden mezőt!");
    }
    else
    {

            alert("Foglalás sikeres! Kedves "+ nev + "! Önnek " + datum + " " + ido +" percre van időpontja " + szolgaltatas + " szolgáltatásra.");

    }


}