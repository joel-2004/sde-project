const places = [
    { name: 'Chennai Airport', coordinates: [80.1633, 12.9900] }, // Chennai, India
    { name: 'Delhi Airport', coordinates: [77.1000, 28.5562] }, // Delhi, India
    { name: 'Mumbai Airport', coordinates: [72.8741, 19.0900] }, // Mumbai, India
    { name: 'Bangalore Airport', coordinates: [77.7066, 13.1990] }, // Bangalore, India
    { name: 'Kolkata Airport', coordinates: [88.4467, 22.6425] }, // Kolkata, India
    { name: 'Heathrow Airport', coordinates: [-0.4543, 51.4694] }, // London, UK
    { name: 'Charles de Gaulle Airport', coordinates: [2.5479, 49.0097] }, // Paris, France
    { name: 'Frankfurt Airport', coordinates: [8.5705, 50.0335] }, // Frankfurt, Germany
    { name: 'John F. Kennedy Airport', coordinates: [-73.7781, 40.6413] }, // New York, USA
    { name: 'John F. Kennedy International Airport', coordinates: [-73.7781, 40.6413] }, // New York, USA
    { name: 'Los Angeles International Airport', coordinates: [-118.2437, 34.0522] }, // Los Angeles, USA
    { name: 'Chicago O\'Hare International Airport', coordinates: [-87.6298, 41.8781] }, // Chicago, USA
    { name: 'Toronto Pearson International Airport', coordinates: [-79.6248, 43.6777] }, // Toronto, Canada
    { name: 'Aeropuerto Internacional Ministro Pistarini', coordinates: [-58.3816, -34.6037] }, // Buenos Aires, Argentina
    { name: 'Aeroporto Internacional do Rio de Janeiro/Galeão – Antônio Carlos Jobim', coordinates: [-43.1729, -22.9068] }, // Rio de Janeiro, Brazil
    { name: 'Aeropuerto Internacional Comodoro Arturo Merino Benítez', coordinates: [-70.7858, -33.4569] }, // Santiago, Chile
    { name: 'Aeropuerto Internacional El Dorado', coordinates: [-74.1438, 4.7109] }, // Bogotá, Colombia
    { name: 'O.R. Tambo International Airport', coordinates: [28.2460, -26.1392] }, // Johannesburg, South Africa
    { name: 'Cairo International Airport', coordinates: [31.2357, 30.0444] }, // Cairo, Egypt
    { name: 'Murtala Muhammed International Airport', coordinates: [3.4219, 6.5774] }, // Lagos, Nigeria
    { name: 'Bole International Airport', coordinates: [39.1940, 9.0514] }, // Addis Ababa, Ethiopia
    { name: 'Beijing Capital International Airport', coordinates: [116.5845, 40.0808] }, // Beijing, China
    { name: 'Tokyo Haneda Airport', coordinates: [140.3929, 35.5494] }, // Tokyo, Japan
    { name: 'Seoul Incheon International Airport', coordinates: [126.4505, 37.4692] }, // Seoul, South Korea
    { name: 'Suvarnabhumi Airport', coordinates: [100.7501, 13.6817] }, // Bangkok, Thailand
    { name: 'Singapore Changi Airport', coordinates: [103.9909, 1.3644] }, // Singapore
    { name: 'Indira Gandhi International Airport', coordinates: [77.1000, 28.5562] }, // Delhi, India
    { name: 'Kuala Lumpur International Airport', coordinates: [101.7041, 2.7456] }, // Kuala Lumpur, Malaysia
    { name: 'Hamad International Airport', coordinates: [51.6080, 25.2736] }, // Doha, Qatar
    { name: 'Dubai International Airport', coordinates: [55.3644, 25.2532] }, // Dubai, UAE
    { name: 'Hong Kong International Airport', coordinates: [113.9145, 22.3080] }, // Hong Kong
    { name: 'Shanghai Pudong International Airport', coordinates: [121.8058, 31.1443] }, // Shanghai, China
    { name: 'Incheon International Airport', coordinates: [126.4505, 37.4692] }, // Incheon, South Korea
    { name: 'Adolfo Suárez Madrid–Barajas Airport', coordinates: [-3.5673, 40.4830] }, // Madrid, Spain
    { name: 'Barcelona–El Prat Airport', coordinates: [2.0787, 41.2975] }, // Barcelona, Spain
    { name: 'Leonardo da Vinci International Airport', coordinates: [12.2389, 41.8003] }, // Rome, Italy
    { name: 'Amsterdam Airport Schiphol', coordinates: [4.7634, 52.3091] }, // Amsterdam, Netherlands
    { name: 'Zurich Airport', coordinates: [8.5600, 47.4647] }, // Zurich, Switzerland
    { name: 'Vienna International Airport', coordinates: [16.5639, 48.1103] }, // Vienna, Austria
    { name: 'Munich Airport', coordinates: [11.7861, 48.3537] }, // Munich, Germany
    { name: 'Copenhagen Airport', coordinates: [12.6475, 55.6180] }, // Copenhagen, Denmark
    { name: 'Helsinki Airport', coordinates: [24.9628, 60.3174] }, // Helsinki, Finland
    { name: 'Prague Václav Havel Airport', coordinates: [14.2632, 50.1005] }, // Prague, Czech Republic
    { name: 'Aeroporto di Roma Ciampino', coordinates: [12.5949, 41.7994] }, // Rome, Italy
    { name: 'Paris Orly Airport', coordinates: [2.3659, 48.7262] }, // Paris, France
    { name: 'Berlin Brandenburg Airport', coordinates: [13.5034, 52.3671] }, // Berlin, Germany
    { name: 'Barcelona–El Prat Airport', coordinates: [2.0787, 41.2975] }, // Barcelona, Spain
    { name: 'Vienna International Airport', coordinates: [16.5639, 48.1103] }, // Vienna, Austria
    { name: 'Sydney Kingsford Smith Airport', coordinates: [151.1772, -33.9461] }, // Sydney, Australia
    { name: 'Melbourne Airport', coordinates: [144.8430, -37.6690] }, // Melbourne, Australia
    { name: 'Brisbane Airport', coordinates: [153.1175, -27.3842] }, // Brisbane, Australia
    { name: 'Perth Airport', coordinates: [115.9613, -31.9405] }, // Perth, Australia
    { name: 'Adelaide Airport', coordinates: [138.5311, -34.9381] }, // Adelaide, Australia
    { name: 'Rajiv Gandhi International Airport', coordinates: [78.4294, 17.2405] }, // Hyderabad, India
    { name: 'Chhatrapati Shivaji Maharaj International Airport', coordinates: [72.8741, 19.0890] }, // Mumbai, India
    { name: 'Kempegowda International Airport', coordinates: [77.7105, 13.1996] }, // Bangalore, India
    { name: 'Netaji Subhas Chandra Bose International Airport', coordinates: [88.4467, 22.6547] }, // Kolkata, India
    { name: 'Sardar Vallabhbhai Patel International Airport', coordinates: [72.7527, 23.0779] }, // Ahmedabad, India
    { name: 'Goa International Airport', coordinates: [73.8375, 15.3807] }, // Dabolim, India
    { name: 'Chaudhary Charan Singh International Airport', coordinates: [80.8848, 26.7606] }, // Lucknow, India
    { name: 'Thiruvananthapuram International Airport', coordinates: [76.9209, 8.4821] }, // Thiruvananthapuram, India
    { name: 'Rajiv Gandhi International Airport', coordinates: [78.4294, 17.2405] }, // Hyderabad, India
    ];

    export {places};