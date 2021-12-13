async function myMap() {
    let mapProp= {
        center: {lat: 51.508742, lng: -0.120850},
        zoom:5
    };
    const map = new google.maps.Map(document.getElementById("map"),mapProp);

    let response =  await fetch('/markers');
    let markers = await response.json();

    markers.forEach(function (marker) {
        new google.maps.Marker({
            position: {lat: parseInt(marker.latitude.$numberDecimal), lng: parseInt(marker.longitude.$numberDecimal)},
            map,
            title: "Hello World!"
        })
    })
}
