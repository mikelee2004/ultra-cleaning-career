export const WORKER_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'Вставить воркера';

export interface FormPayload {
    name: string;
    phoneNumber: string;
    age: string;
    aboutMe: string;
    shiftType: string;
}

export async function submitForm(payload: FormPayload): Promise<void> {
    const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`Ошибка отправки: ${response.status}`)
    }
}