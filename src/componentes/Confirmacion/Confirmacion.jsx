import React, { useState, useEffect } from 'react';
import { invitados } from '../../data/invitados';

function Confirmacion() {
    const [confirmado, setConfirmado] = useState(false);
    const [mensajePersonalizado, setMensajePersonalizado] = useState('');
    const WHATSAPP_NUMBER = '5215528417636';
    const [invitado, setInvitado] = useState(null);

    useEffect(() => {
        // Obtener invitado verificado
        const invitadoVerificado = JSON.parse(localStorage.getItem('invitadoVerificado') || 'null');
        setInvitado(invitadoVerificado);
        if (!invitadoVerificado) return;
        // Verifica si el usuario ya está confirmado en el js
        const encontrado = invitados.find(
            (c) => c.nombre.toLowerCase() === invitadoVerificado.nombre.toLowerCase() &&
                    c.apellido.toLowerCase() === invitadoVerificado.apellido.toLowerCase() &&
                    c.confirmado === true
        );
        if (encontrado) {
            setConfirmado(true);
            setMensajePersonalizado(`¡${encontrado.nombre} ${encontrado.apellido}, ya has sido confirmado para ${encontrado.invitados} invitados!`);
        } else {
            setConfirmado(false);
            setMensajePersonalizado('');
        }
    }, []);

    const handleConfirmacion = (e) => {
        e.preventDefault();
        if (!invitado) return;
        // Verifica si ya está confirmado antes de enviar
        const yaConfirmado = invitados.find(
            (c) => c.nombre.toLowerCase() === invitado.nombre.toLowerCase() &&
                    c.apellido.toLowerCase() === invitado.apellido.toLowerCase() &&
                    c.confirmado === true
        );
        if (yaConfirmado) {
            setConfirmado(true);
            setMensajePersonalizado(`¡${yaConfirmado.nombre} ${yaConfirmado.apellido}, ya has sido confirmado para ${yaConfirmado.invitados} invitados!`);
            return;
        }
        // Aquí deberías actualizar el js (en una app real sería en backend)
        // Construye el mensaje para WhatsApp
        const mensaje = `¡Hola! Confirmo mi asistencia al Baby Shower.\nNombre(s): ${invitado.nombre} ${invitado.apellido}\nAsistentes: ${invitado.invitados} persona(s). ¡Ahí estaremos! 😊`;
        const encodedMessage = encodeURIComponent(mensaje);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        // Solo para pruebas, muestra la tarjeta
        setConfirmado(true);
        setMensajePersonalizado(`¡${invitado.nombre} ${invitado.apellido}, has sido confirmado para ${invitado.invitados} invitados!`);
    };

    return (
        <div className="mt-5 mx-auto max-w-xs md:max-w-sm p-4">
            <h2 className="text-6xl text-center mb-5">Confirmación</h2>
            <p className=" letragirly general mb-5">Por favor confirma tu asistencia antes del 10 de Noviembre</p>
            {confirmado ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center text-3xl">
                    <strong>{mensajePersonalizado}</strong>
                </div>
            ) : (
                <form onSubmit={handleConfirmacion} className="space-y-4 mb-8">
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-200 text-red-950 text-3xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
                    >
                        ✅ Enviar confirmación por Whatsapp
                    </button>
                </form>
            )}
        </div>
    );
}

export default Confirmacion;