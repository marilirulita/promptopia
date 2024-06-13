import { MongoClient } from "mongodb";
 
const uri =  
  "mongodb+srv://marilirulita:DvNdpBvHZOiVbyNf@promptopia.bp93xi6.mongodb.net/?retryWrites=true&w=majority&appName=promptopia";

const client = new MongoClient(uri);
                      
 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();

         // Get the database and collection on which to run the operation
         const db = client.db("promptopia");
         const col = db.collection("users");

         // Create new documents                                                                                                                                         
         const peopleDocuments = [
           {
             "name": { "first": "mar", "last": "bautista" },
             "birth": new Date(1989, 6, 25), // May 23, 1912                                                                                                                                 
             "death": new Date(2089, 5, 7),  // May 7, 1954                                                                                                                                  
             "contribs": [ "Paz mundial", "Disminucion pobreza", "Literatura" ],
             "views": 3000000
           }
         ]

         // Insert the documents into the specified collection        
         const p = await col.insertMany(peopleDocuments);

         // Find the document
         const filter = { "name.last": "bautista" };
         const document = await col.findOne(filter);

         // Print results
         console.log("Document found:\n" + JSON.stringify(document));

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
