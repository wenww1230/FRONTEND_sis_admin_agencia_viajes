<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Cambiar Mensaje</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      messageListener: null,
      notification: {
        show(message) {
          // Aquí va la lógica para mostrar la notificación
          console.log('Notificación:', message);
        },
        hide() {
          // Aquí va la lógica para ocultar la notificación
          console.log('Notificación oculta');
        }
    }
    };
  },
  mounted() {
    console.log('mounted: Se ejecuta después de montar el componente en el DOM');

    // Lógica para configurar el listener de mensajes
    this.setupMessageListener(); // EXPLICACIÓN: Se necesita garantizar que el componente esté completamente montado en el DOM antes de establecer la escucha de mensajes. De esta manera, nos aseguramos de que el componente esté listo para recibir y manejar los eventos de mensajes.
  },
  beforeUpdate() {
    console.log('beforeUpdate: Se ejecuta antes de actualizar el componente');

    // Lógica para mostrar una notificación de actualización de mensajes
    this.showMessageUpdateNotification(); // EXPLICACIÓN: Este hook se ejecuta justo antes de que el componente se actualice debido a cambios en los datos. En este punto, es apropiado mostrar una notificación para informar al usuario que los mensajes se están actualizando.
  },
  updated() {
    console.log('updated: Se ejecuta después de actualizar el componente');

    // Lógica para ocultar la notificación de actualización de mensajes
    this.hideMessageUpdateNotification(); // EXPLICACIÓN: Este hook se ejecuta después de que el componente se ha actualizado debido a cambios en los datos. Es el momento adecuado para ocultar la notificación, ya que el componente ha terminado de actualizarse y los cambios se han reflejado en el DOM.
  },
  beforeDestroy() {
    console.log('beforeDestroy: Se ejecuta antes de destruir el componente');

    // Lógica para limpiar el listener de mensajes
    this.cleanupMessageListener(); // EXPLICACIÓN: Este hook se ejecuta antes de que el componente sea destruido. Es el momento adecuado para realizar cualquier limpieza necesaria, como eliminar los listeners o liberar recursos utilizados por el componente, para evitar posibles fugas de memoria o comportamientos inesperados.
  },
  methods: {
    setupMessageListener() {
      console.log('setupMessageListener: Configurando el listener del mensaje');
      // Aquí puedes agregar la lógica para establecer un listener o suscripción a un evento que escuche cambios en el mensaje.
      // Por ejemplo:
      this.messageListener = window.addEventListener('messageUpdated', (event) => {
        this.message = event.detail;
       });
    },
    showMessageUpdateNotification() {
      console.log('showMessageUpdateNotification: Mostrando notificación de actualización de mensaje');
      // Aquí puedes agregar la lógica para mostrar una notificación visual en la interfaz de usuario.
      // Por ejemplo:
      this.notification.show('El mensaje ha sido actualizado');
    },
    hideMessageUpdateNotification() {
      console.log('hideMessageUpdateNotification: Ocultando notificación de actualización de mensaje');
      // Aquí puedes agregar la lógica para ocultar la notificación visual en la interfaz de usuario.
      // Por ejemplo:
      this.notification.hide();
    },
    cleanupMessageListener() {
      console.log('cleanupMessageListener: Limpiando el listener del mensaje');
      // Aquí puedes agregar la lógica para limpiar y cancelar la suscripción al evento del mensaje.
      // Por ejemplo:
      window.removeEventListener('messageUpdated', this.messageListener);
    },
    changeMessage() {
      console.log('changeMessage: Cambiando el mensaje');
      // Aquí puedes agregar la lógica para cambiar el mensaje.
      // Por ejemplo:
      this.message = 'Nuevo mensaje';
    }
  }
};
</script>

<style scoped>
/* Estilos del componente aquí */
</style>
