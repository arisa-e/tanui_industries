import { getDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

const deleteProduct = async (id) => {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await deleteDoc(docRef);
      return true; // Deleted successfully
    } else {
      console.log('No such document!');
      return false; // Document not found
    }
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};

export { deleteProduct };
