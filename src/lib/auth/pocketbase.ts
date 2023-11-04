import PocketBase from 'pocketbase'
export const pb = new PocketBase('https://sportapp.pockethost.io')
pb.autoCancellation(false);