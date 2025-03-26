class SdkException {
    constructor(message) {
        this.message = message;
    }
    toString() {
        return "SdkException: " + this.message;
    }
}

export default SdkException;