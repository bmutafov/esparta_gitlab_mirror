import { Request } from "./../../components/molecules/RequestsTableBody";
import { User } from "interfaces/User";
import { number } from "prop-types";

interface LoginEndpointData {
  email: string;
  password: string;
}

interface RequestGroupEndpointData {
  borrower_id: number;
  manager_id?: number | null;
}

export interface RequestItemResponse {
  id: number;
  updated_at: string;
  created_at: string;
  item_id: string;
  item_type_id: string;
  item_type: ItemTypeResponse;
  request_group_id: string;
  date_borrowed: string;
  date_due: string;
  date_returned: string;
}

export interface RequestGroupResponse {
  borrower_id: number;
  manager_id: string;
  updated_at: string;
  created_at: string;
  approved: boolean | null;
  depot_id: string;
  id: string;
  request_items: RequestItemResponse[];
}

interface LoginEndpointResponse {
  //onSuccess:
  user?: User;
  access_token?: string;

  //onError:
  message?: string;
}

export interface RequestItemData {
  item_id?: string;
  request_group_id: number;
  approved: number;
  item_type_id: string;
  date_due?: string;
  date_borrowed?: string;
  date_returned?: string;
}

export interface ItemTypeResponse {
  id: string;
  name: string;
  price: string;
  image: string;
  weight_category: string;
  category: string;
  desired_amount: string;
  created_at: string;
  updated_at: string;
  date_returned: string;
  date_borrowed: string;
  date_due: string;
}

export interface ItemResponse {
  id: number;
  item_type_id: string;
  item_type: ItemTypeResponse;
  serial: string;
  created_at: string;
  updated_at: string;
  depot_id: string | null;
}

export interface ItemData {
  item_type_id: string;
  serial: string;
  depot_id: string;
}

export interface RequestGroupQueryParams {
  borrower_id?: string;
  manager_id?: string | null;
  approved?: string;
  depot?: string;
}

export interface ItemTypeData {
  name: string;
  image?: string;
  price?: number;
  weight_category: number;
  desired_amount: number;
}

export interface DepotListResponse {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  address: string;
  longitude: string;
  latitude: string;
  managers: User[];
}

/**
 * ! EXAMPLE POST/PUT CONFIG ENTRY
 * post config has to has the following:
 *
 * method: "POST" | "PUT"
 * url: <url of the endpoint>
 * response: <interface of the responseObject>
 * data: <interface of the data sent to the API object>
 *
 */

/**
 * ! EXAMPLE GET CONFIG ENTRY
 *
 * method: "GET"
 * url: <url of the endpoint>
 * response: <interface of the responseObject>
 *
 */

export type GetEndpoint =
  | {
      method: "GET";
      url: "/api/itemtypes";
      queryParams: undefined;
      response: ItemTypeResponse[];
    }
  | {
      method: "GET";
      url: "/api/items";
      queryParams: undefined;
      response: ItemResponse[];
    }
  | {
      method: "GET";
      url: "/api/users";
      queryParams: undefined;
      response: User[];
    }
  | {
      method: "GET";
      url: "/api/requestgroup";
      queryParams: RequestGroupQueryParams;
      response: RequestGroupResponse[];
    }
  | {
      method: "GET";
      url: "/api/depot";
      queryParams: undefined;
      response: DepotListResponse[];
    };

export type PostEndpoint =
  | {
      method: "POST";
      url: "/api/login";
      data: LoginEndpointData;
      response: LoginEndpointResponse;
    }
  | {
      method: "POST";
      url: "/api/requestgroup";
      data: RequestGroupEndpointData;
      response: RequestGroupResponse;
    }
  | {
      method: "POST";
      url: "/api/requestitem";
      data: RequestItemData[];
      response: RequestItemResponse;
    }
  | {
      method: "POST";
      url: "/api/itemtypes";
      data: ItemTypeData;
      response: ItemTypeResponse;
    }
  | {
    method: "POST";
    url: "/api/items";
    data: ItemData[];
    response: LoginEndpointResponse;
    };
