import { useParams } from "react-router-dom";
import config from "../Config/config";
import { Client, Account, ID } from "appwrite";
import { useSelector } from "react-redux";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const newUser = await this.account.create(ID.unique(), email, password, name);
            if (newUser) {
                // call another method to login
                return this.login({email, password})
            }else {
                return newUser
            }
        } catch (error) {
            throw error;
        }

    }

    async login({email, password}){
        try {
           return await this.account.createEmailPasswordSession(email,password)
           
        } catch (error) {
            throw error;
        }
        
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }


  
}


const authService = new AuthService()  //doubt

export default authService
