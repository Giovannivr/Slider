let gegevens;

$(document).ready(function () {

    $.ajax({
        url: 'https://randomuser.me/api/?results=500&seed=foobar',
        dataType: 'json',
        success: function (data) {
          gegevens=data;
        } 
    });

});


function Name(letter) {
    let tabel = document.getElementById("example");
    let tabellengte = tabel.rows.length;
    let gegevenslengte = gegevens.results.length;
    // Maak tabel leeg
    //alert (tabellengte);
    tabel.innerHTML = "<thead>" + "<tr>" + "<th>Photo</th>" + "<th>Name</th>" + "<th>Email</th>" + "<th>Cell</th>" + "</tr>" + "</thead>" + "<tbody>" + "</tbody>";
    for ( let i = 1; i < tabellengte; i++ ) {
      tabel.deleteRow[i];
    }
    for ( let i = 0; i < gegevenslengte; i++ ) {
        let str = gegevens.results[i].name.first;
        let pos = str.search(letter);
        //alert (pos);
        if (pos==0) {
            let newrow = tabel.insertRow(-1);
            let cellimg = newrow.insertCell(0); 
            cellimg.innerHTML = "<IMG SRC='" + gegevens.results[i].picture.medium + "'>";       
            let cellname = newrow.insertCell(1);
            cellname.innerHTML = gegevens.results[i].name.first + " " + gegevens.results[i].name.last;
            let cellemail = newrow.insertCell(2);
            cellemail.innerHTML = gegevens.results[i].email;
            let cellcell = newrow.insertCell(3);
            cellcell.innerHTML = gegevens.results[i].cell;
        }
    }
    
}