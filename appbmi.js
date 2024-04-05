
function bmical(){
    var weight = document.getElementById("kg").value ;
    var high = document.getElementById("cm").value ;

    if(document.getElementById('kg',).value == "")
    {
        alert('PLEASE INPUT DATA');
        return false;
    }

    if(document.getElementById('cm',).value == "")
    {
        alert('PLEASE INPUT DATA');
        return false;
    }



    weight=parseInt(weight,)
    high=parseInt(high,)
    var bmic =weight / (high/100*high/100);
    var bmi =(bmic.toFixed(2));
    document.getElementById('bmishow').innerHTML=bmi ;



    if (bmi>30) {
        document.getElementById('bmishow2').innerHTML="อ้วนมาก / โรคอ้วนระดับ 3 ";

    }
    else if (bmi>24) {
        document.getElementById('bmishow2').innerHTML="อ้วน / โรคอ้วนระดับ 2" ;

    }
    else if (bmi>18.50) {
        document.getElementById('bmishow2').innerHTML="ปกติ (สุขภาพดี)" ;

    }
    else if (bmi<18.50) {
        document.getElementById('bmishow2').innerHTML="น้ำหนักน้อย / ผอม" ;

    }
}

function bmireset(){
  document.getElementById('bmishow').innerHTML=" ";
  document.getElementById('bmishow2').innerHTML=" ";
}
