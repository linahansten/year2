import { getData, deleteData } from '@/utils/handleDatabase';
import Link from 'next/link';
import { revalidateTag } from 'next/cache';

const deleteEvent = async (formData:FormData) => {
    const id = await formData.get('id') as string
    const data = await deleteData(id);
    console.log(data);
    revalidateTag('kale-anka');

}