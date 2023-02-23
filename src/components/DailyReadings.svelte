<script>
	import Page from "../routes/+page.svelte";

	export let stationID;
    let readings;
    let promise;
    let visible = false;
    
    async function getDailyReadings() {

        const res = await fetch("http://environment.data.gov.uk/flood-monitoring/id/stations/" + stationID + "/readings?_sorted&_limit=50");
		let readings = await res.json();
        
        if (res.ok) {
			console.log(readings);
            visible = true;
            return readings;
            
		} else {
			throw new Error(readings);
		}

    }

    function handleClick() {
		const promise = getDailyReadings();
        
	}

</script>

<table class="table">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Reading</th>
      </tr>
    </thead>
    <tbody>
        {#if visible}
        {#each readings as items}
            <tr>
                <td></td>
                <td></td>
            </tr>
        {/each}

    {:else}
        <p>No data</p>
    {/if}
        
        
    </tbody>
  </table>