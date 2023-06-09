import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = "https";//"https";//const PROTOCOL = "https";
const PORT = 443;//const PORT = 443;
const BASE_URL = "yachaywebservices.com"; //const BASE_URL = "iisrestfacturascore.azurewebsites.net";

export class ConfigurationDataSource {

    public baseUrl: string;
    public user_id: string;
    public user_token: string;
    public pws_token: string;
    public user_name: string;
    public nroItemsCarrito: number;
    public categoriasEnFamilias: boolean = false;
    public imagenLogo: string = "";

    private static instance: ConfigurationDataSource;

    private constructor() {
        this.user_token = 'NWUyNGM0NzYtZGM3Yy00MGE2LTk5NmYtNDFmOGY2OGIxNGQw';
        this.pws_token = 'OTVhNjM3MDktNmIxYy00OTk2LTg0MGItMjFjZjFiM2IxZWNh';
        this.baseUrl = `${PROTOCOL}://${BASE_URL}:${PORT}/`;
    }

    public static getInstance(): ConfigurationDataSource {
        if (!ConfigurationDataSource.instance) {
            ConfigurationDataSource.instance = new ConfigurationDataSource();
        }
        return ConfigurationDataSource.instance;
    }

    // CONFIGURACIÒN HEADERS MACHU PICCHU
    getConfHeaders(): HttpHeaders {
        var headers = new HttpHeaders();
        headers = headers.set('IdUser', `${this.user_id}`);
        headers = headers.set('IdEmpresa', 'SG90ZWxJbnRpd2F0YW5hREI='); // MAPI
        // headers = headers.set('IdEmpresa', 'SW50aXdhdGFuYUN1c2NvREI=');
        // headers = headers.set('IdEmpresa', 'RmFjdHVyYWNpb25FbGVjdHJvbmljYQ==');
        headers = headers.set('Authorization', `Basic ${this.user_token}:${this.pws_token}`);
        return headers;
    }
    // CONFIGURACIÒN HEADERS CUSCO
    getConfHeadersCusco(): HttpHeaders {
        var headers = new HttpHeaders();
        headers = headers.set('IdUser', `${this.user_id}`);
        // headers = headers.set('IdEmpresa', 'SW50aXdhdGFuYUN1c2NvREI=');
        // headers = headers.set('IdEmpresa', 'SG90ZWxJbnRpd2F0YW5hREI=');
        // headers = headers.set('IdEmpresa', 'RmFjdHVyYWNpb25FbGVjdHJvbmljYQ==');
        headers = headers.set('IdEmpresa', 'SW50aXdhdGFuYUN1c2NvREI='); //Cusco
        headers = headers.set('Authorization', `Basic ${this.user_token}:${this.pws_token}`);
        return headers;
    }
}
