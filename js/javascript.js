$(document).ready(function(){
  
  var cosas_prev = [
    "Estudiar JavaScript",
    "Preguntarme que estoy haciendo con mi vida",
    "preguntarme si terminare debajo de un puente",
    "Lograr mis objetivos"
  ]

  for(var i = 0; cosas_prev.length > i; i++){
    var cosas_prev_stamp = cosas_prev[i]

    var scrivere_html ="<li><p>" + cosas_prev_stamp +'</p><i class="fas fa-trash"></i></li>';
    
    $("main ul").append(scrivere_html);
  }

  $(document).on("click",".fa-trash", function(){
    $(this).parent().remove();
  })

  $("main input").keyup(function(event) { 
    if(event.which === 13){
      var todo = $(this).val().trim();
      console.log(todo)
      if(todo.length > 3){
        var item = $(".template li").clone();
        console.log(item)
        $(item).find(".text").append(todo)
        $("ul").append(item);
      }
      
    };
    
  });

})
