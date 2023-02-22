<script>
    export let station;
</script>

<div class="station-card">
    <h3>{station.label}</h3>
    <p>{station.notation}</p>
    <p>{station.gridReference}</p>

    <a class="btn btn-primary" href={'/station/' + station.notation} role="button">View sea level</a>
</div>

<style>
    .station-card {
        padding:  10px;
        border-style: solid;
        border-radius: 20px;
        max-width: 200px;
        margin: 0px;
    }

    .btn.btn-primary {
        width: 100%;
    }
    
</style>