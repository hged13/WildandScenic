
    async function wildernessareas(){
        var div = d3.select("body").append("div") .attr("class", "tooltip") .style("opacity", 0);
        let svg = d3.select("svg");
        let width = parseInt(svg.attr("width"));
        let height = parseInt(svg.attr("height"));
        var rivers= 0;
        var dam= 0;


        let json2 = await d3.json("Us_states.json");

            

        //convert lat/lon to fit in mt!
        let projection = d3.geoMercator().fitSize([width,height], json2)
            

        // This converts the projected lat/lon coordinates into an SVG path string
       
        let path = d3.geoPath()
            .projection(projection);
            // Load in GeoJSON data
            let json3 = await d3.json("Us_states.json");


// Bind data and create one path per GeoJSON feature
d3.select("#montanaLayer2").selectAll("path")
    .data(json3.features)
    .join("path")
    // here we use the familiar d attribute again to define the path
    .attr("d", path);
       

        // Load in GeoJSON data
        let json = await d3.json("realrivers.geojson");

        // Bind data and create one path per GeoJSON feature
        d3.select("#riverLayer").selectAll("path")
            .data(json.features)
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
        let jsonx = await d3.json("clark.geojson");

        // Bind data and create one path per GeoJSON feature
        d3.select("#river2Layer").selectAll("path")
            .data(jsonx.features)
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
         let jsonr = await d3.json("clark.geojson");

         // Bind data and create one path per GeoJSON feature
         d3.select("#river2Layer").selectAll("path")
             .data(jsonr.features)
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
        let json4 = await d3.json("Yellowstone.geojson");

         // Bind data and create one path per GeoJSON feature
         d3.select("#otherdamLayer").selectAll("path")
         .data(json4.features)
         .join("path")
         // here we use the familiar d attribute again to define the path
        .attr("d", path)
        .style("fill", "grey")
        .on("mouseover", function(event,d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);
            div.html(d.properties.RIVER+ "<br/>" + d.properties.DAM_NAME)
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
            // here we use the familiar d attribute again to define the path
          .attr("d", path)
          .style('stroke', function(d){
            if(d.properties.WQ_CATEGORY == '5'|| d.properties =='5,5N'){
               return 'RED';}
           else if(d.properties.WQ_CATEGORY == '4' || d.properties.WQ_CATEGORY =='4C' ||d.properties =='4A'){
               return 'GREEN';
                }
           else if(d.properties.WQ_CATEGORY == '3'){
            return 'ORANGE';
           }
           else if(d.properties.WQ_CATEGORY == '2'){
            return 'PINK';
           }       
           else return 'BLACK';   

 })
           .style("stroke-width", "2");
           
           let jsony = await d3.json("little.geojson");

           // Bind data and create one path per GeoJSON feature
          d3.select("#littleLayer").selectAll("path")
               .data(jsony.features)
               .join("path")
               // here we use the familiar d attribute again to define the path
             .attr("d", path);  


              // Load in GeoJSON data
        let json5 = await d3.json("otherdams.geojson");

        

        

        // Bind data and create one path per GeoJSON feature
        d3.select("#otherdam1Layer").selectAll("path")
            .data(json5.features)
            .join("path")
            // here we use the familiar d attribute again to define the path
           .attr("d", path)
           .style("fill", "grey")
           .on("mouseover", function(event,d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);
              div.html(d.properties.RIVER+ "<br/>" + d.properties.DAM_NAME)
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY - 28) + "px");
     })
     .on("mouseout", function(d) {
            div.transition()
              .duration(500)
              .style("opacity", 0);
     });;

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

        
        rivers = 1;}
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
        
       
        rivers = 0;}

        
    
    })
    
    

    
  
    }
    wildernessareas();

