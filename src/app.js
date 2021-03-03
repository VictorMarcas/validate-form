import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'El campo es requerido'
});

extend('email', {
    ...email,
    message: 'El email es inválido'
});


extend('ruc', {
    validate(value) {
        /* 10, 15, 16, 17, 20 */
        return value.substr(0, 2) === '20' || value.substr(0, 2) === '15'
        
    },
    message: 'El ruc es inválido'
})

const register = new Vue({
    el: '#app',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data() {
        return {
            name: '',
            email: '',
            ruc: ''
        }
    },
    methods: {
        handleSubmitForm () {
            console.log(this.name, this.email);
        }
    }
    //methods
    //computed
});