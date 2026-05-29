

// Line chart - Objects launches over time 
var vg_1 = "charts/satellites_over_time.vg.json";

vegaEmbed("#chart1", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Map - Launch sites map 
var vg_2 = "charts/launch_sites_map.vg.json";

vegaEmbed("#chart2", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// treechart - No of satellites vs their purpose
var vg_3 = "charts/satellites_purpose.vg.json";

vegaEmbed("#chart3", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// treechart - No of satellites vs their purpose
var vg_4 = "charts/country_purpose.vg.json";

vegaEmbed("#chart4", vg_4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// treechart - No of satellites vs their purpose
var vg_5 = "charts/owner_contractor.vg.json";

vegaEmbed("#chart5", vg_5).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "charts/aus_satellites_over_time.vg.json";

vegaEmbed("#chart6", vg_6).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_7 = "charts/aus_mass_year.vg.json";

vegaEmbed("#chart7", vg_7).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);