<script>
    /** @type {import('./$types').PageLoad} */
	import MeasuresCard from '../components/MeasuresCard.svelte';

    
    export let data;
    console.log(data);

    let currentLevel = 0;
    let previousLevel = 0;
    let station = "";
    let stationID = "";
    let daily;
    let refreshed = false;
    let measuresVisible = false;

    async function handleClick(x, y) {
        refreshed = !refreshed;
        const url = "https://environment.data.gov.uk/flood-monitoring/id/stations/"+ x + "/readings?_sorted&_limit=2";
        const res = await fetch(url);
        const measures = await res.json();
        console.log(measures);
        currentLevel = measures.items[0].value;
        previousLevel = measures.items[1].value;
        station = y;
        stationID = x;
        measuresVisible = false;
  };

    function showMeasures() {
        measuresVisible = true;
  };

  stationID = stationID;

  </script>
  


<div class="container">
    <!--First row of the page layout-->
    <div class="row">
        <!--First column of the page layout-->
        <div class="col">
            <div class="container pt-4 pb-2">
                <h1>Stations</h1>
                <!--Bootstrap dropdown list with button functionality-->
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Select station
                    </button>
                    <ul class="dropdown-menu">
                    <!--FOR EACH statement that takes the data pulled on page load and uses the station ID (notation) and label (station name) as the dropdown option name. When a user selects an option it passes the ID and Name through to a page function
                    which is then used to make second on-demand API call to retrive the last 2 readings from the selected station-->
                     {#each data.item.items as station}
                        <li><a class="dropdown-item" on:click={handleClick(station.notation, station.label)} href="#">{station.label}</a></li>
                     {/each}
                    </ul>
                    
                  </div>
            </div>
        </div>
    </div>

    <!--Second row of the page layout-->
    <div class="row">
        <!--Second column of the page layout-->
        <div class="col">
            <div class="container pt-2">
                <hr />
                <h1>Sea Level</h1>
                {#if currentLevel == 0}
                    <div>
                        <p>Please select a station from the dropdown above.</p>
                    </div>
                    {:else}
                    <!--Container showing the current / previous levels and the graphic for if the tide is coming in or going out-->
                    <div>
                        <h5>{station}</h5>
                        <p>
                            Current level: {currentLevel} <br>
                            Previous level: {previousLevel}
                        </p>
                        <!--IF statement to check if the tide is coming in or going out and then show the correct graphic and text-->
                        {#if currentLevel > previousLevel}
                        
                        <!--IF the current measurement is higher than the previous measurement then the tide is coming in show this-->
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-top" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                              </svg>
                              <p>Tides coming in</p>
                              </div>
                        
                              <!--Otherwise show this-->
                              {:else}
                        
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
                            </svg>
                            <p>Tides going out</p>
                        </div>
                        {/if}


                        <!--Component SECTION--------------------------------------------->
                       
                        <hr>
                        <button type="button" class="btn btn-primary" on:click={showMeasures}>Get the last 50 readings</button>
                        {#if measuresVisible}
                            {#key refreshed}
                                <MeasuresCard {stationID}/>
                            {/key}
                        {/if}
                        
                        
                        <!---END of SECTION------------------------------------->

                    </div>
                {/if}
                
                
            </div>
        </div>
    </div>
    
  
</div>





    <style>
        .container {
            max-width: 80%;
            margin:auto;
            align-items: center;
        }

        :global(h1) {
            font-family: Arial, Helvetica, sans-serif;
        }

        :global(p) {
            font-family: Arial, Helvetica, sans-serif;
        }

        :global(a) {
            font-family: Arial, Helvetica, sans-serif;
        }

        :global(h3) {
            font-family: Arial, Helvetica, sans-serif;
        }

        

    </style>
