import WebHelper from "./webhelper.js";
import GettyApiRequest from "./baseclasses/gettyApiRequest.js";

class Collections extends GettyApiRequest{    
    execute() {
        var credentials = this.credentials;
        var hostName = this.hostName;
        
        var path = "/v3/collections";
        var webHelper = new WebHelper(credentials, hostName);
        return webHelper.get(path);
    }
}

export default Collections;