/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const url1 = "https://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=m";
    const res = await fetch(url1);
    const item = await res.json();
   
    return { item };
  }