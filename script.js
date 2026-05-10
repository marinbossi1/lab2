let resources = [];

fetch('data/resources.json')
    .then(response => response.json())
    .then(data => {
        resources = data;
        displayResources(resources);
    })
    .catch(error => console.log(error));

function displayResources(items) {
    const container = document.getElementById('resource-list');

    container.innerHTML = '';

    items.forEach(resource => {
        const div = document.createElement('div');

        div.classList.add('card');

        div.innerHTML = `
            <h3>${resource.name}</h3>
            <p><strong>Tip:</strong> ${resource.type}</p>
            <p><strong>Locatie:</strong> ${resource.location}</p>
            <p><strong>Program:</strong> ${resource.program}</p>
            <p><strong>Taguri:</strong> ${resource.tags.join(', ')}</p>
        `;

        container.appendChild(div);
    });
}

function filterStudy() {
    const filtered = resources.filter(resource =>
        resource.tags.includes('studiu')
    );

    displayResources(filtered);
}