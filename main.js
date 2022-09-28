
document.querySelector("#Find").onclick = function myFunction() {    
    var input, filter, table, tr, td, i, txtValue,text,j;
    text = document.getElementById("text");
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("container");
    tr = table.getElementsByClassName("row");
    j = 1;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByClassName("b")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          td.style.background = "red";
          text.textContent = "Количество совпадений: " + j++;
        } else {
          td.style.background = "#FBA872"; 
          if(j == 1){
          text.textContent = "Совпадений нет!";
         }
        }
      }       
    }
}    
