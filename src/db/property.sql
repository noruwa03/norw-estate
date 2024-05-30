CREATE TABLE properties (
    id BIGSERIAL,
    property_id UUID DEFAULT gen_random_uuid(),
    property VARCHAR(100) NOT NULL,
    property_title VARCHAR(100) NOT NULL,
    price VARCHAR(100) NOT NULL,
    longitude VARCHAR(10) NOT NULL,
    latitude VARCHAR(10) NOT NULL,
    property_HTML TEXT NOT NULL,
    property_photoname VARCHAR(100) NOT NULL,
    photo_url TEXT NOT NULL,
    contact VARCHAR(50) NOT NULL,
    uid UUID NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);