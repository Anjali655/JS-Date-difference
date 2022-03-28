

function getdate(){
    var d1 = document.getElementById("dateOne").value;
    var d2 = document.getElementById("dateTwo").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.floor(time/(1000*60* 60* 24));
    const months = Math.floor(days/31);
    const years = Math.floor(months/12);
    const button = document.getElementById('mybtn')
console.log(days, months, years," time difference ");

    document.getElementById("output").innerHTML = days +" days "+  months +" months "+ years + " years ";
}


