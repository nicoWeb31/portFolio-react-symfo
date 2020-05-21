import React from 'react';


const url = "https://127.0.0.1:8000/api/";
class HttpRequester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastResponse: null
        }
    }

    performRequest = async (verb, path, body = {}) => {
        try {
            let response;
            switch (verb) {
                case "get":
                    response = await request.get({ url: url + path, json: true});
                    break;
                case "post":
                    response = await request.post({ url: url + path, body: body, json: true});
                    break;
                case "put":
                    response = await request.put({ url: url + path, body: body, json: true });
                    break;
                case "delete":
                    response = await request.delete({ url: url + path, body: body, json: true});
                    break;
                    default:
            }
            this.setState({ lastResponse: response });
            console.warn(response);
        } catch (err) {
            console.log(`${err.message}`);
        }
    };

}








export default HttpRequester;