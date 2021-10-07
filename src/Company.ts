import faker from "faker";

export class Company {
  companyName: string;
  catchPhress: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhress = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  getDetails(): string {
    return `
            <div>
            <h2>${this.companyName}</h2>
            <h3>${this.catchPhress}</h3>
            </div>
        `;
  }
}
