app.constant('PIECHART', { 
    options: {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d){return d.key[0];},
            y: function(d){return d.x;},
            showLabels: true,
            donut : true,
            padAngle : 0.02,
            cornerRadius : 3,
            transitionDuration: 500,
            labelThreshold: 0.1,
            color: ["#0ec4f4", "#631FF6", "#FFDC06", "#FF8406", "#b56969", "#e6cf8b"],
            legend: {
                margin: {
                    top: 0,
                    right: 100,
                    bottom: 5,
                    left: 0
                }
            }
        }
    }
});


app.constant('AREA', {
    options : {
        chart: {
            type: 'multiBarChart',
            height: 500,
            margin : {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            x: function(d) { return d.x },
            y: function(d) { return d.Count },
            useVoronoi: false,
            clipEdge: true,
            duration: 100,
            useInteractiveGuideline: true,
            xAxis: {
                showMaxMin: false,
                tickFormat: function(d) {
                    return d3.time.format('%x')(new Date(d))
                }
            },
            yAxis: {
                //tickFormat: function(d){
                //    return d3.format(',.2f')(d);
               // }
            },
            zoom: {
                enabled: true,
                //scaleExtent: [1, 10],
                useFixedDomain: false,
                useNiceScale: false,
                horizontalOff: false,
                verticalOff: true,
                unzoomEventType: 'dblclick.zoom'
            }
        }
    }
});
