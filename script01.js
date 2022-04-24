var myDate = new Date();

function formatValue(val, digits)
{
    return String(val).padStart(digits, '0');
}


var y = formatValue(myDate.getFullYear(), 4);
var m = formatValue(eval(myDate.getMonth() + 1), 2);
var d = formatValue(myDate.getDate(), 2);
var h = formatValue(myDate.getHours(), 2);
var min = formatValue(myDate.getMinutes(), 2);

function displayFlowID()
{
    var initials = document.getElementById("tInitials").value;


    if (initials.length == 0)
    {
        document.getElementById("tInitials").style.backgroundColor = "#FF0";
    }
    else
    {
        document.getElementById("tInitials").style.backgroundColor = "#FFF";
    }

    var flowID = initials + '_' + y + m + d + '_' + h + min;
    document.getElementById("tFlowID").value = flowID;
    navigator.clipboard.writeText(flowID);
}
