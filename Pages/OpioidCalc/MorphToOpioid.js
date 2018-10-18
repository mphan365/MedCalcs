var theForm = document.forms["Opioid-Morphine-convert"];

var OMconversionrates= new Array();
OMconversionrates["None"]=0;
OMconversionrates["Hydromorphone"]=5;
OMconversionrates["Oxycodone"]=1.5;
OMconversionrates["Codeine"]=0.125;
OMconversionrates["Tapentadol"]=0.333;
OMconversionrates["Tramadol"]=0.2;

function getMOpioidConversionFactor()
{
    var OMComversionFactor=0;
    var theForm = document.forms["Morphine-Opioid-convert"];
    var OralOpioidSelected = theForm.elements["OralOpioid"];

    MOconversionfactor = OMconversionrates[OralOpioidSelected.value];

    //finally we return cakeFillingPrice
    return OMconversionfactor;
}

function getMorphDose()
{
    //Assume form with id="theform"
    var theForm = document.forms["Morphine-Opioid-convert"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["M-O-dose"];
    var dose =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        dose = parseInt(quantity.value);
    }
return dose;
}

function calculateAltDose()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ConvertedMorphDose = getOpioidConversionFactor() * getMorphDose();
    var RoundedConvertedMorphDose = ConvertedMorphDose.toPrecision(5);

    if(OMconversionfactor>0) {
        //display the result
        document.getElementById('AltConvertedDose').innerHTML =
                                         "The input dose of oral opioid is equal to " + RoundedConvertedDose +"mg of morphine";
} else {
        document.getElementById('AltConvertedDose').innerHTML = "";
    }



}
