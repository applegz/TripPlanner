import mapboxgl from 'mapbox-gl';
import markerMakers from './marker';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZmZhbW9jaG9uZyIsImEiOiJja2Z3cHRhNWUwMDNhMzBqdjFpMGliYnJ1In0.vwRd-hs09G0q6aI4syBdvg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
