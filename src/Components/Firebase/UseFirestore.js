import { useState, useEffect } from "react";
import { projectFireStore } from "./config";

const UseFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    // unsubscribe from collection when we no longer use it
    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default UseFireStore;
