import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';




    
    

    function RenderDish({dish}){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return <div></div>
        }
    }

   
    function RenderComments({dish}) {
        
        
        if (dish != null) {
            
            const comm = dish.comments.map((cm) => {
                
                return (
                    <ul key={cm.id} className='list-unstyled'>
                        <li>
                            {cm.comment}
                        </li>
                        <li>-- {cm.author}, { }
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short', day: '2-digit', year: 'numeric' 
                                }).format(new Date(cm.date))
                            }
                        </li>
                    </ul>
                );
            });
            
            return (
                <div className='p-3'>
                    <h4>Comments</h4>
                    {comm}
                </div>
            );


        } else {
            return (
                <div></div>
            );
        }
    }


    const DishDetail = (props) => {
        const selected = props.dish
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m1">
                    <RenderDish dish={selected}/>
                    </div>
                    <div className="col-12 col-md-5 m1"><RenderComments dish={selected}/></div>
                </div>
            </div>
                
        )
    }



export default DishDetail;