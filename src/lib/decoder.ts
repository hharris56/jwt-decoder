export default function decodeToken(input: string): string[] {
  // split token
  const parts = input.split('.');

  // decode each part
  let res = parts.map((part) => {
    try {
      var part64 = part.replace(/-/g, '+').replace(/_/g, '/');
      var partDecoded = decodeURIComponent(atob(part64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.stringify(JSON.parse(partDecoded), null, '\t')
    } catch {
      return ''
    }
  })

  return res
}