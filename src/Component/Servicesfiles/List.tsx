import React, { Component } from 'react'
import '../Style/List.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link ,Route, Switch} from "react-router-dom";
import Content1 from '../Homefiles/Content1'
import Content2 from '../Homefiles/Content2'


export class List extends Component {
render() {
    return (
      <div className="parent">
          <div className="container ">

            <div className="parent1">
              <h4>Block Quotes</h4>

              <div className="son">
                  <p>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</p>

                  <p>Chef, Coffeeist and Owner: Liam Brown</p>
              </div>
            </div>       
          </div>
        </div>
    )
  }
}

export default List
/*

      <div class="parent2">
		
        <br/><br/>
        <div class="test">
         

            <div class="list-group" id="list-tab" role="tablist">

              <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
              <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>

            </div>



            <div class="tab-content" id="nav-tabContent">

              <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                  <p>Bread Basket</p>
                  <p class="text-muted os">Assortment of fresh baked fruit breads and muffins 5.50</p>

                  <p>Honey Almond Granola with Fruits</p>
                  <p class="text-muted os">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

                  <p>Belgian Waffle</p>
                  <p class="text-muted os">Vanilla flavored batter with malted flour 7.50</p>
                  
                  <p>Scrambled eggs</p>
                  <p class="text-muted os">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                  
                  <p>Blueberry Pancakes</p>
                  <p class="text-muted os">With syrup, butter and lots of berries 8.50</p>

              </div>
                
                
              <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                  <p>Bread Basket</p>
                  <p class="text-muted os">Assortment of fresh baked fruit breads and muffins 5.50</p>

                  <p>Honey Almond Granola with Fruits</p>
                  <p class="text-muted os">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

                  <p>Belgian Waffle</p>
                  <p class="text-muted os">Vanilla flavored batter with malted flour 7.50</p>
                  
                  <p>Scrambled eggs</p>
                  <p class="text-muted os">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                  
                  <p>Blueberry Pancakes</p>
                  <p class="text-muted os">With syrup, butter and lots of berries 8.50</p>
                  
              </div>

            </div>


        </div>
    </div>*/





    /*
    <div>
      <ListGroup horizontal>
        <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
      </ListGroup>

    </div>*/