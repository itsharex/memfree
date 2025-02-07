import { API_TOKEN, HISTORY_HOST } from '@/lib/env';
import { isUserFullIndexed } from '@/lib/store/search';

export async function indexMessage(userId: string, title: string, url: string, text: string) {
    try {
        const indexed = await isUserFullIndexed(userId);
        if (!indexed) {
            console.log('User is not fully indexed', userId);
            return;
        }

        const response = await fetch(`${HISTORY_HOST}/api/history/single`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${API_TOKEN}`,
            },
            body: JSON.stringify({
                userId: userId,
                title: title,
                text: text,
                url: url,
                timestamp: new Date(),
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to index content: ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to index:', error);
        throw error;
    }
}
