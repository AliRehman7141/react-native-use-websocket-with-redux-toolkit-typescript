// Define the type for the flag details
interface Flag {
    img: string;         // URL of the flag image
    emoji: string;       // Emoji representation of the flag
    emoji_unicode: string; // Unicode for the emoji
}

// Define the type for the connection details
interface Connection {
    asn: number;         // Autonomous System Number
    org: string;         // Organization providing the connection
    isp: string;         // Internet Service Provider
    domain: string;      // Domain of the ISP
}

// Define the type for the timezone details
interface Timezone {
    id: string;          // Timezone ID (e.g., "Asia/Karachi")
    abbr: string;        // Timezone abbreviation (e.g., "PKT")
    is_dst: boolean;     // Daylight Saving Time indicator
    offset: number;      // Offset from UTC in seconds
    utc: string;         // UTC offset as a string (e.g., "+05:00")
    current_time: string; // Current time in the timezone
}

// Define the main type for the IP data
export interface IPAddressData {
    ip: string;          // IP address
    success: boolean;    // Success indicator of the lookup
    type: string;        // IP address type (e.g., "IPv4")
    continent: string;   // Continent name
    continent_code: string; // Continent code (e.g., "AS")
    country: string;     // Country name
    country_code: string; // Country code (e.g., "PK")
    region: string;      // Region name
    region_code: string; // Region code (e.g., "PB")
    city: string;        // City name
    latitude: number;    // Latitude coordinate
    longitude: number;   // Longitude coordinate
    is_eu: boolean;      // Indicator if the country is part of the EU
    postal: string;      // Postal code
    calling_code: string; // Country calling code
    capital: string;     // Capital city
    borders: string;     // Bordering countries' codes
    flag: Flag;          // Flag details
    connection: Connection; // Connection details
    timezone: Timezone;  // Timezone details
}

export interface IPAddressSliceState {
    IPAddressData: IPAddressData | null;
    activeImage: string
}