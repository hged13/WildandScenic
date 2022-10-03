
    async function wildernessareas(){
        var div = d3.select("body").append("div") .attr("class", "tooltip") .style("opacity", 0);
        var dam =0;
        var scenic=0;
        var rivers= 0;
        var dam= 0;
        var impair=0;

        let svg = d3.select("svg");
        let width = 800;
        let height = 800;


        let json3 = await d3.json("Us_states.json");
    
          
            

        //convert lat/lon to fit in mt!
        let projection = d3.geoMercator()
        .fitSize([width,height],json3)

        
      
            

        // This converts the projected lat/lon coordinates into an SVG path string
       
        let path = d3.geoPath(projection);
            // Load in GeoJSON data


// Bind data and create one path per GeoJSON feature
d3.select("#montanaLayer").selectAll("path")
    .data(json3.features)
    .join("path")
    // here we use the familiar d attribute again to define the path
    .attr("d", path);
       
    let county = await d3.json("counties.geojson");
    d3.select("#countyLayer").selectAll("path")
    .data(county.features)
    .join("path")
    // here we use the familiar d attribute again to define the path
    .attr("d", path)
    .style("stroke","tan")
    .style('stroke-opacity','0.22');
       

     

           

      

        // Load in GeoJSON data
        let json4 = await d3.json("Missouri.geojson");

        // Bind data and create one path per GeoJSON feature
        d3.select("#MissouriLayer").selectAll("path")
           .data(json4.features)
            .join("path")
            // here we use the familiar d attribute again to define the path
           .attr("d", path)
           .on("mouseover", function(event,d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);
            div.html(d.properties.name)
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY - 28) + "px");
       })
       .on("mouseout", function(d) {
            div.transition()
              .duration(500)
              .style("opacity", 0);
       });
        

            // Load in GeoJSON data
        let json5 = await d3.json("dam.json");

// Bind data and create one path per GeoJSON feature
d3.select("#damLayer").selectAll("path")
    .data(json5.features)
    .join("path")
   .attr("d", path)
   .style("fill", "grey")
   .on("mouseover", function(event,d) {
    div.transition()
      .duration(200)
      .style("opacity", .9);
      div.html(d.properties.DAM_NAME)
      .style("left", (event.pageX) + "px")
      .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", function(d) {
    div.transition()
      .duration(500)
      .style("opacity", 0);
});;

// Load in GeoJSON data
let json8 = await d3.json("Flathead.geojson");

// Bind data and create one path per GeoJSON feature
d3.select("#FlatheadLayer").selectAll("path")
   .data(json8.features)
    .join("path")
   .attr("d", path)
   .on("mouseover", function(event,d) {
    div.transition()
      .duration(200)
      .style("opacity", .9);
      div.html(d.properties.name)
      .style("left", (event.pageX) + "px")
      .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", function(d) {
    div.transition()
      .duration(500)
      .style("opacity", 0);
})   
   ;   

   // Load in GeoJSON data
let json9 = await d3.json("Rosebud.geojson");

// Bind data and create one path per GeoJSON feature
d3.select("#RosebudLayer").selectAll("path")
   .data(json9.features)
    .join("path")
   .attr("d", path)
   .on("mouseover", function(event,d) {
    div.transition()
      .duration(200)
      .style("opacity", .9);
      div.html(d.properties.name)
      .style("left", (event.pageX) + "px")
      .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", function(d) {
    div.transition()
      .duration(500)
      .style("opacity", 0);
});;   

   let json10 = await d3.json("Montana_Impaired_Waters_2020-5.geojson");

   // Bind data and create one path per GeoJSON feature
   d3.select("#ImpairLayer").selectAll("path")
      .data(json10.features)
       .join("path")
      .attr("d", path)
      .on("mouseover", function(event,d) {
        div.transition()
          .duration(200)
          .style("opacity", .9);
          div.html(d.properties.WATER_NAME)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        div.transition()
          .duration(500)
          .style("opacity", 0);
    })   
      .style("stroke-width", function(d){
        if(d.properties.WQ_CATEGORY == '5'|| d.properties =='5,5N'){
          return '3';}
      else if(d.properties.WQ_CATEGORY == '4' || d.properties.WQ_CATEGORY =='4C' ||d.properties =='4A'){
          return '3';
           }
      else if(d.properties.WQ_CATEGORY == '3'){
       return '3';
      }
      else if(d.properties.WQ_CATEGORY == '2'){
       return '3';
      }       
     else
     return '1';   }

      )
      .style('stroke', function(d){
        if(d.properties.WQ_CATEGORY == '5'|| d.properties =='5,5N'){
           return '993404';}
       else if(d.properties.WQ_CATEGORY == '4' || d.properties.WQ_CATEGORY =='4C' ||d.properties =='4A'){
           return 'd95f0e';
            }
       else if(d.properties.WQ_CATEGORY == '3'){
        return 'fe9929';
       }
       else if(d.properties.WQ_CATEGORY == '2'){
        return 'fed98e';
       }       
      else
      return 'Black';   }

)
   // Load in GeoJSON data
   let json = await d3.json("Scenic.geojson");

   d3.select("#scenicLayer").selectAll("path")
       .data(json.features)
       .join("path")
      .attr("d", path)
      .style("stroke", "007d79")
      .style("stroke-width", "6")
      .on("mouseover", function(event,d) {
        div.transition()
          .duration(200)
          .style("opacity", .9);
          div.html(d.properties.WSR_RIVER_NAME)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        div.transition()
          .duration(500)
          .style("opacity", 0);
    })   


      // Load in GeoJSON data
 let jsono = await d3.json("Yellowstone.geojson");

  // Bind data and create one path per GeoJSON feature
  d3.select("#otherdamLayer").selectAll("path")
  .data(jsono.features)
  .join("path")
 .attr("d", path)
 .style("fill", "grey")
 .on("mouseover", function(event,d) {
     div.transition()
       .duration(200)
       .style("opacity", .9);
     div.html(d.properties.DAM_NAME)
       .style("left", (event.pageX) + "px")
       .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", function(d) {
     div.transition()
       .duration(500)
       .style("opacity", 0);
});


    // Load in GeoJSON data
let json7 = await d3.json("Montana_Impaired_Waters_2020-4.geojson");

 // Bind data and create one path per GeoJSON feature
d3.select("#impairedLayer").selectAll("path")
     .data(json7.features)
     .join("path")
   .attr("d", path)
   .style('stroke', function(d){
     if(d.properties.WQ_CATEGORY == '5'|| d.properties =='5,5N'){
        return '993404';}
    else if(d.properties.WQ_CATEGORY == '4' || d.properties.WQ_CATEGORY =='4C' ||d.properties =='4A'){
        return 'd95f0e';
         }
    else if(d.properties.WQ_CATEGORY == '3'){
     return 'fe9929';
    }
    else if(d.properties.WQ_CATEGORY == '2'){
     return 'fed98e';
    }       
    else return 'BLACK';   

})
.style("stroke-width", function(d){
  if(d.properties.WQ_CATEGORY == '5'|| d.properties =='5,5N'){
    return '3';}
else if(d.properties.WQ_CATEGORY == '4' || d.properties.WQ_CATEGORY =='4C' ||d.properties =='4A'){
    return '3';
     }
else if(d.properties.WQ_CATEGORY == '3'){
 return '3';
}
else if(d.properties.WQ_CATEGORY == '2'){
 return '3';
}       
else
return '1';   })
.on("mouseover", function(event,d) {
  div.transition()
    .duration(200)
    .style("opacity", .9);
    div.html(d.properties.WATER_NAME)
    .style("left", (event.pageX) + "px")
    .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", function(d) {
  div.transition()
    .duration(500)
    .style("opacity", 0);
});;
    
    let jsony = await d3.json("little.geojson");

   d3.select("#littleLayer").selectAll("path")
        .data(jsony.features)
        .join("path")
      .attr("d", path)
      .on("mouseover", function(event,d) {
        div.transition()
          .duration(200)
          .style("opacity", .9);
          div.html(d.properties.name)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY - 28) + "px");
   })
   .on("mouseout", function(d) {
        div.transition()
          .duration(500)
          .style("opacity", 0);
   });;  


       // Load in GeoJSON data
 let json11 = await d3.json("otherdams.geojson");

  // Load in GeoJSON data
  let jsonq = await d3.json("realrivers.geojson");

  // Bind data and create one path per GeoJSON feature
  d3.select("#riverLayer").selectAll("path")
      .data(jsonq.features)
      .join("path")
     .attr("d", path)
     .on("mouseover", function(event,d) {
      div.transition()
        .duration(200)
        .style("opacity", .9);
        div.html(d.properties.name)
        .style("left", (event.pageX) + "px")
        .style("top", (event.pageY - 28) + "px");
 })
 .on("mouseout", function(d) {
      div.transition()
        .duration(500)
        .style("opacity", 0);
 });

       // Load in GeoJSON data
       let jsonx = await d3.json("clark.geojson");

       // Bind data and create one path per GeoJSON feature
       d3.select("#river2Layer").selectAll("path")
           .data(jsonx.features)
           .join("path")
          .attr("d", path)
          .on("mouseover", function(event,d) {
           div.transition()
             .duration(200)
             .style("opacity", .9);
             div.html(d.properties.name)
             .style("left", (event.pageX) + "px")
             .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
       div.transition()
         .duration(500)
         .style("opacity", 0);
      });

 

 

 // Bind data and create one path per GeoJSON feature
 d3.select("#otherdam1Layer").selectAll("path")
     .data(json11.features)
     .join("path")
    .attr("d", path)
    .style("fill", "grey")
    .on("mouseover", function(event,d) {
     div.transition()
       .duration(200)
       .style("opacity", .9);
       div.html( d.properties.DAM_NAME)
       .style("left", (event.pageX) + "px")
       .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", function(d) {
     div.transition()
       .duration(500)
       .style("opacity", 0);
});;
    
d3.select("#Dams").on("click", function() {
    

    if(dam==0){d3.selectAll("#damLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#otherdamLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#otherdam1Layer")
    .attr("visibility", "hidden")
    dam = 1;}
    else if(dam==1){
    if(scenic==0){d3.selectAll("#damLayer")
    .attr("visibility", "visible")}
    if(rivers==0){
    d3.selectAll("#otherdamLayer")
    .attr("visibility", "visible")
    d3.selectAll("#otherdam1Layer")
    .attr("visibility", "visible")}
    dam = 0;}
    

})
d3.select("#Scenic").on("click", function() {
    

    if(scenic==0){d3.selectAll("#scenicLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#FlatheadLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#MissouriLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#RosebudLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#ImpairLayer")
    .attr("visibility", "hidden")
      d3.selectAll("#damLayer")
      .attr("visibility", "hidden")

    scenic = 1;}
    else if(scenic==1){d3.selectAll("#scenicLayer")
    .attr("visibility", "visible")
    d3.selectAll("#FlatheadLayer")
    .attr("visibility", "visible")
    d3.selectAll("#MissouriLayer")
    .attr("visibility", "visible")
    d3.selectAll("#RosebudLayer")
    .attr("visibility", "visible")
    d3.selectAll("#ImpairLayer")
    .attr("visibility", "visible")
    if(dam==0){
      d3.selectAll("#damLayer")
      .attr("visibility", "visible")

    }
    scenic = 0;}
    

})
d3.select("#rivers").on("click", function() {
    

    if(rivers==0){d3.selectAll("#riverLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#river2Layer")
    .attr("visibility", "hidden")
    d3.selectAll("#littleLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#yaakLayer")
    .attr("visibility", "hidden")
    d3.selectAll("#impairedLayer")
    .attr("visibility", "hidden")
    rivers = 1;
    if(dam==0){
        d3.selectAll("#otherdamLayer")
        .attr("visibility", "hidden")
        d3.selectAll("#otherdam1Layer")
        .attr("visibility", "hidden")

    }

    
    }
    else if(rivers==1){d3.selectAll("#riverLayer")
    .attr("visibility", "visible")
    d3.selectAll("#river2Layer")
    .attr("visibility", "visible")
    d3.selectAll("#littleLayer")
    .attr("visibility", "visible")
    d3.selectAll("#yaakLayer")
    .attr("visibility", "visible")
    d3.selectAll("#impairedLayer")
    .attr("visibility", "visible")
    if(dam==0){
        d3.selectAll("#otherdamLayer")
        .attr("visibility", "visible")
        d3.selectAll("#otherdam1Layer")
        .attr("visibility", "visible")
    
   
   }rivers=0;}})

    d3.select("#Hide").on("click", function() {
    

      if(scenic==0 &&impair==0){d3.selectAll("#ImpairLayer")
      .attr("visibility", "hidden")
      impair=1
       }
       
  
      else if(scenic==0 && impair==1 ){d3.selectAll("#ImpairLayer")
      .attr("visibility", "visible")
      impair=0
     }})

    




  
    }
   
    wildernessareas();

