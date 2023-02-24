const DateTime = luxon.DateTime;
const now = DateTime.now();

const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
            {
                name: 'Pippo',
                avatar: './img/pippo.png',
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
                        message: 'Male, la mia ora è giunta',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Batman',
                avatar: './img/batman.jpg',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Hey Batman',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Dimmi',
                        status: 'received'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Ci sei per una partita di calcetto? Ci manca il decimo',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:49:24',
                        message: 'Credo che tu abbia sbagliato numero',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Joel Miller',
                avatar: './img/joel.jpeg',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Joel, mi ha scritto uno zombie, ha detto "Graeajdhowdiwaoidhuwadaaaah", ne sai qualcosa?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Non mi far perdere tempo, solo uno zombie di the Walking Dead direbbe una cosa del genere. Niente a che fare con me',
                        status: 'received'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Ah ok, scusa per il disturbo',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Zombie di The Walking Dead',
                avatar: './img/zombie.jpeg',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Graeajdhowdiwaoidhuwadaaaah',
                        status: 'received'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'Come scusa? Non ho ben capito',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Graeajdhowdiwaoidhuwadaaaah',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Michael Scott',
                avatar: './img/michael.webp',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:40:02',
                        message: 'Hey Michael, what\'s your secret?',
                        status: 'sent'
                    },
                    {
                        date: '22/02/2023 14:40:12',
                        message: 'My philosophy is, basically this. And this is something that I live by. And I always have. And I always will. Don’t, ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who you are with, or, or where you are going, or, or where you’ve been. Ever. For any reason. Whatsoever.”',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Dwight Schrute',
                avatar: './img/dwight.jpeg',
                visible: true,
                messages: [
                    {
                        date: '22/02/2023 14:48:54',
                        message: 'Whenever I\'m about to do something, I think, "Would an idiot do that?" And if they would, I do not do that thing.',
                        status: 'received'
                    },
                ]
            },
        ],
        activeContactIndex: 0,
        previewLength: 55,
        lastIndex: null,
        newMessage: '',
        DateTime: DateTime,
        now: now,
        search: '',
      }
    },
    computed: {
        filtered() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        activeContact(index) {
            this.activeContactIndex = index
        },
        lastMessage(index) {
            this.lastIndex = this.contacts[index].messages.length - 1
            return this.lastIndex
        },
        cutMessage(string) {
            if (string.length > this.previewLength) {
                return string.substring(0, this.previewLength) + '...'
            } else {
                return string
            }
        },
        sendMessage() {
            console.log('enter')
            let newDate = this.now.toFormat('dd/MM/yyyy HH:mm:ss')
            let messages = this.filtered[this.activeContactIndex].messages
            messages.push(
                {
                    date: newDate,
                    message: this.newMessage,
                    status: 'sent'
                }
            )
            this.newMessage = ''
            setTimeout(function() {
                messages.push(
                    {
                        date: newDate,
                        message: 'Ok',
                        status: 'received'
                    }
                )
            }, 1000)
        },
        dateToHHmm(string) {
            const dT = this.DateTime.fromFormat(string, 'dd/MM/yyyy HH:mm:ss')
            return dT.toFormat('HH:mm')
        },
        searchChat() {
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.filtered.includes(this.contacts[i])) {
                    this.contacts[i].visible = true
                } else {
                    this.contacts[i].visible = false
                }
            }
        }
        // searchChat() {
        //     console.log(this.filteredItems)

        //     for (let i = 0; i < this.contacts.length; i++) {
        //         if (this.filteredItems) {
        //             this.contacts[i].visible = true
        //         } else {
        //             this.contacts[i].visible = false
        //         }
        //     }
        // }
        // searchChat() {
        //     let searchedWord = this.search
        //     let splittedWord = searchedWord.toLowerCase().split('')
        //     for (let i = 0; i < this.contacts.length; i++) {
        //         this.contacts[i].visible = true
        //         for (let j = 0; j < splittedWord.length; j++) {
        //             if (!this.contacts[i].name.toLowerCase().split('').includes(splittedWord[j])) {
        //                 this.contacts[i].visible = false
        //                 break
        //             } else if (splittedWord === []) {
        //                 this.contacts[i].visible = true
        //             }
        //         }
        //     }
            
        // }
    }
  }).mount('#app')