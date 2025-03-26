import WebHelper from "./webhelper.js";
import GettyApiRequest from "./baseclasses/gettyApiRequest.js";

class Countries extends GettyApiRequest {
    execute() {
        var credentials = this.credentials;
        var hostName = this.hostName;
        
        var path = "/v3/countries";
        var webHelper = new WebHelper(credentials, hostName);
        return webHelper.get(path);
    }
}
    
export default Countries; 
