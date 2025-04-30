import React, { Component } from 'react'
import '../Style/Contact.css'

export class Maps extends Component {

    componentDidMount(){
        this.renderMap()
   }

   renderMap=()=>{
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIZaSyDIDrDBUd6GNL2EIBCxK-K00jKTny8KbuA&callback=initMap")
    window.initMap=this.initMap
   }

     initMap =() =>{
        var Map = new window.google.maps.Map(document.getElementById("map"), {
          center: {
            lat: -34.397,
            lng: 150.644
          },
          zoom: 8
        });
      }

    render() {
        return (
            <div>
                <main>
                   <div id="map"></div>
                </main>
            </div>
        )
    }
}

function loadScript(url){
    var index = window.document.getElementById("script")[0];
    var script = window.document.createElement("script");
    script.src=url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script,index)
}

export default Maps
/*    <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      defer
    ></script>*/

    /*
    renderMap=()=>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIZaSyDIDrDBUd6GNL2EIBCxK-K00jKTny8KbuA&callback=initMap")
        window.initMap=this.initMap
    }*/
    