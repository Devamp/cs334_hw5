$(document).ready(function(){
    $.post('/stories',function(data,status){
        
        //data[0].name;
        //console.log(data.length);
        var container = document.getElementById("container");
        
        for(i =0 ; i<data.length;i++){
            author =  data[i].name;
            story = data[i].story


            // Create a new <p> element
            var authorParagraphTag = document.createElement("p")
        
            // Set the text content of the <p> element
            authorParagraphTag.textContent = "Author: " + author ;

            // Append the new <p> element to an existing element in the document
            container.appendChild(authorParagraphTag);

            // Create a new <p> element
            var storyParagraphTag = document.createElement("p")
            storyParagraphTag.textContent = "Story: " + story;

            
            
            container.appendChild(storyParagraphTag);
        }


    });



    // let users = [
    //     {
    //         name : "Anand Gogoi",
    //         story: "This is an example post"
    //     },

    //     {
    //         name : "Daniel Burko",
    //         story: "Yessir🙏🔥"
    //     }

    // ];
    
    // var container = document.getElementById("container");


    // for ( i =0;i<users.length;i++){
    //     // Create a new <p> element
    //     var name = document.createElement("p")
        
    //     // Set the text content of the <p> element
    //     name.textContent = "Name: " + users[i].name ;

    //     // Append the new <p> element to an existing element in the document
    //     container.appendChild(name);

    //     // Create a new <p> element
    //     var story = document.createElement("p")
    //     story.textContent = "Story: " + users[i].story;

        
    //     container.appendChild(story);
    // }

    

    
   
})