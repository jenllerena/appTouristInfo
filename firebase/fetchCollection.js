import {snapshotToArray} from "../utils/snapshotToArray";
import {firestore} from "./config";

export const fetchCollection = (collection, func) => {
    firestore.collection(collection)
        .onSnapshot(snapshot => {
            const data = snapshotToArray(snapshot);
            return func(data);
        })
};