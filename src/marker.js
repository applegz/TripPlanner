function markerMakers(type, coordinates) {
  const marker = document.createElement('div');
  marker.style.width = '32px';
  marker.style.height = '39px';

  if (type === 'restaurant') {
    marker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  } else if (type == 'hotel') {
    marker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else {
    marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }

  new mapboxgl.Marker(marker).setLngLat(coordinates).addTo(map);
}
