<div class="container pt-2">
    <h2>Overview</h2>
    <p>The API Tide Tool uses the open API made available by the Environment Agency on behalf of the UK Coastal Flood Forecasting service. </p>
    <hr>
    <h2>Frameworks</h2>
    <p>The web app was built using <a href="https://svelte.dev/">Sveltekit</a> and Bootstrap for the limited amount of styling.</p>
    <hr>
    <h2>API Calls</h2>
    <p>On load a fetch request is made to: https://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=m </p>
    <p>The data return is used to populate the dropdown list, specifically the "Label" element of the returned json data. </p>
    <p>When a user selects a station from the drodown list the station "label" and "station ID" are passed through to a page function
    which makes a call to a second API. This API returns measurements for the particular station selected. This return is limited to the last 2 readings
    by using limit=2 in the API link.</p>
    
</div>