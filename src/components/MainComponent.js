import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import { DISHES }  from '../shared/dishes';
import { COMMENTS }  from '../shared/comments';
import { LEADERS }  from '../shared/leaders';
import { PROMOTIONS }  from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    // function App() {
    
    constructor(props) {
        super(props);
        
        this.state = { 
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }
    
    render() {
        const HomePage = () => {
            return(
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    comment={this.state.comments.filter((comment) => comment.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]} 
                />
 
            )
        }   

        const DishWithId = ({match}) => {
            return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} 
            />
            )
        }

        const MenuDishes = () => {
            return(
                <Menu dishes={this.state.dishes}/>
            )
        }

        const AboutPage = () => {
            return(
                <About leaders={this.state.leaders}/>
            )
        }   

        return (
            <div>
                <Header />     
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={MenuDishes}/>
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route path="/aboutus" component = {AboutPage}/>
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />    
                </Switch>          
                <Footer />
            </div>
            );
        }
    }
    export default Main
    