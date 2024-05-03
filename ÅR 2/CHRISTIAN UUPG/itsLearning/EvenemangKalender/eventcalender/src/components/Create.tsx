'use server'
import { getData, saveData } from '@/utils/handleDatabase';
import { revalidateTag } from 'next/cache';

export const create = async (formData: FormData) => {
  'use server'
  const eventName = formData.get('eventName') as string;
  const currentDate = formData.get('date') as string
  
  const data = await saveData(eventName, currentDate);
  console.log(data);
  revalidateTag("eventName");
};
export const fetchData = async () => {
  const data = await getData();
  console.log(data);
};
fetchData();
