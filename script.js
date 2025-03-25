async function fetchDogs(){
    const mainBody = document.getElementById('mainBody');

    try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const breeds = data.data;

        breeds.forEach(breed => {
            const breedDiv = document.createElement('div');
            breedDiv.className = 'breed-item';

            const name = document.createElement('h2');
            name.textContent = breed.attributes.name;

            const description = document.createElement('p');
            description.textContent = breed.attributes.description;

            const lifeSpan = document.createElement('p');
            lifeSpan.textContent = `Life Span: ${breed.attributes.life.min}-${breed.attributes.life.max} years`;

            const weight = document.createElement('p');
            weight.textContent = `Weight: ${breed.attributes.male_weight.min}-${breed.attributes.male_weight.max} kg (male), 
                                ${breed.attributes.female_weight.min}-${breed.attributes.female_weight.max} kg (female)`;

            const hypoallergenic = document.createElement('p');
            hypoallergenic.textContent = `Hypoallergenic: ${breed.attributes.hypoallergenic ? 'Yes' : 'No'}`;

            breedDiv.appendChild(name);
            breedDiv.appendChild(description);
            breedDiv.appendChild(lifeSpan);
            breedDiv.appendChild(weight);
            breedDiv.appendChild(hypoallergenic);

            mainBody.appendChild(breedDiv);
        });

    } catch (error) {
        mainBody.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

console.log("hello")
fetchDogs()