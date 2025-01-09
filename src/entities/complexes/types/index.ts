export interface ComplexesRoot {
    projects: Complex[];
}

export interface Complex {
    id: number;
    logo: string;
    alias: string;
    latitude: string;
    longitude: string;
    project_class: string;
    title: string;
    description: string;
    district: string;
    street: string;
    house_number: string;
    crossing_with: string;
    property_total: number;
    filters: Filter[];
    images: Image[];
}

export interface Filter {
    rooms: number;
    min_price: number;
    max_price: number;
    min_size: number;
    max_size: number;
    property_amount: number;
}

export interface Image {
    id: number;
    image: string;
}
