// // START
var app = new Vue({
    el: '#root',
    data: {
        newTodoList: [
            {
                text: '',
                done: false,
            },
        ],
        // questo è un array base, dove aggiungere le nuove toDo
        todos: [
            {
                text: 'Prendi sorella da aeroporto',
                done: false,
            },
            {
                text: 'Fai la spesa',
                done: true,
            },
            {
                text: 'Aggiungere toDo Lists',
                done: false,
            },
            {
                text: 'Ricorda il cibo per il gatto',
                done: false,
            }
        ]
    },
    methods:{
        addNewTodo() {
            if(this.newTodoList.text === undefined) {
                alert('Non puoi lasciare questo campo vuoto, cerca qqualcosa da fare!')
                // se la lunghezza del .text è maggiore di 0 
                // quindi l'utente probabilmente ha digitato delle parole, effettuo push
            } else if(this.newTodoList.text.length > 0 ) {
                this.todos.push(this.newTodoList);
                this.newTodoList = [
                    {
                        text: '',
                        done: false,
                    },
                ];
            }
        },
        // cancellare todolist
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        checkTodo(singleTodo) {
            if(singleTodo.done === false) {
                singleTodo.done = true
            } else{
                singleTodo.done = false
            }
        }
    }
})