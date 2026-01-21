export async function POST(request) {
    try {
        const { email } = await request.json();

        // URL de tu Google Apps Script (la crearemos en el siguiente paso)
        const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

        if (!GOOGLE_SCRIPT_URL) {
            console.error('Google Script URL not configured');
            return Response.json({ success: false, error: 'Configuration error' }, { status: 500 });
        }

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                timestamp: new Date().toISOString(),
            }),
        });

        const data = await response.json();

        if (data.result === 'success') {
            return Response.json({ success: true });
        } else {
            return Response.json({ success: false, error: 'Failed to save' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
