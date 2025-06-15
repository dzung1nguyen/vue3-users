interface GeoModel {
  lat: string;
  lng: string;
}

interface AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModel;
}

interface CompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: CompanyModel;
}
