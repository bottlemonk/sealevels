<div class="container pt-2">
    <h2>Overview</h2>
    <p>The API Tide Tool uses the <a href="https://environment.data.gov.uk/flood-monitoring/doc/tidegauge">Environment Agency Tide Gauge API</a> made available by the Environment Agency on behalf of the UK Coastal Flood Forecasting service. </p>
    <hr>
    <h2>Frameworks</h2>
    <p>The web app was built using <a href="https://svelte.dev/">Sveltekit</a> and <a href="https://getbootstrap.com">Bootstrap</a>.</p>
    <hr>
    <h2>API Calls</h2>
    <h5 class="text-muted">1st API Call</h5>
        <p>On load a fetch request is made to: https://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=m </p>
        <p>The data returned from the API endpoint is used to populate the dropdown list, specifically the "Label" element of 
        the returned json data. Other information is used later on but not by the dropdown list.</p>
    
    <h5 class="text-muted">2nd API Call</h5>
    
        <p>When a user selects a station from the drodown list the station "label" and "station ID" are passed through to a page function
        which makes a call to a second API. This API endpoint returns measurements for the particular station selected. This return is limited to 
        the last 2 readings by using limit=2 in the API endpoint.</p>

        <p>The returned data is displayed as the current level (the most recent reading from the station) and the previous level (the second to last reading
            returned from the station). A little bit of logic is then used to calculate which arrow to show.</p>
    
</div>