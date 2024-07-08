// Helper function to generate a random array of given size
function generateArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
}

// Helper function to create bars representing array elements
function displayArray(array) {
    const arrayContainer = document.getElementById("array-container");
    arrayContainer.innerHTML = "";
    
    array.forEach((value) => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    });
}

// Bubble Sort algorithm
async function bubbleSort() {
    const arrayContainer = document.getElementById("array-container");
    const bars = arrayContainer.children;
    
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            const bar1 = bars[j];
            const bar2 = bars[j + 1];

            bar1.style.backgroundColor = "#e74c3c";
            bar2.style.backgroundColor = "#e74c3c";

            await new Promise((resolve) => setTimeout(resolve, 50));

            const height1 = parseInt(bar1.style.height);
            const height2 = parseInt(bar2.style.height);

            if (height1 > height2) {
                [bar1.style.height, bar2.style.height] = [`${height2}px`, `${height1}px`];
            }

            bar1.style.backgroundColor = "#3498db";
            bar2.style.backgroundColor = "#3498db";
        }
    }
}

// Reset array and display on page load
function resetArray() {
    const newArray = generateArray(20); // You can adjust the array size as needed
    displayArray(newArray);
}

// Display initial array on page load
window.onload = resetArray;
