import { updateDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

const updateData = async (id, data) => {
  try {
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, data);
    console.log('Document successfully updated!');
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};

export default updateData;
