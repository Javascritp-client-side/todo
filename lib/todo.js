  export class Todo {
  static runningId = 1;
  constructor(id, description, done = false) {
    if (id === undefined) {
      this.id = Todo.runningId++;
    }
    else{
        this.id = id
    }

    this.description = description;
    this.done = done
  }
  getTodo() {
    return {
      id: this.id,
      description: this.description,
      done:this.done
    };
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDone(){
    this.done = !this.done
  }
}

