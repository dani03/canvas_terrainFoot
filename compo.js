(function(){
  const template = document.createElement('template');
  const style = document.createElement('style');
  

  template.innerHTML = `
  <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />
  <div class="mt-10 mx-10 flex flex-wrap py-2 rounded border-4 bg-white border-gray-300 tags">
      <span class="flex p-2 items-center ml-4 mt-0 mr-4 rounded border-3 border-solid border-green-400 bg-gray-400 tags-item" >  puissante <span class=" tag-close ml-3 cursor-pointer">X</span></span>
      <input
      class=" tag-input outline-none flex h-12 m-0 pl-3 w-64 font-normal focus:outline-none"
      type="text" placeholder="caracteristique de votre équipe">
  </div>
  `;

  style.textContent = `
     

        .tags {
            display: flex;
            flex-wrap: wrap;
            padding: 2px 0;
            border-radius: 4px;
            border: 1px solid #b6b6b6;
            background-color: white;
        }

        .tags-item {
            display: flex;
            align-items: center;
            padding: 4px;
            margin: 4px 0 4px 6px;
            border: 1px solid #DDD;
            border-radius: 2px;
            background-color: #F6F6F6;
        }

        .tags-close {
            margin-left: 10px;
            cursor: pointer;
        }

        .tag-input {
            flex: 1;
            height: 100%;
            margin: 8px 0;
            padding-left: 6px;
            outline: none;
            border: 0;
            font: inherit;
        }

        .tag-input,
        .tag-input:focus {
            outline-offset: -2px;
        }
    `;

  class TagEquipeComponent extends HTMLElement {
    constructor(){
      super();
      this.onAdd = this.onAdd.bind(this);
      this.onRemove = this.onRemove.bind(this);
      this.shadow = this.attachShadow({
        mode: 'open',
      });
      this.shadow.appendChild(style.cloneNode(true));
      this.shadow.appendChild(template.content.cloneNode(true));
      this.tagDiv = this.shadow.querySelector('.tags');
      this.tagInput = this.shadow.querySelector('.tag-input');

    }

    connectedCallback(){
      this.tagInput.addEventListener('keyup', this.onAdd, false);
      this.tagDiv.addEventListener('click', this.onRemove, false);
    }
    onAdd(event){
      const input = event.target;

      if (event.key == "Enter" ) {
        event.preventDefault();
        if(input.value.trim()){
          this.newTag = document.createElement('span');
          this.newTag.className = 'tags-item';
          this.newTag.innerHTML = `${input.value} <span class="tag-close ml-3 cursor-pointer">X</span>`;
          
          //insertion du nouveau tag avant le champ input
          this.tagDiv.insertBefore(this.newTag, input);
          input.value = '';
        }
        
      }
    }

    onRemove(event){
      if(event.target.classList.contains('tag-close')){
        event.target.parentNode.remove();
      }
    }

  }

  window.customElements.define('app-tag', TagEquipeComponent);
})();