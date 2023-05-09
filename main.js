$(document).ready(function(){ 
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li style="display:none"></li>');

        $(`<p>${tarefaNova}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa-nova').val('')
    })

    $('form').on('reset', function(e){
        $('ul').empty();
    })

    $('#list').on("click", "li",function(){
        //$(this).css("text-decoration", "line-through"); //Ambos funcionam
        $(this).wrap("<strike>");
    })
})