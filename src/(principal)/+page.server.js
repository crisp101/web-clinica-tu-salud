import { json } from "@sveltejs/kit";
import { N8N_URL } from '$env/static/private';


export async function POST({ request }) {

    const appointmentData = await request.json();

    if (!appointmentData.name || !appointmentData.phone) {
        return json({ success: false, message: 'El nombre y el teléfono son obligatorios.' }, { status: 400 });
    }


    try {
        const response = await fetch(N8N_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()

            });
        if (!response.ok) {
            throw new Error('Hubo un problema al conectar con el servidor.');
            // Limpiamos el formulario

        }
        return json({ success: true, message: '¡Cita agendada con éxito!' });
    } catch (error) {
        console.error('Error en el endpoint del servidor:', error);
        return json({ success: false, message: 'No se pudo agendar la cita.' }, { status: 500 });
    }
}
