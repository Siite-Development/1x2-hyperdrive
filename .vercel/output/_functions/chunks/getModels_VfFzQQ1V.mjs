import { g as getCollection } from './_astro_content_CE6LOMh5.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const make = url.searchParams.get("make");
  if (!make) {
    return new Response(JSON.stringify({ error: "Invalid search parameters" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  const allMakes = await getCollection("cars", ({ data }) => {
    return data.general.make === make;
  });
  const allModelNames = allMakes.map((model) => model.data.general.model);
  if (!allModelNames || allModelNames.length === 0) {
    return new Response(JSON.stringify({ error: "No models found" }), {
      status: 404,
      headers: { "content-type": "application/json" }
    });
  }
  return new Response(JSON.stringify(allModelNames), {
    status: 200,
    headers: { "content-type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
