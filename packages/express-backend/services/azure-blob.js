import {BlobServiceClient} from "@azure/storage-blob"
import { v4 as uuidv4 } from "uuid";

const AZURE_CONN = process.env.AZURE_STORAGE_CONNECTION_STRING;

const blobSvc = BlobServiceClient.fromConnectionString(AZURE_CONN);
const containerClient = blobSvc.getContainerClient("clothing-images"); //from container name in portal

export async function uploadImage(){
    const blobName = `${uuidv4()}-${originalName}`;
    const blockClient = containerClient.getBlockBlobClient(blobName);

    await blockClient.uploadData(buffer, {
        blobHTTPHeaders: { blobContentType: mimeType },
      });

    return blockClient.url;
}


