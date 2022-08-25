import jmespath from 'jmespath'

export default {
  fetch: async req => {
    const { pathname, search } = new URL(req.url)
    const [_, path, ...target] = pathname.split('/')
    const json = await fetch('https://' + target.join('/') + search, req).then(res => res.json())
    return new Response(JSON.stringify(jmespath.search({json, path}), null, 2), { headers: { 'content-type': 'application/json' }})
  }
}
