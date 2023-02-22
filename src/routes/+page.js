/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const url1 = "https://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=m";
    const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=3744ca1903a783039a54cc29faaebc06&language=en-US&page=1"
    const res = await fetch(url1);
    const item = await res.json();
   
    return { item };
  }