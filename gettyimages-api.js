import Credentials from "./lib/credentials.js";
import VideoDownloads from "./lib/downloadsvideos.js";
import ImageDownloads from "./lib/downloadsimages.js";
import Images from "./lib/images.js";
import SdkException from "./lib/sdkexception.js";
import SearchImages from "./lib/searchimages.js";
import SearchImagesCreative from "./lib/searchimagescreative.js";
import SearchImagesEditorial from "./lib/searchimageseditorial.js";
import Collections from "./lib/collections.js";
import Countries from "./lib/countries.js";
import Events from "./lib/events.js";
import Videos from "./lib/videos.js";
import SearchVideos from "./lib/searchvideos.js";
import SearchVideosCreative from "./lib/searchvideoscreative.js";
import SearchVideosEditorial from "./lib/searchvideoseditorial.js";
import CustomRequest from "./lib/customrequest.js";

const _hostName = new WeakMap();
const _credentialOptions = new WeakMap();
const _credentials = new WeakMap();

class GettyImagesApi {
    
    get credentials() {
        return _credentialOptions.get(this);
    }
    set credentials(value) {
        _credentialOptions.set(this,value);
    }
    get creds() {
        return _credentials.get(this);
    }
    set creds(value) {
        _credentials.set(this,value);
    }
    
    get hostName() {
        return _hostName.get(this);
    }
    
    set hostName(value) {
        _hostName.set(this,value);
    }
    constructor(credentials, hostName, authHostName) {
        if (!credentials.apiKey) {
            throw new SdkException("must specify an apiKey");
        }

        if (!hostName) {
            hostName = "api.gettyimages.com";
        }

        if (!authHostName) {
            authHostName = "authentication.gettyimages.com";
        }

        this.hostName = hostName;
        this.credentials = credentials;
        this.creds = new Credentials(credentials.apiKey, credentials.apiSecret, credentials.username, credentials.password, credentials.refresh_token, authHostName);
    }

    getAccessToken() {
        var creds = this.creds;
        
        if (creds.refreshToken) {
            return creds.refreshAccessToken();
        } else {
            return creds.getAccessToken();
        }
    }

    images() {
        return new Images(this.creds, this.hostName);
    }

    videos() {
        return new Videos(this.creds, this.hostName);
    }

    searchvideos() {
        return new SearchVideos(this.creds, this.hostName);
    }

    searchvideoscreative() {
        return new SearchVideosCreative(this.creds, this.hostName);
    }

    searchvideoseditorial() {
        return new SearchVideosEditorial(this.creds, this.hostName);
    }

    searchimages() {
        return new SearchImages(this.creds, this.hostName);
    }

    searchimagescreative() {
        return new SearchImagesCreative(this.creds, this.hostName);
    }

    searchimageseditorial() {
        return new SearchImagesEditorial(this.creds, this.hostName);
    }

    collections() {
        return new Collections(this.creds, this.hostName);
    }

    countries() {
        return new Countries(this.creds, this.hostName);
    }

    events() {
        return new Events(this.creds, this.hostName);
    }

    downloadsvideos() {
        return new VideoDownloads(this.creds, this.hostName);
    }

    downloadsimages() {
        return new ImageDownloads(this.creds, this.hostName);
    }

    customrequest() {
        return new CustomRequest(this.creds, this.hostName);
    }
}

/**
 * The GettyImagesApi module serves as the default export for interacting with the Getty Images API.
 * It provides methods and functionality to access and manage Getty Images resources.
 */
export default GettyImagesApi;