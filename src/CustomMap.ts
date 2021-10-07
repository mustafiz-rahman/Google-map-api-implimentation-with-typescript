import { User } from "./User";
import { Company } from "./Company";

interface IMap {
  location: {
    lat: number;
    lng: number;
  };
  getDetails(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mapAble: IMap): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapAble.location.lat,
        lng: mapAble.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapAble.getDetails(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
