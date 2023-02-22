<script>
    /** @type {import('./$types').PageLoad} */
    import SeaLevel from '../components/SeaLevel.svelte';
    export let data;
    console.log(data);

    let currentLevel = 0;
    let previousLevel = 0;

    async function handleClick(x) {
        const url = "https://environment.data.gov.uk/flood-monitoring/id/stations/"+ x + "/readings?_sorted&_limit=2";
        const res = await fetch(url);
        const measures = await res.json();
        console.log(measures);
        currentLevel = measures.items[0].value;
        previousLevel = measures.items[1].value;
        
  }
  </script>
  


<div class="container">
    
    <div class="row">
        <div class="col">
            <div class="container pt-4 pb-2">
                <h1>Stations</h1>
                
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Select station
                    </button>
                    <ul class="dropdown-menu">
                     {#each data.item.items as station}
                        <li><a class="dropdown-item" on:click={handleClick(station.notation)} href="#">{station.label}</a></li>
                     {/each}
                    </ul>
                    
                  </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="container pt-2">
                <hr />
                <h1>Sea Level</h1>
                {#if currentLevel = 0}
                    <div>
                        <h3>Please select a station from the dropdown above.</h3>
                    </div>
                    {:else}
                    <div>
                    <p>Current level: {currentLevel}</p>
                    <p>Previous level: {previousLevel}</p>
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
