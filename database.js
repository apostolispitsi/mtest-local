const DB='mtest-local', VER=2; let db;
export async function initDB(){return new Promise((res,rej)=>{const r=indexedDB.open(DB,VER);r.onupgradeneeded=()=>{const d=r.result;if(!d.objectStoreNames.contains('banks'))d.createObjectStore('banks',{keyPath:'id',autoIncrement:true});if(!d.objectStoreNames.contains('questions')){const s=d.createObjectStore('questions',{keyPath:'id',autoIncrement:true});s.createIndex('bankId','bankId')}if(!d.objectStoreNames.contains('attempts'))d.createObjectStore('attempts',{keyPath:'id',autoIncrement:true});if(!d.objectStoreNames.contains('practiceProgress'))d.createObjectStore('practiceProgress',{keyPath:'bankId'})};r.onsuccess=()=>{db=r.result;res(db)};r.onerror=()=>rej(r.error)})}
function store(n,m='readonly'){return db.transaction(n,m).objectStore(n)}
export const all=n=>new Promise((res,rej)=>{const r=store(n).getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
export const add=(n,v)=>new Promise((res,rej)=>{const r=store(n,'readwrite').add(v);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
export const put=(n,v)=>new Promise((res,rej)=>{const r=store(n,'readwrite').put(v);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
export const remove=(n,id)=>new Promise((res,rej)=>{const r=store(n,'readwrite').delete(id);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)});
export const questionsFor=async bankId=>(await all('questions')).filter(q=>q.bankId===bankId);
export async function deleteBankCascade(bankId){const qs=await questionsFor(bankId);for(const q of qs)await remove('questions',q.id);await remove('banks',bankId)}
export async function backup(){return {version:1,banks:await all('banks'),questions:await all('questions'),attempts:await all('attempts')}}
export async function restore(data){for(const n of ['banks','questions','attempts']){await new Promise((res,rej)=>{const r=store(n,'readwrite').clear();r.onsuccess=res;r.onerror=()=>rej(r.error)});for(const v of(data[n]||[]))await put(n,v)}}

export const getOne=(n,key)=>new Promise((res,rej)=>{const r=store(n).get(key);r.onsuccess=()=>res(r.result||null);r.onerror=()=>rej(r.error)});
