// select dom elements
const seeMore = document.getElementById("see-more");


let allData = []
const loadUniverse = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    allData = data.data.tools;
    const arr = allData.slice(0, 6);
    displayCards(arr);
    console.log(data);
}

seeMore.addEventListener('click', () => {
    const arr = allData.slice(6, allData.length);
    seeMore.innerText = 'Loading...';
    setTimeout(() => {
        seeMore.style.display = 'none'
        displayCards(arr);
    }, 500);

})

const displayCards = allCards => {
    const cardsContainer = document.getElementById('cards-container');


    allCards.forEach(cards => {
        const cardsDiv = document.createElement('div');
        cardsDiv.classList.add('col');
        cardsDiv.innerHTML = `
                    <div class="card p-3" style="height: 90%;">
                        <img src="${cards.image}" class="card-img-top" alt="..." width="354px" height="200px">
                        <div class="card-body px-0">
                            <h3 class="card-title fs-4">${cards.features}</h3>
                            <ol>
                                <li>Natural language processing</li>
                                <li>Contextual understanding Text</li>
                                <li>generation</li>
                            </ol>
                            <hr>
                            <div class="btn d-flex justify-content-between">
                                <div class="text-start">
                                    <h3 class="card-title">${cards.name}</h3>
                                    <p class="">${cards.published_in}</p>
                                </div>
                                <button onclick="loadDetails('${cards.id}')" id="toggle-btn" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa-solid fa-arrow-right text-danger bg-danger-subtle rounded-circle fs-5 p-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    `;

        cardsContainer.appendChild(cardsDiv);
    })
}


let tool = {}
const loadDetails = async id => {
    const Detailsurl = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const resDetails = await fetch(Detailsurl);
    const detailData = await resDetails.json();
    console.log(detailData);
    tool = detailData.data

    const modelTitle = document.getElementById('model-title')
    modelTitle.innerHTML = `
        <div class="d-lg-flex gap-4">
            <div class="card w-100 p-4 bg-danger-subtle rounded-4 border-danger ">
                <h4 class="text-justify">${tool.description}</h4>
                <div class="d-flex justify-content-between text-center  gap-2 mt-3">
                    <div class=" p-3 bg-white rounded d-flex justify-content-center align-items-center w-25">
                        <h5 class="text-success fs-6">${tool.pricing[0].price ? tool.pricing[0].price : 'dibo na tore'} ${tool.pricing[0].plan}</h5>
                    </div>
                    <div class="p-3 bg-white rounded d-flex justify-content-center align-items-center w-25">
                        <h5 class="text-warning fs-6">${tool.pricing[1].price} ${tool.pricing[1].plan}</h5>
                    </div>
                    <div class="p-3 bg-white rounded d-flex justify-content-center align-items-center w-25">
                        <h5 class="text-danger fs-6">${tool.pricing[2].price} ${tool.pricing[1].plan}</h5> 
                    </div>
                </div>

                <div class="mt-5 d-flex gap-5">
                    <div>
                         <h4>Features</h4>
                         <ul class="mt-3 text-body-secondary fs-6">
                            <li>${tool.features[1].feature_name}</li>
                            <li>${tool.features[2].feature_name}</li>
                            <li>${tool.features[3].feature_name}</li>
                            
                         </ul>
                    </div>
                    <div>
                        <h4>Integrations</h4>
                        <ul class="mt-3 text-body-secondary fs-6" >
                            <li>${tool.integrations[0] ? tool.integrations[0] : 'No data Found'}</li>
                            <li>${tool.integrations[1] ? tool.integrations[1] : 'No data Found'}</li>
                            <li>${tool.integrations[2] ? tool.integrations[2] : 'No data Found'}</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="border rounded-4 p-4  ">
                <div class="card w-100 border-0">
                    <img src="${tool.image_link[0]}" class="card-img-top rounded-4  " alt="...">
                </div>
                <div class="text-center  mt-3  mx-auto">
                    <h3 class=" text-center">${tool.input_output_examples[0].input ? tool.input_output_examples[0].input : tool.input_output_examples[1].input}</h3>
                    <p class="mt-3 px-4">${tool.input_output_examples[0].output ? tool.input_output_examples[0].output : tool.input_output_examples[1].output}</p>
                </div>
                
            </div>
        </div>
    `
}



loadUniverse();