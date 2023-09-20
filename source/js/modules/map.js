import {map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker} from '../../../node_modules/leaflet/dist/leaflet';

const initContactsMap = () => {
  if (document.querySelector('#map')) {
    document.querySelector('#map').querySelector('picture').remove();

    const coordinate = [55.028527396640804, 82.92824989073691];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const markerText = `
<p>г. Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»</p>
<p>Номер телефона: <a href="tel:+796387687676">+7 963 876 876 76</a></p>
`;

    const map = createMap('map', {
      center: coordinate,
      zoom: 17,
      scrollWheelZoom: false,
    });

    const icon = createIcon({
      iconUrl: './img/svg/map-marker.svg',
      className: 'contacts__map-icon',
      iconAnchor: [40, 70],
    });

    createTitleLayers(url).addTo(map);
    createMarker(coordinate, {icon}).bindPopup(markerText).addTo(map);
  }
};

export {initContactsMap};
