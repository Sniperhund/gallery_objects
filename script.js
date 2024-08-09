const images = [
    {
        imageSrc: "https://picsum.photos/300/300?random=1",
        title: "Billedoverskrift 1",
        description: "Beskrivelse",
    },
    {
        imageSrc: "https://picsum.photos/300/300?random=2",
        title: "Billedoverskrift 2",
        description: "Beskrivelse 2",
    },
    {
        imageSrc: "https://picsum.photos/300/300?random=3",
        title: "Billedoverskrift 3",
        description: "Beskrivelse 3",
    },
    {
        imageSrc: "https://picsum.photos/300/300?random=4",
        title: "Billedoverskrift 4",
        description: "Beskrivelse 4",
    },
    {
        imageSrc: "https://picsum.photos/300/300?random=5",
        title: "Billedoverskrift 5",
        description: "Beskrivelse 5",
    },
    {
        imageSrc: "https://picsum.photos/300/300?random=6",
        title: "Billedoverskrift 6",
        description: "Beskrivelse 6",
    },
    {
        imageSrc: "https://picsum.photos/300/300?random=7",
        title: "Billedoverskrift 7",
        description: "Beskrivelse 7",
    },
    {
        imageSrc: "https://picsum.photos/300/300?random=8",
        title: "Billedoverskrift 8",
        description: "Beskrivelse 8",
    },
]

const output = document.querySelector(".output")

function createImageElement(image) {
    const div = document.createElement("div")

    div.innerHTML = `
        <img src="${image.imageSrc}" alt="Random image 1">
        <p>${image.title}</p>
        <p><i>${image.description}</i></p>   
    `

    output.appendChild(div)
}

images.forEach((image) => {
    createImageElement(image)
})
