const COLORS = ["red", "blue", "green", "orange", "purple", "pink", "yellow"]; 

class GameManager {
    constructor(uiManager) {
        this.ui = uiManager;
        this.buttons = [];
        this.currentOrder = 0
    }

    startGame(n) {
        // Clears the current playfield
        this.buttons = [];
        document.getElementById("gameArea").innerHTML = "";  
        this.currentOrder = 0      
        
        this.loadButtons(n);
        setTimeout(() => {
            this.scrambleButtons();
        }, (n * 1000));
        
    }
    
    // Loads the buttons on screen
    loadButtons(n) {
        // make a COLORS copy to be able to keep each button unique in color.
        const availableColors = [...COLORS];

        for (let i = 1; i <= n; i++) {
            const index = Math.floor(Math.random() * availableColors.length);
            const color = availableColors.splice(index, 1)[0];
            const btn = new Button(color, i);
            btn.render(document.getElementById("gameArea"));

            // adds an event listener to the button to know when it's pressed
            btn.element.addEventListener("click", () => {
                this.checkOrder(btn);
            });
            
            this.buttons.push(btn);
        }
    }

    //default values of times = 3, interval = 2000ms 
    scrambleButtons(times = 3, interval = 2000) {

        // disables the buttons while shuffling around the screen
        this.buttons.forEach(btn => btn.disable());

        let count = 0;

        const scrambleInterval = setInterval(() => {
            this.buttons.forEach(btn => btn.setRandomPosition());
            count++

            if (count >= 3) {
                clearInterval(scrambleInterval);

                //Hides and enables the buttons
                this.buttons.forEach(btn => btn.hideOrder());
                this.buttons.forEach(btn => btn.enable());
            }
        }, 2000)
    }

    checkOrder(clickedButton) {
        const correctButton = this.buttons[this.currentOrder];

        // When a button is pressed correctly...
        if (clickedButton === correctButton) {
            clickedButton.displayOrder();
            this.currentOrder++;

            if (this.currentOrder === this.buttons.length) {
                // All buttons clicked in correct order
                this.ui.showMessage("CORRECT", "memory");
                this.buttons.forEach(btn => btn.disable());
            }
        } else {
            this.buttons.forEach(btn => btn.displayOrder()); // reveal all
            this.ui.showMessage("WRONG", "memory");
            this.buttons.forEach(btn => btn.disable());
        }
    }
}