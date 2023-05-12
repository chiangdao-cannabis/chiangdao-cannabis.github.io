// Initialize and add the map
let map;

async function initMap() {
    // The location of Chiang Dao 19.343710238801116, 98.97440532494934
    const position = { lat: 19.343710238801116, lng: 98.97440532494934 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Chiang Dao
    map = new Map(document.getElementById("map"), {
        zoom: 8,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
    });
}

initMap();