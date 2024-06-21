import { getRequest } from './index';

export const getIPAddressInfoAPI = (ipAddress: string) => getRequest(`/${ipAddress}`)

