import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client // Use 'this' keyword before accessing properties or methods of the instance.
            .setEndpoint(conf.appwriteUrl) // Set the Appwrite endpoint URL
            .setProject(conf.appwriteProjectId); // Set your project ID

        this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login(email, password); // Fix: Pass arguments correctly. Should be an argument to the function. and not an object.
            } 
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        } // Fix: Added missing closing brace
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service:: getCurrentUser():: ", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service:: logout()::", error);
            return false;
        }
    }
}

const authService = new AuthService();

export default authService;