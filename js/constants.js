app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});

app.constant('CATEGORIES', [ "Recon.Scanning", "Attempt.Login", "Availability.DoS" ]);
app.constant('PROTOCOLS', [ "tcp", "dns", "udp" ]);
app.constant('TYPES', ["barchart", "piechart", "top"])

app.constant('PIECHART', { 
    options: {
        chart: {
            type: 'pieChart',
            height: 450,
            x: function(d){return d.key[0];},
            y: function(d){return d.x;},
            showLabels: true,
            donut : true,
            padAngle : 0.00,
            cornerRadius : 1,
            transitionDuration: 500,
            labelThreshold: 0,
            //color: ["#0ec4f4", "#631FF6", "#FFDC06", "#FF8406", "#b56969", "#e6cf8b"],
            legend: {
                margin: {
                    top: 5,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            tooltipContent : function(key, x, y, e, graph) {
                                console.log(key);
                                console.log(y);
                                console.log(e);
                                console.log(graph);
                                return 'Olalala!';
                             },
            pie : {
                dispatch: {
                    //chartClick: function(e) {console.log(e)},
                    elementClick: function(e) {console.log(e)},
                    //elementDblClick: function(e) {console.log("element double click")},
                    //elementMouseover: function(e) {console.log("element mouseover")},
                    //elementMouseout: function(e) {console.log("element mouse out")}            
                },
                labelType : "percent",
                labelsOutside : true,
                //startAngle : function(d) { return d.startAngle/2 -Math.PI/2 },
                //endAngle : function(d) { return d.endAngle/2 -Math.PI/2 }
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
                top: 30,
                right: 20,
                bottom: 100,
                left: 50
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
                    return d3.time.format('%m/%d %H:%M')(new Date(d))
                },
                rotateLabels : -45,
            },
            yAxis: {
                tickFormat: function(d){
                    return d3.format(',.0f')(d);
                }
            },
            zoom: {
                enabled: true,
                //scaleExtent: [1, 10],
                useFixedDomain: false,
                useNiceScale: false,
                horizontalOff: false,
                verticalOff: true,
                unzoomEventType: 'dblclick.zoom'
            }, 
            dispatch: {
                stateChange: function(e){ console.log("stateChange"); },
                changeState: function(e){ console.log("changeState"); },
                tooltipShow: function(e){ console.log("tooltipShow"); },
                tooltipHide: function(e){ console.log("tooltipHide"); }
            },
            multibar: {
                dispatch : {
                    elementClick: function(e) {console.log(e)},

                }
            }
        }
    }
});
