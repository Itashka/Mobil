<template>
<Page>
        
    <TabView height="100%">
        <TabViewItem class="header" title="Сделать">
            <StackLayout backgroundColor="false" width="100%" height="100%">
                <GridLayout columns="2*,*" rows="auto" width="100%">
                    <TextField row="0" col="0" v-model="textFieldValue" hint="Введите задачу" />
                    <Button row="0" col="1" text="Добавить" @tap="onButtonTap" />
                </GridLayout>
                <ListView for="todo in todos" @itemTap="onItemTap" height="100%">
                    <v-template>
                        <Label :text="todo.name" />
                    </v-template>
                </ListView>
            </StackLayout>
        </TabViewItem>
        
        <TabViewItem title="Выполнено">
            <ListView for="done in dones" @itemTap="onDoneTap" height="100%">
                <v-template>
                    <Label :text="done.name" />
                </v-template>
            </ListView>
        </TabViewItem>
    </TabView>
</Page>
</template>

<script>
    import {ApplicationSettings} from "@nativescript/core";
    export default {
        data() {
            return {
                todos: [],
                dones: [],
                textFieldValue: ""
            };
        },
        mounted() {
            if (ApplicationSettings.getString("todos")) {
                this.todos = Object.values(
                    JSON.parse(ApplicationSettings.getString("todos"))
                );
            }
        },
        methods: {
            onButtonTap() {
                if (this.textFieldValue != "") {
                    this.todos.push({name: this.textFieldValue});
                    this.textFieldValue = "";
                }
                this.save();
            },
            onItemTap: function(args) {
                action("Что тебе надобно, старче?", "Ничего мне от тебя не нужно!", [
                    "Изменить",
                    "Выполнить",
                    "Удалить"
                ]).then(result => {
                    console.log(result);
                    switch (result) {
                        case "Выполнить":
                            this.dones.unshift(args.item); 
                            this.todos.splice(args.index,1); 
                            this.save();
                            break;
                        case "Изменить":
                            prompt({
                                title: "Измени меня полностью!",
                                message: "Новая задача:",
                                okButtonText: "Изменить",
                                cancelButtonText: "Оставить всё как есть"
                            }).then(result => {
                                if (result.text != "") {
                                    this.todos[args.index].name = result.text;
                                    this.save();
                                }
                                console.log(result.text);
                            });
                            break;
                        case "Удалить":
                            this.todos.splice(args.index, 1); 
                            this.save();
                            break;
                        case "Ничего мне от тебя не нужно!" || undefined: 
                            break;
                    }
                });
            },
            onDoneTap: function(args) {
                action("Молодой, чего хотел?", "Просто уйти", [
                    "Вновь сделать смыслом жизни",
                    "Удалить"
                ]).then(result => {
                    console.log(result);
                    switch (result) {
                        case "Вновь сделать смыслом жизни":
                            this.todos.unshift(args.item);
                            this.dones.splice(args.index, 1);
                            this.save();
                        break;
                        case "Удалить":
                            this.dones.splice(args.index,1); 
                            this.save();
                        break; 
                            case "Просто уйти"||undefined:
                        break;
                    }
                });
            },
            save() {
                let toSave = Object.assign({}, this.todos);
                ApplicationSettings.setString("todos", JSON.stringify(toSave));
            }
        }
    };
</script>

<style scoped>
    label{
        color: rgb(166, 0, 216);
        font-size: 21px;
    }
</style>