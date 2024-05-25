const tasks = [
    {title: "Comprar comida para o gato", type: "Urgente"},
    {title: "Consertar Computador", type: "Importante"},
    {title: "Beber água", type: "Normal"},
    {title: "Enviar relatório trimestral", type: "Importante"},
    {title: "Fazer exercícios físicos", type: "Normal"},
    {title: "Agendar consulta médica", type: "Urgente"},
    {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
    {title: "Limpar a despensa", type: "Importante"},
    {title: "Pagar a conta de energia", type: "Urgente"},
    {title: "Assistir a um documentário interessante", type: "Normal"},
  ];
  
  function createTaskItem(object) {
    const taskItem = document.createElement("li");
    const taskInfoContainer = document.createElement("div");
    const taskType = document.createElement("span");
    const paragraph = document.createElement("p");
    const taskButtonRemoveTask = document.createElement("button");
    const lixeira = document.createElement("img");
    
    paragraph.innerText = object.title;
    lixeira.src = "./assets/trash-icon.svg";
    
    if (object.type.toLowerCase() == "urgente"){
      taskType.classList.add("span-urgent");
    }else if (object.type.toLowerCase() == "importante"){
      taskType.classList.add("span-important");
    }else if (object.type.toLowerCase() == "normal") {
      taskType.classList.add("span-normal");
    }
    
    taskItem.classList.add("task__item");
    taskInfoContainer.classList.add("task-info__container");
    taskButtonRemoveTask.classList.add("task__button--remove-task");
    
    taskButtonRemoveTask.appendChild(lixeira);
    taskInfoContainer.append(taskType, paragraph, taskButtonRemoveTask);
    taskItem.append(taskInfoContainer);
  
    taskButtonRemoveTask.addEventListener("click", function(){
      const index = tasks.indexOf(object);
      tasks.splice(index, 1);
      renderElements(tasks);
    })
  
    return taskItem;
    
  }
  const botao = document.querySelector(".form__button--add-task");
  
  botao.addEventListener("click", function(event){
    event.preventDefault();
  
    titulo = document.querySelector("#input_title").value;
    tipo = document.querySelector(".form__input--priority").value;
  
  
    if (!titulo || !tipo){
      alert("Por favor, preencha todos os campos.")
      return
    }
  
    const newTarefa = {
      title: titulo,
      type: tipo
    };
    
    tasks.push(newTarefa);
    renderElements(tasks);
  
    titulo = document.querySelector("#input_title").value = "";
    tipo = document.querySelector(".form__input--priority").value = "";;
  })
  
  
  function renderElements(array) {
    const tasksList = document.querySelector(".tasks__list");
  
    tasksList.innerHTML = "";
    
    for(let i = 0; i < array.length; i++) {
      const li = createTaskItem(array[i]);
      tasksList.appendChild(li);
    }
  }
  renderElements(tasks);