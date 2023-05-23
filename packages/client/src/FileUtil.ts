import { Web3Storage } from 'web3.storage';

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return import.meta.env.WEB3STORAGE_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM5REYzNDdEMWRDOWM0OTk5ODJmNjEyMDA5YkEwYmVlNTBBMTJFYjgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODQ4MzAwNzM0MzcsIm5hbWUiOiJhdzIwMjMifQ.P8d3_nC529Kc--BcIUSCm6bI7Dsby77AUDbBAVolCng';
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

export async function storeFiles (files: any[]) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log('stored files with cid:', cid)
    return `https://${cid}.ipfs.w3s.link/${encodeURIComponent(files[0].name)}`;
}