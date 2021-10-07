import faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  getDetails(): string {
    return `
        <div>
        <h2>${this.name}</h2>
        </div>
        `;
  }
}
