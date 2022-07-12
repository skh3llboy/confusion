import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';




class DishDetail extends Component{
    constructor(props){
        super(props);

    }

    

    renderDish(dish){
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

   
    renderComments(dish) {
        
        
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


    render(){
        const selected = this.props.dish
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m1">
                    {this.renderDish(selected)}
                    </div>
                    <div className="col-12 col-md-5 m1">{this.renderComments(selected)}</div>
                </div>
            </div>
                
        )
    }
}



export default DishDetail;