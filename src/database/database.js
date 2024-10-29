export class Database {
    database = {}

    insert(table, data){
        if(Array.isArray(this.database[data])){
            this.database[table].push(data);
        } else {
            this.database[table] = [data];
        }
    }
}