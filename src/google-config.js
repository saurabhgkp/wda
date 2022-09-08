import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    client_id:"924288670491-ej3p7jdftam5eqgrlkutel28qvpu9ebq.apps.googleusercontent.com",
    project_id:"question-api-353009",
    auth_uri:"https://accounts.google.com/o/oauth2/auth",
    token_uri:"https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
    client_secret:"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",
    redirect_uris:["http://localhost:3000","https://pcology.in"],
    javascript_origins:["http://localhost:3000","https://pcology.in"]

};                       
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)