<script>

    export let stationID;

    const getReadings = async () => {
        const res = await fetch("http://environment.data.gov.uk/flood-monitoring/id/stations/" + stationID + "/readings?_sorted&_limit=50");
        const data = await res.json();
        return data;
    }
    $: stationID = stationID;
    
</script>


<!--Main Section-->

<div class="container">
        
    
    {#await getReadings()}
            ...Loading
        {:then data} 
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Reading</th>
                </tr>
                </thead>
                <tbody>
                    {#each data.items as {dateTime, value}}
                    
                    <tr>
                        <td>{dateTime}</td>
                        <td>{value}</td>
                    </tr>
                    
                    {/each}
                </tbody>
            </table>
        
        {/await}
       
      
   
</div>



<!--END of Main Section-->
<style>

</style>