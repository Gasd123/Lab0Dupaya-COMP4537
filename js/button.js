class Button {

    // Height has to be 5em, width has to be 10em
    constructor(color, order) {
        this.color = color;
        this.order = order;
        this.element = null;
    }

    render(container) {
        this.element = document.createElement("button");
        this.element.textContent = this.order;
        this.element.style.backgroundColor = this.color;
        this.element.classList.add("memory-button"); // add styling to the button.
        container.appendChild(this.element);
    }

    // Turns the button on and off while scrambling or other features
    disable() {
        if (this.element) this.element.disabled = true;
    }

    enable() {
        if (this.element) this.element.disabled = false;
    }


    // Methods to hide and display the order of the buttons when ready
    hideOrder() {
        this.element.textContent = "";
    }

    displayOrder() {
        this.element.textContent = this.order;
    }
    

    setRandomPosition() {
        // ChatGPT
        const containerWidth = window.innerWidth - 100; // 10em ≈ 100px
        const containerHeight = window.innerHeight - 80; // 5em ≈ 50px + some margin
        // End

        const x = Math.floor(Math.random() * containerWidth);
        const y = Math.floor(Math.random() * containerHeight);

        this.element.style.position = "absolute";
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }


}