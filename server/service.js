const request = require('request');

const servicesConfig = {
  services: {
    apiUrl: 'https://api.mercadolibre.com',
    endpoints: {
      search: '/sites/MLA/search',
      product: '/items',
      description: 'description'
    }
  }
};

function fetchURL(fetchURL) {
  return new Promise(resolve =>
    request.get(fetchURL, (error, response, body) => {
      resolve(JSON.parse(body));
    })
  );
}

function buildResponseData({ responseBody, singleProduct = false, quantity }) {
  const responseData = {
    author: {
      name: 'Vitor',
      lastname: 'Leonel'
    }
  };

  if (singleProduct) {
    responseData.item = responseBody;
    return responseData;
  }

  responseData.items = responseBody.results.slice(0, quantity);
  responseData.categories =
    responseBody.filters.length === 0
      ? []
      : responseBody.filters.map(f => f.values[0].name);
  return responseData;
}

async function search(query, quantity = 4) {
  const {
    services: {
      apiUrl,
      endpoints: { search }
    }
  } = servicesConfig;
  const searchURL = `${apiUrl}${search}?q=${query}`;
  const responseBody = await fetchURL(searchURL);
  return buildResponseData({ responseBody, quantity });
}

async function searchById(id) {
  const {
    services: {
      apiUrl,
      endpoints: { product }
    }
  } = servicesConfig;
  const productURL = `${apiUrl}${product}/${id}`;
  const singleProduct = true;
  const responseBody = await fetchURL(productURL);
  return buildResponseData({ responseBody, singleProduct });
}

function getDescriptionById(id) {
  const {
    services: {
      apiUrl,
      endpoints: { product, description }
    }
  } = servicesConfig;
  const productURL = `${apiUrl}${product}/${id}/${description}`;
  return fetchURL(productURL);
}

module.exports = {
  search,
  searchById,
  getDescriptionById
};
