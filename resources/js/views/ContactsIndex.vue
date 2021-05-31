<template>
    <ContactsList :endpoint="endpoint" />
</template>

<script>
import ContactsList from '../components/ContactsList'

export default {
    name: 'ContactsIndex',

    components: {
        ContactsList
    },

    data: function () {
        return {
            endpoint: '/api/contacts',
        }
    }


}
</script>