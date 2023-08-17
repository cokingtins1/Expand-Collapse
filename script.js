const buttons = document.querySelectorAll('.expand-button')

buttons.forEach(button => {
    button.addEventListener('click', e =>{
        const parent = button.parentNode
        const grandParent = parent.parentNode
        const cardBody = grandParent.querySelector('.card-body')
        
        if(e.target.textContent === 'Expand'){
            cardBody.className = 'card-body show'
            e.target.textContent = 'Collapse'
        } else{
            cardBody.className = 'card-body'
            e.target.textContent = 'Expand'


        }
        
        
    })
    
});

