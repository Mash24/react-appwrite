import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
console.log("VITE_APPWRITE_URL:", process.env.VITE_APPWRITE_URL); // Log the Appwrite URL
console.log("VITE_APPWRITE_PROJECT_ID:", process.env.VITE_APPWRITE_PROJECT_ID); // Log the Project ID
console.log("VITE_APPWRITE_DATABASE_ID:", process.env.VITE_APPWRITE_DATABASE_ID); // Log the Database ID
console.log("VITE_APPWRITE_COLLECTION_ID:", process.env.VITE_APPWRITE_COLLECTION_ID); // Log the Collection ID
console.log("VITE_APPWRITE_BUCKET_ID:", process.env.VITE_APPWRITE_BUCKET_ID); // Log the Bucket ID
console.log("VITE_APPWRITE_URL:", process.env.VITE_APPWRITE_URL); // Log the Appwrite URL
console.log("VITE_APPWRITE_PROJECT_ID:", process.env.VITE_APPWRITE_PROJECT_ID); // Log the Project ID
console.log("VITE_APPWRITE_DATABASE_ID:", process.env.VITE_APPWRITE_DATABASE_ID); // Log the Database ID
console.log("VITE_APPWRITE_COLLECTION_ID:", process.env.VITE_APPWRITE_COLLECTION_ID); // Log the Collection ID
console.log("VITE_APPWRITE_BUCKET_ID:", process.env.VITE_APPWRITE_BUCKET_ID); // Log the Bucket ID
export default defineConfig({
  plugins: [react()],
})
