<script>

import {error} from '@sveltejs/kit';




let selectedDate = new Date();
	let patientName = '';
	let patientPhone = '';
	let showForm = false;
	let submissionMessage = '';


    function handleDateSelect(event) {
		selectedDate = event.detail.date;
		showForm = true;
		submissionMessage = '';
	}


    async function handleSubmit() {
		if (!patientName || !patientPhone) {
			submissionMessage = 'Por favor, completa tu nombre y teléfono.';
			return;
		}

		const appointmentData = {
			date: selectedDate.toISOString().split('T')[0],
			name: patientName,
			phone: patientPhone
		};

		submissionMessage = 'Agendando tu cita...';

		try {
			// ✨ CAMBIO PRINCIPAL: Ahora llamamos a nuestro propio endpoint.
			// Como el endpoint está en la misma ruta, podemos usar una URL relativa ('').
			const response = await fetch('', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(appointmentData)
			});

			const result = await response.json(); // Leemos la respuesta de nuestro servidor

			// Mostramos el mensaje que nos envió el servidor
			submissionMessage = result.message;

			if (result.success) {
				patientName = '';
				patientPhone = '';
				showForm = false;
			}
		} catch (error) {
			submissionMessage = 'Error al conectar. Por favor, inténtalo más tarde.';
			console.error('Error:', error);
		}
	}
    // hacer el fetch en el input html
</script>