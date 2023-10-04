import { Button, Card, Divider } from "@mui/material";
import { useEffect ,useState } from "react";
import React from "react";
const Effect = () =>{

    const [commentData, setCommentData] = useState([]);


    // Check In Console


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(response => response.json())
            .then(json => setCommentData(json))
    }, []);


    
    const handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
          method: "DELETE",
        })
          .then(response => {
            if (response.ok) {
              console.log(`Comment with ID ${id} deleted successfully.`);
              // Update the commentData state after successful deletion
              setCommentData(prevData =>
                prevData.filter(comment => comment.id !== id)
              );
            } else {
              console.error(`Error deleting comment with ID ${id}.`);
            }
          })
          .catch(error => {
            console.error(`An error occurred: ${error}`);
          });
      };

return (
    <div>
        <div>
            <div>
                {commentData.map((i)=>{
                    return (
                        <Card key ={i.id}>
                        <h3> Name : {i.name}</h3>
                        <h2> Email :  {i.name}</h2>
                        <h2> Comment: {i.body} </h2>

                        
                        <Button variant="contained" onClick={()=>handleDelete(i.id)}>Delete</Button>
                        <Divider/>
                   </Card>
                    );
                     
                })}
               
            </div>
        </div>     
    </div>
    )
}

export default Effect;