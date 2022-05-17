
$(document).ready(
    function(){
        console.log("LindoWillian");
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts",
            type:"GET",
            success:function(data){
                console.log(data);
                $.each(data, function(i, itemm){

                },
                console.log(data)
            },
            error:function(data){

            }
        })
    }
)