<template>
  <div class="q-pa-md">
    <q-table
        title="Users"
        :data="users"
        :columns="columns"
        row-key="name"
    >
      <q-tr :id="props.row.id" slot="body" slot-scope="props" :props="props" class="cursor-pointer">
        <q-td key="id" :props="props">
          {{props.row.id}}
        </q-td>
        <q-td key="name" :props="props">
          {{props.row.name}}
        </q-td>
        <q-td key="email" :props="props">
          {{props.row.email}}
        </q-td>
        <q-td key="role" :props="props">
          {{props.row.role}}
        </q-td>
        <q-td key="action" :props="props">
          <q-btn>Action</q-btn>
        </q-td>
      </q-tr>
    </q-table>
  </div>
</template>

<script>
// Vuex
import { mapActions } from 'vuex'
export default {
  name: 'Main',
  data() {
    return {
      users: [{
        id: 1,
        name: 'Alex',
        surname: 'Blablabla',
        role: 'admin',
        email: 'alex@mail.com'
      }],
      columns: [
        {
          name: 'id',
          required: true,
          label: 'ID',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'name',
          required: true,
          label: 'Full Name',
          align: 'left',
          field: row => `${row.name} ${row.surname}`,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.email,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'role',
          required: true,
          label: 'Role',
          align: 'left',
          field: row => row.role,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'action',
          required: true,
          label: 'Actions',
          align: 'left',
        },
      ],
    }
  },
  mounted() {
    this.users = this.getUsers();
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsersList',
    }),
  },
}
</script>