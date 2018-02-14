let url = "https:/\/gist.githubusercontent.com/AndrewZabur/ed695b8dbc2f49ccc7d862eca10716f0/raw/2e14efa40f162a07adbfba84058ec0a9909f0d08/tableInformation.json";

$(document).ready(function () {
  $.ajax({
    url: url, 
    dataType: 'json', 
    success: function (data) { //тут data - це масив об'єктів
                               
      $.each(data, function(key, value) { //кожен елемент масиву додаємо до таблиці
        
        let tableFragment = createFragment(value);
        
        $("#tbody").append(tableFragment);
      });
    }
  });
});

$('#sortAZ').click(function() {
  $("#tbody").empty();
  $.getJSON(url, function(data) {
      
      let tableFragment;

      for(let i = 0; i < data.length; i++){
        data.sort(function(arg1, arg2){
           if (arg1.first_name > arg2.first_name) {
              return 1;
           }
           if (arg1.first_name < arg2.first_name) {
              return -1;
           }
           else return 0; 
        });
      }

      $.each(data, function(key, value) { 
          tableFragment = createFragment(value);        
          $("#tbody").append(tableFragment);
      });
  });
});


$('#sortZA').click(function() {
  $("#tbody").empty();
  $.getJSON(url, function(data) {
      
      let tableFragment;

      for(let i = 0; i < data.length; i++){
        data.sort(function(arg1, arg2){
            if (arg1.first_name < arg2.first_name) {
              return 1;
            }
            if (arg1.first_name > arg2.first_name) {
              return -1;
            }
            else return 0; 
        });
      }

      $.each(data, function(key, value) { 
        
        tableFragment = createFragment(value); 
        $("#tbody").append(tableFragment);
      
      });
  });
});

function searching(){
  $("#tbody").empty();
  $.getJSON('https://gist.githubusercontent.com/AndrewZabur/ed695b8dbc2f49ccc7d862eca10716f0/raw/48a1687e0b5ea701d6cb67d3b7123cafb2e8cf68/tableInformation.json', function(data) {
      
      let tableFragment;
      let search = $('#searchInput').val();
      let found = [];
      
      if(search !== ""){
        for(let i = 0; i < data.length; i++){
          if(search === data[i].first_name){
            found.push(data[i]);
          }  
        }
        $.each(found, function(key, value) { 
          tableFragment = createFragment(value); 
          $("#tbody").append(tableFragment);
        });  
      }
      else{
        $.each(data, function(key, value) { 
          tableFragment = createFragment(value); 
          $("#tbody").append(tableFragment);
        });
      }
  });
}

$("#searchInput").keypress(function(event){
    if(event.keyCode==13){
        event.preventDefault();
        searching();
    }
});

function createFragment(value){
   return $("<tr><td class='table-active'><input type='checkbox' name='tableCheck'></td><td class='table-active'>" 
          + value.id + "</td><td class='table-active'>" + value.first_name + "</td><td class='table-active'>" 
          + value.last_name + "</td><td class='table-active'>" + value.gender + "</td><td class='table-active'>" 
          + value.company + "</td><td class='table-active'>" + value.language + "</td></tr>");  
}

$("#check").change(function () {
  if ($("#check").is(":checked")){
      $("input[type='checkbox']").prop("checked", true);
  }
  else{
      $("input[type='checkbox']").prop("checked", false);
  }
});




