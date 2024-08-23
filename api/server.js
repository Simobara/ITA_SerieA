require('dotenv').config({ path: '../.env' });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
const https = require('https');
const app = express();
const PORT = process.env.PORT || 5000;

console.log("----------------------------------");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("USERNAME:", process.env.USERNAME);
console.log("PASSWORD:", process.env.PASSWORD ? "*****" : "Mancante");
console.log("CLUSTER_URL:", process.env.CLUSTER_URL);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("VITE_API_URL_PROD:", process.env.VITE_API_URL_PROD);
console.log("VITE_API_URL_DEV:", process.env.VITE_API_URL_DEV);
console.log("----------------------------------");

// Middleware CORS
const allowedOrigins = [
    'https://ita-serie-a.vercel.app',   //VERIFICA ONLINE
    'http://localhost:5173',            //FASE DI DEVELOPMENT
    'http://localhost:3000',            //FASE DI PRODUCTION
    'http://another-allowed-origin.com',//SAMPLE
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

let cachedDb = null;
let cachedDbName = null;

async function connectToDatabase(dbName) {
    if (cachedDb && cachedDbName === dbName) {
        return cachedDb;
    }

     // Se c'è una connessione attiva con un database diverso, chiudila
     if (mongoose.connection.readyState !== 0 && cachedDbName !== dbName) {
      console.log('Closing existing MongoDB connection...');
      await mongoose.connection.close();
  }
  
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const clusterUrl = process.env.CLUSTER_URL;
    const dbURI = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0&connectTimeoutMS=10000`;

    try {
        console.log(`Trying to connect to MongoDB database: ${dbName}`);
        const connection = await mongoose.connect(dbURI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        });

        cachedDb = connection;
        cachedDbName = dbName;
        console.log(`Connected to MongoDB Atlas database: ${dbName}`);

        return cachedDb;
    } catch (err) {
        console.error(`Could not connect to MongoDB Atlas database: ${dbName}`, err);
        throw new Error('Database connection failed');
    }
}

const agent = new http.Agent({ keepAlive: true });
const secureAgent = new https.Agent({ keepAlive: true });

//--------------------------------------------------ENDPOINTS
const routerGiornateClou = require('./routes/routesGiornataClouN');
const routerGiornata = require('./routes/routesGiornata');
const routerCoppaItaTrentaduesimi = require('./routes/CoppaItalia/routesCoppaIta1Trentaduesimi');
const routerCoppaItaSedicesimi = require('./routes/CoppaItalia/routesCoppaIta2Sedicesimi');
const routerCoppaItaOttavi = require('./routes/CoppaItalia/routesCoppaIta3Ottavi');
const routerCoppaItaQuarti = require('./routes/CoppaItalia/routesCoppaIta4Quarti');
const routerCoppaItaSemifinali = require('./routes/CoppaItalia/routesCoppaIta5Semifinali');
const routerCIFinale = require('./routes/CoppaItalia/routesCoppaIta6Finale');

//--------------------------------------------------CAMPIONATO
app.use('/api', async (req, res, next) => {
    let dbName;
    if (req.path.startsWith('/giornate') || req.path.startsWith('/giornata')) {
        dbName = process.env.DB_NAME_SERIE_A;
    } else if (req.path.startsWith('/coppaIta')) {
        dbName = process.env.DB_NAME_COPPA_ITA;
    } else {
        console.log('No matching route, passing to next middleware.');
        return next();
    }

    await connectToDatabase(dbName);


    // Importa i modelli solo dopo esserti connesso al database corretto
    if (dbName === process.env.DB_NAME_SERIE_A) {
        const schemaGiornataClouN = require('./schemas/schemaGiornataClouN');
    } else if (dbName === process.env.DB_NAME_COPPA_ITA) {
        const {
            CoppaItaTrentaduesimiA1, CoppaItaTrentaduesimiA2, CoppaItaTrentaduesimiA3, CoppaItaTrentaduesimiA4,
            CoppaItaTrentaduesimiA5, CoppaItaTrentaduesimiA6, CoppaItaTrentaduesimiA7, CoppaItaTrentaduesimiA8,
            CoppaItaTrentaduesimiB1, CoppaItaTrentaduesimiB2, CoppaItaTrentaduesimiB3, CoppaItaTrentaduesimiB4,
            CoppaItaTrentaduesimiB5, CoppaItaTrentaduesimiB6, CoppaItaTrentaduesimiB7, CoppaItaTrentaduesimiB8,
            CoppaItaSedicesimiA1, CoppaItaSedicesimiA2, CoppaItaSedicesimiA3, CoppaItaSedicesimiA4,
            CoppaItaSedicesimiB1, CoppaItaSedicesimiB2, CoppaItaSedicesimiB3, CoppaItaSedicesimiB4,
            CoppaItaOttaviA1, CoppaItaOttaviA2, CoppaItaOttaviA3, CoppaItaOttaviA4,
            CoppaItaOttaviB1, CoppaItaOttaviB2, CoppaItaOttaviB3, CoppaItaOttaviB4,
            CoppaItaQuartiA1, CoppaItaQuartiA2, CoppaItaQuartiB1, CoppaItaQuartiB2,
            CoppaItaSemifinaleA, CoppaItaSemifinaleB, CoppaItaFinale
        } = require('./schemas/schemaCoppaIta');
    }

    // Usa switch per gestire le rotte
    switch (true) {
        case req.path.startsWith('/giornate'):
            routerGiornateClou(req, res, next);
            break;
        case req.path.startsWith('/giornata'):
            routerGiornata(req, res, next);
            break;
        //-----------------------------------------------COPPAITALIA
        //-----------------------------------------------Trentaduesimi
        case req.path.startsWith('/coppaItaTrentaduesimi'):
            routerCoppaItaTrentaduesimi(req, res, next);
            break;
        //-----------------------------------------------Sedicesimi
        case req.path.startsWith('/coppaItaSedicesimi'):
            routerCoppaItaSedicesimi(req, res, next);
            break;
        //-----------------------------------------------Ottavi
        case req.path.startsWith('/coppaItaOttavi'):
            routerCoppaItaOttavi(req, res, next);
            break;
        //-----------------------------------------------Quarti
        case req.path.startsWith('/coppaItaQuarti'):
            routerCoppaItaQuarti(req, res, next);
            break;
        //-----------------------------------------------Semifinali
        case req.path.startsWith('/coppaItaSemifinale'):
            routerCoppaItaSemifinali(req, res, next);
            break;
        //-----------------------------------------------Finale
        case req.path.startsWith('/coppaItaFinale'):
            routerCIFinale(req, res, next);
            break;
        default:
            console.log('No matching route, passing to next middleware.');
            next();
    }
});

//----------------------------------------------------------------
app.get('/api/test', (req, res) => {
    res.status(200).send('Test endpoint is working!');
});

app.listen(PORT, () => {
    console.log(`Server.js => Server running on port ${PORT}`);
});
