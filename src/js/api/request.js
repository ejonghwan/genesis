

async function request({ url, method, mode, cache, credentials, headers, ContentType, redirect, referrerPolicy, body }) {

    const res = await fetch(url, {
        method,
        mode, 
        cache, 
        credentials, 
        headers: { "Content-Type": ContentType },
        redirect,
        referrerPolicy,
        body, 
    });
    const data = await res.json()

    return data;
}




export default request;
