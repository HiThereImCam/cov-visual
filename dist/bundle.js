!function(){"use strict";var a,t,n={Alabama:"AL",Alaska:"AK",Arkansas:"AR",Arizona:"AZ",California:"CA",Colorado:"CO",Connecticut:"CT",Delaware:"DE",Florida:"FL",Georgia:"GA",Hawaii:"HI",Iowa:"IA",Idaho:"ID",Illinois:"IL",Indiana:"IN",Kansas:"KS",Kentucky:"KY",Louisiana:"LA",Massachusetts:"MA",Maryland:"MD",Maine:"ME",Michigan:"MI",Minnesota:"MN",Missouri:"MO",Mississippi:"MS",Montana:"MT","North Carolina":"NC","North Dakota":"ND",Nebraska:"NE",Nevada:"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY",Ohio:"OH",Oklahoma:"OK",Oregon:"OR",Pennsylvania:"PA","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD",Tennessee:"TN",Texas:"TX",Utah:"UT",Virginia:"VA",Vermont:"VT",Washington:"WA",Wisconsin:"WI","West Virginia":"WV",Wyoming:"WY"},e=d3.select("#svg");axios.get("https://api.covidtracking.com/v1/us/current.json").then((function(a){covidUsData=a})),axios.get("https://api.covidtracking.com/v1/states/current.json").then((function(a){t=a,i()}));var i=function(){e.selectAll("path").data(a).enter().append("path").attr("d",d3.geoPath()).attr("fill",(function(a){var e=a.properties.name,i=t.data.find((function(a){return a.state===n[e]}));if(null!=i&&i.positive>1)return"red"}))};d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json").then((function(t){a=topojson.feature(t,t.objects.states).features}))}();