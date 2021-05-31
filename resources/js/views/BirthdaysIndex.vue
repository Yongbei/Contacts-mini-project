<template>
    <ContactsList :endpoint="endpoint" />
</template>

<script>
import ContactsList from '../components/ContactsList'

export default {
    name: 'BirthdaysIndex',

    components: {
        ContactsList
    },

    data: function () {
        return {
            endpoint: '/api/birthdays',
        }
    }


}
</script>