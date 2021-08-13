const GRAPHQL_URI = "http://localhost:9000/";
async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URI, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query{
             greeting
            }
        `,
    }),
  });
  const responseBody = await response.json();
  const title = document.querySelector("h1");
  title.textContent = responseBody.data.greeting;
}

fetchGreeting();
