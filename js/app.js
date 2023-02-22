const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
            {
                name: 'Pippo',
                avatar: 'https://upload.wikimedia.org/wikipedia/it/f/fc/Pippo_Disney.png',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Ciao Pippo',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Come va?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Male, sto morendo',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Pippo',
                avatar: 'https://upload.wikimedia.org/wikipedia/it/f/fc/Pippo_Disney.png',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Ciao Pippo',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Come va?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Male, sto morendo',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Pippo',
                avatar: 'https://upload.wikimedia.org/wikipedia/it/f/fc/Pippo_Disney.png',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Ciao Pippo',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Come va?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Male, sto morendo',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Pippo',
                avatar: 'https://upload.wikimedia.org/wikipedia/it/f/fc/Pippo_Disney.png',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Ciao Pippo',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Come va?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Male, sto morendo',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Pippo',
                avatar: 'https://upload.wikimedia.org/wikipedia/it/f/fc/Pippo_Disney.png',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Ciao Pippo',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Come va?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Male, sto morendo',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Pippo',
                avatar: 'https://upload.wikimedia.org/wikipedia/it/f/fc/Pippo_Disney.png',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Ciao Pippo',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Come va?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Male, sto morendo',
                        status: 'received'
                    },
                ]
            },
        ]
      }
    }
  }).mount('#app')