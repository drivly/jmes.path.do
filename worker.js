import jmespath from 'jmespath'

export default {
  fetch: async req => {
    const { pathname, search } = new URL(req.url)
    const [_, encoded, ...target] = pathname.split('/')
    const path = decodeURI(encoded)
    const json = await fetch('https://' + target.join('/') + search, req).then(res => res.json())
    return new Response(JSON.stringify(jmespath.search(json, path), null, 2), { headers: { 'content-type': 'application/json' }})
  }
}
