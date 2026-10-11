
export async function hashPwd(p:string){const e=new TextEncoder().encode(p);const b=await crypto.subtle.digest('SHA-256',e);return Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('')}
export const getUsers=()=>{try{return JSON.parse(localStorage.getItem('zircon_appUsers_v2')||'[]')}catch{return []}}
